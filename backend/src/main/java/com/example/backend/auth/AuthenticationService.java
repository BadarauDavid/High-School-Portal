package com.example.backend.auth;

import com.example.backend.config.JwtService;
import com.example.backend.enums.Role;
import com.example.backend.model.Student;
import com.example.backend.model.Teacher;
import com.example.backend.model.User;
import com.example.backend.repository.StudentRepository;
import com.example.backend.repository.TeacherRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
private final TeacherRepository teacherRepository;
private final StudentRepository studentRepository;
private final UserRepository userRepository;
private final PasswordEncoder passwordEncoder;
private final JwtService jwtService;
private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        userRepository.save(user);


        if(request.getRole().equals(Role.ROLE_STUDENT)){
            Student student = Student.builder()
                    .user(user)
                    .build();
        studentRepository.save(student);
        }

        if(request.getRole().equals(Role.ROLE_TEACHER)){
            Teacher teacher = Teacher.builder()
                    .user(user)
                    .build();
            teacherRepository.save(teacher);
        }

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }
}

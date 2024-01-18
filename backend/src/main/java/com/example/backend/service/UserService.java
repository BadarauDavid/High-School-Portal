package com.example.backend.service;

import com.example.backend.model.Teacher;
import com.example.backend.model.User;
import com.example.backend.repository.TeacherRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    public void addUserDetail(User user) {
        userRepository.save(user);
    }

    public List<User> getAllUserDetails() {
        return userRepository.findAll();
    }

    public Optional<User> findUserByEmail(String email){
      return   userRepository.findByEmail(email);
    }


    public void deleteUserDetailsById(Long id) {
        Teacher teacher = teacherRepository.findTeacherByUser_Id(id).orElseThrow();
        teacherRepository.delete(teacher);
        userRepository.deleteById(id);
    }


}

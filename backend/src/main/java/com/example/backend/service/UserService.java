package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public void addUserDetail(User user) {
        userRepository.save(user);
    }

    public List<User> getAllUserDetails() {
        return userRepository.findAll();
    }


    public void deleteUserDetailsById(Long id) {
        userRepository.deleteById(id);
    }
}

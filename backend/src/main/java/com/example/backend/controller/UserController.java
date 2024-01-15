package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/user")
public class UserController {
    private final UserService userService;


    @PostMapping("/admin/post")
    public void add(@RequestBody User user) {
        userService.addUserDetail(user);
    }

    @GetMapping("/all/getAll")
    public List<User> getAll() {
        return userService.getAllUserDetails();
    }


    @DeleteMapping("/admin/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        userService.deleteUserDetailsById(id);
    }
}

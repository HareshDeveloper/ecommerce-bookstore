package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String login(@RequestBody User loginUser) {
        User user = userService.findByUsername(loginUser.getUsername());
        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }
}
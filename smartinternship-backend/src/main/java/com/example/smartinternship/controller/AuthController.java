package com.example.smartinternship.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Model.Users;
import com.example.smartinternship.Service.SecurityService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private SecurityService securityService;

    @PostMapping("/signup")
    public String signup(@RequestBody Users user) {

        securityService.signup(user);

        return "User registered successfully";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody Users user) {

        return securityService.signin(user);
    }
}
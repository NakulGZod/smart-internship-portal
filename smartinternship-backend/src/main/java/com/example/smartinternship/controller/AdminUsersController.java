package com.example.smartinternship.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Model.Users;
import com.example.smartinternship.Repository.SecurityRepository;

import java.util.List;

@RestController
@RequestMapping("/admin/users")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminUsersController {

    @Autowired
    private SecurityRepository repo;

    @GetMapping
    public List<Users> getAllUsers() {
        return repo.findAll();
    }
}
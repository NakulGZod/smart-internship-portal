package com.example.smartinternship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Model.Internship;
import com.example.smartinternship.Repository.InternshipRepository;

@RestController
@RequestMapping("/internships")
@CrossOrigin("*")
public class InternshipController {

    @Autowired
    private InternshipRepository repo;

    @GetMapping
    public List<Internship> getInternships(){
        return repo.findAll();
    }
}
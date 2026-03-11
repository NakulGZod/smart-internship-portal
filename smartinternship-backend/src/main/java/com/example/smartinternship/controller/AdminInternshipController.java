package com.example.smartinternship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Model.Internship;
import com.example.smartinternship.Repository.InternshipRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminInternshipController {

    @Autowired
    private InternshipRepository repo;

    @PostMapping("/internships")
    public Internship addInternship(@RequestBody Internship internship){
        return repo.save(internship);
    }

    @GetMapping("/internships")
    public List<Internship> getAllInternships(){
        return repo.findAll();
    }

    @DeleteMapping("/internships/{id}")
    public String deleteInternship(@PathVariable Long id){
        repo.deleteById(id);
        return "Deleted Successfully";
    }
}
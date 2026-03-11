package com.example.smartinternship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Model.Application;
import com.example.smartinternship.Repository.ApplicationRepository;

@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {

    @Autowired
    private ApplicationRepository repo;

    @PostMapping("/apply")
    public Application apply(@RequestBody Application app){
        app.setStatus("Pending");
        return repo.save(app);
    }

    @GetMapping
    public List<Application> getAll(){
        return repo.findAll();
    }

    @GetMapping("/my/{email}")
    public List<Application> getMyApplications(@PathVariable String email){
        return repo.findByEmail(email);
    }

    @GetMapping("/{id}")
    public Application getApplication(@PathVariable Long id){
        return repo.findById(id).orElseThrow();
    }

    @PutMapping("/{id}/approve")
    public Application approve(@PathVariable Long id){
        Application app = repo.findById(id).orElseThrow();
        app.setStatus("Approved");
        return repo.save(app);
    }

    @PutMapping("/{id}/reject")
    public Application reject(@PathVariable Long id){
        Application app = repo.findById(id).orElseThrow();
        app.setStatus("Rejected");
        return repo.save(app);
    }
}
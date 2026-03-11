package com.example.smartinternship.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.smartinternship.Repository.ApplicationRepository;
import com.example.smartinternship.Model.Application;

import java.util.*;

@RestController
@RequestMapping("/admin/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @Autowired
    private ApplicationRepository repo;

    // 📊 Dashboard Stats
    @GetMapping("/stats")
    public Map<String, Long> getStats() {

        Map<String, Long> stats = new HashMap<>();

        stats.put("total", repo.count());
        stats.put("pending", repo.countByStatus("Pending"));
        stats.put("approved", repo.countByStatus("Approved"));
        stats.put("rejected", repo.countByStatus("Rejected"));

        return stats;
    }

    // 📄 Recent Applications
    @GetMapping("/recent")
    public List<Application> getRecentApplications() {

        return repo.findTop5ByOrderByIdDesc();
    }
}
package com.example.smartinternship.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.smartinternship.Model.Application;
import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

    List<Application> findByEmail(String email);

    long countByStatus(String status);

    List<Application> findTop5ByOrderByIdDesc();
}
package com.example.smartinternship.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.smartinternship.Model.Internship;

public interface InternshipRepository extends JpaRepository<Internship, Long> {

}
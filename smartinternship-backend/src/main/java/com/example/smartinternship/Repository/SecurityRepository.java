package com.example.smartinternship.Repository;

import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartinternship.Model.Users;

@Repository
public interface SecurityRepository extends JpaRepository<Users, Long> {

    // Used by Spring Security login
    Optional<Users> findByEmail(String email);

    // Used by Admin Users page
    List<Users> findAll();

}
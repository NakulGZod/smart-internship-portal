package com.example.smartinternship.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.example.smartinternship.Model.UserPrinciple;
import com.example.smartinternship.Model.Users;
import com.example.smartinternship.Repository.SecurityRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private SecurityRepository repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Users user = repo.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with email: " + email));

        return new UserPrinciple(user);
    }
}
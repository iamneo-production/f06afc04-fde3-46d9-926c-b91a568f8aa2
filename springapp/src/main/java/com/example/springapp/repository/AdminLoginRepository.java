package com.example.springapp.repository;

import com.example.springapp.model.AdminLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLoginRepository extends JpaRepository<AdminLogin, Long> {
    AdminLogin findByEmail(String email);

}

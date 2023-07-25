package com.example.springapp.repository;

import com.project.backend.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByEmail(String email);

}

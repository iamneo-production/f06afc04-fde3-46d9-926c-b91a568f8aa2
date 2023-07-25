package com.example.springapp.repository;

import com.project.backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);

    public Boolean existsByEmail(String email);

    public Boolean existsByEmailAndPassword(String email, String password);
}
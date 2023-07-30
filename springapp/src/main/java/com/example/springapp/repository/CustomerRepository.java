package com.example.springapp.repository;

import com.example.springapp.model.Customer; // Replace with the correct package of the Customer class

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    public Boolean existsByEmail(String email);
   
}
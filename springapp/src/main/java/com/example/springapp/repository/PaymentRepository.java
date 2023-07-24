package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}

package com.example.springapp.repository;

import com.project.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByCustomerId(Long customerId);
    List<Order> findByIdIn(List<Long> orderIds);
}


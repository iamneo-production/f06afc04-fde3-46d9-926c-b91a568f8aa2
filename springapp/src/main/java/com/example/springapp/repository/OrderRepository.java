package com.example.springapp.repository;

import com.example.springapp.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByCustomerId(Long customerId);
	Order findByRestaurantId(Long restaurantId);
}
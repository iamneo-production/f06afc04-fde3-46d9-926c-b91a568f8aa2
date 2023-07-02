package com.example.springapp.service;

import com.example.springapp.model.Order;
import com.example.springapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public String createOrder(Order order) {
        orderRepository.save(order);
        return "Order created";
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }
}


package com.example.springapp.service;

import com.example.springapp.model.Order;

public interface OrderService {
    String createOrder(Order order);
    Order getOrderById(Long id);
}


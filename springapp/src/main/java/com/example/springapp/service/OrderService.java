package com.example.springapp.service;

import com.project.backend.entity.Order;
import com.project.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order, Long customerId)
    {    order.setCustomerId(customerId);
        return orderRepository.save(order);
    }
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }
    public Order getOrdersByCustomerId(Long customerId) {
        return orderRepository.findByCustomerId(customerId);
    }
    public List<Order> reorderOrders(List<Long> orderIds) {
        // Implement the logic to reorder the selected orders by their IDs
        // For example, you can fetch the selected orders from the database
        List<Order> selectedOrders = orderRepository.findByIdIn(orderIds);

        // Additional logic to update order status or other details for reordering

        // Return the reordered orders
        return selectedOrders;
    }

}

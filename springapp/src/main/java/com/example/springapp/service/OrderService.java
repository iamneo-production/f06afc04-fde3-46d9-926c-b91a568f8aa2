package com.example.springapp.service;

import com.example.springapp.model.Order;

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

    public Order updateOrderStatus(Long orderId, String status) {
        Order existingOrder = orderRepository.findById(orderId).orElse(null);
        if (existingOrder != null) {
            existingOrder.setStatus(status);
            return orderRepository.save(existingOrder);
        }
        return null; // Handle error or exception if order not found
    }
}

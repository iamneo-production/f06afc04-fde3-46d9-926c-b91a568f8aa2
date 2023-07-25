package com.example.springapp.service;

import java.util.List;

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

    public Order createOrder(Order order)
    {
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
    public Order getOrdersByRestaurantId(Long restaurantId) {
        return orderRepository.findByRestaurantId(restaurantId);
    }

    public Order getOrderById(Long id)
    {
        return orderRepository.findById(id).orElse(null);
    }
    public String updateOrderStatus(Long orderId, String status) {
        Order existingOrder = orderRepository.findById(orderId).orElse(null);
        if (existingOrder != null) {
            existingOrder.setStatus(status);
            orderRepository.save(existingOrder);
            return "updated";
        } else {
            return "Order not found";
        }
    }
}

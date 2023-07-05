package com.example.springapp.controller;

import com.example.springapp.model.Order;
import com.example.springapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public String createOrder(@RequestBody Order order) {
        String response = orderService.createOrder(order);
        return response;
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        return order;
    }
     
    @GetMapping("/customerId/{customerId}")
    public Order getOrdersByCustomerId(@PathVariable Long customerId) {
        return orderService.getOrdersByCustomerId(customerId);
    }
    @GetMapping("/restaurantId/{restaurantId}")
    public Order getOrdersByRestaurantId(@PathVariable Long restaurantId) {
        return orderService.getOrdersByRestaurantId(restaurantId);
    }

    @PutMapping("/{status}")
    public Order updateOrderStatus(@RequestParam("orderId") Long orderId, @RequestParam("status") String status) {
        return orderService.updateOrderStatus(orderId, status);
    }
}

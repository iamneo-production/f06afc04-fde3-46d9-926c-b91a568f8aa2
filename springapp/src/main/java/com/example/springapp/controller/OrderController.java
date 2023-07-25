package com.example.springapp.controller;
import com.project.backend.entity.Order;
import com.project.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestParam Long customerId) {
        Order createdOrder=orderService.createOrder(order, customerId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);

    }

    @PostMapping("/reorder")
    public ResponseEntity<Object> reorderOrders(@RequestBody List<Long> orderIds) {
        List<Order> reorderedOrders = orderService.reorderOrders(orderIds);
        return ResponseEntity.ok(reorderedOrders);
    }

    @GetMapping("/customerId/{customerId}")
    public ResponseEntity<Order> getOrdersByCustomerId(@PathVariable("customerId") Long customerId) {
        Order order = orderService.getOrdersByCustomerId(customerId);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}

package com.example.springapp.controller;
import java.util.List;

import com.example.springapp.model.Order;
import com.example.springapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

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
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestParam Long customerId) {
        Order createdOrder=orderService.createOrder(order, customerId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);

    }

    @PostMapping("/reorder")
    public ResponseEntity<Object> reorderOrders(@RequestBody List<Long> orderIds) {
        List<Order> reorderedOrders = orderService.reorderOrders(orderIds);
        return ResponseEntity.ok(reorderedOrders);
    }
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrder() {
        List<Order> orders = orderService.getAllOrder();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long id) {
        Order order = orderService.getOrderById(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
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

    @GetMapping("/restaurantId/{restaurantId}")
    public Order getOrdersByRestaurantId(@PathVariable Long restaurantId) {
        return orderService.getOrdersByRestaurantId(restaurantId);
    }
    
    @PutMapping("/status")
    public ResponseEntity<String> updateOrderStatus(@RequestParam("orderId") Long orderId, @RequestParam("status") String status) {
        String result = orderService.updateOrderStatus(orderId, status);
        if (result.equals("updated")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
package com.example.springapp.controller;

import com.example.springapp.model.Delivery;
import com.example.springapp.service.DeliveryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/deliveries")
public class DeliveryController {
    private DeliveryService deliveryService = new DeliveryService();

    @PostMapping
    public ResponseEntity<String> createDelivery(@RequestBody Delivery delivery) {
        deliveryService.createDelivery(delivery);
        return ResponseEntity.status(HttpStatus.CREATED).body("Delivery created successfully!");
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getDeliveryById(@PathVariable int id) {
        Delivery delivery = deliveryService.getDeliveryById(id);
        if (delivery != null) {
            return ResponseEntity.ok(delivery.toString());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Delivery not found!");
        }
    }

    @GetMapping("/orders/{orderId}")
    public ResponseEntity<String> getDeliveriesByOrderId(@PathVariable int orderId) {
        List<Delivery> deliveries = deliveryService.getDeliveriesByOrderId(orderId);
        if (!deliveries.isEmpty()) {
            StringBuilder response = new StringBuilder();
            for (Delivery delivery : deliveries) {
                response.append(delivery.toString()).append("\n");
            }
            return ResponseEntity.ok(response.toString());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No deliveries found for the order!");
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateDeliveryStatus(@PathVariable int id, @RequestParam String status) {
        deliveryService.updateDeliveryStatus(id, status);
        return ResponseEntity.ok("Delivery status updated successfully!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDeliveryById(@PathVariable int id) {
        deliveryService.deleteDeliveryById(id);
        return ResponseEntity.ok("Delivery deleted successfully!");
    }
}


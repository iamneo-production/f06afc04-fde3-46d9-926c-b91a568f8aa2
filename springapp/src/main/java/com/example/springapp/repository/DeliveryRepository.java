package com.example.springapp.repository;

import com.example.springapp.model.Delivery;

import java.util.List;

public interface DeliveryRepository {
    void save(Delivery delivery);
    Delivery findById(int id);
    List<Delivery> findByOrderId(int orderId);
    void deleteById(int id);
    void updateDeliveryStatus(int id, String status);
}

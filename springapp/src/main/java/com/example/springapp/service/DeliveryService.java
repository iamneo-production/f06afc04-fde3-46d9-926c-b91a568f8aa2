package com.example.springapp.service;

import com.example.springapp.model.Delivery;

import java.util.ArrayList;
import java.util.List;

public class DeliveryService {
    private List<Delivery> deliveries = new ArrayList<>();

    public void createDelivery(Delivery delivery) {
        deliveries.add(delivery);
    }

    public Delivery getDeliveryById(int id) {
        for (Delivery delivery : deliveries) {
            if (delivery.getId() == id) {
                return delivery;
            }
        }
        return null;
    }

    public List<Delivery> getDeliveriesByOrderId(int orderId) {
        List<Delivery> result = new ArrayList<>();
        for (Delivery delivery : deliveries) {
            if (delivery.getOrderId() == orderId) {
                result.add(delivery);
            }
        }
        return result;
    }

    public void updateDeliveryStatus(int id, String status) {
        for (Delivery delivery : deliveries) {
            if (delivery.getId() == id) {
                delivery.setStatus(status);
                break;
            }
        }
    }

    public void deleteDeliveryById(int id) {
        deliveries.removeIf(delivery -> delivery.getId() == id);
    }
}

package com.example.springapp.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "deliveries")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int orderId;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private Date deliveryTime;

    @Column(nullable = false)
    private String deliveryAddress;





    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Delivery(int id, int orderId, String deliveryAddress, Date deliveryTime, String status) {
        this.id = id;
        this.orderId = orderId;
        this.deliveryAddress = deliveryAddress;
        this.deliveryTime = deliveryTime;
        this.status = status;
    }

    public Delivery() {
        super();
    }
}

package com.example.springapp.model;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private Long customerId;

    @Column(nullable=false)
    private Long menuItemId;

    @Column(nullable=false)
    private double totalCost;

    @Column(nullable=false)
    private String deliveryAddress;

    @Column(nullable=false)
    private Date deliveryTime;

    @Column(nullable=false)
    private Long restaurantId;

    @Column(nullable=false)
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getMenuItemId() {
        return menuItemId;
    }

    public void setMenuItemId(Long menuItemId) {
        this.menuItemId = menuItemId;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Order(Long id, Long customerId, Long menuItemId, double totalCost, String deliveryAddress, Date deliveryTime, Long restaurantId, String status) {
        this.id = id;
        this.customerId = customerId;
        this.menuItemId = menuItemId;
        this.totalCost = totalCost;
        this.deliveryAddress = deliveryAddress;
        this.deliveryTime = deliveryTime;
        this.restaurantId = restaurantId;
        this.status = status;
    }

    public Order() {
        super();
    }
}


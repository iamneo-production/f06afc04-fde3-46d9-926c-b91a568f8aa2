package com.example.springapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="payment")
public class Payment {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column(nullable=false, unique=true)
    private long orderId;

    @Column(nullable=false)
    private double amount;

    @Column(nullable=false)
    private Date date;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Payment(long id, long orderId, double amount, Date date) {
        super();
        this.id = id;
        this.orderId = orderId;
        this.amount = amount;
        this.date = date;
    }

    public Payment() {
        super();
    }
    
}

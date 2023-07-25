package com.example.springapp.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

@Entity
@Table(name="customers")
public class Customer {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    @Column(nullable=false)
    private String name;

    @Column(nullable=false, unique=true)
    private String email;

    @Column(nullable=false)
    private String password;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="address_id")
    private Address addressId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Address getAddressId() {
        return addressId;
    }

    public void setAddressId(Address addressId) {
        this.addressId = addressId;
    }

    public Customer(long id, String name, String email, String password, Address addressId) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.addressId = addressId;
    }

    public Customer() {
        super();
    }

    public void setId(Long id) {
        this.id = id;
    }


}
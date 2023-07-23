package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    public Restaurant(long id, String name, String address, Long menu_item_id, String email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.menu_item_id = menu_item_id;
        this.email = email;
    }

    @Column(nullable = false)
    private Long menu_item_id;
    private String email;
    private String password;



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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getMenu_item_id() {
        return menu_item_id;
    }

    public void setMenu_item_id(Long menu_item_id) {
        this.menu_item_id = menu_item_id;
    }

    public Restaurant(long id, String name, String address, Long menu_item_id) {
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.menu_item_id = menu_item_id;  
    }

    public Restaurant() {
        super();
    }
}
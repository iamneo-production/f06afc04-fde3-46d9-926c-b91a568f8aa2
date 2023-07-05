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

 

    @Column(nullable = false)
    private Long menu_item_id;
    private String email;
    private String password;
<<<<<<< HEAD
    private String deliverytime;
    private String minimumordervalue;
    private String imageData;
    private String cuisinetype;
    private String rating;
=======
    private String cuisinetype;
    private String rating;
    public Restaurant(String cuisinetype, String rating, String deliverytime, String minimumordervalue,
            String imageData) {
        this.cuisinetype = cuisinetype;
        this.rating = rating;
        this.deliverytime = deliverytime;
        this.minimumordervalue = minimumordervalue;
        this.imageData = imageData;
    }

    private String deliverytime;
    private String minimumordervalue;
    private String imageData;


>>>>>>> 6dec428 (First commit)


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


    public String getDeliverytime() {
        return deliverytime;
    }

    public void setDeliverytime(String deliverytime) {
        this.deliverytime = deliverytime;
    }

    public String getMinimumordervalue() {
        return minimumordervalue;
    }

    public void setMinimumordervalue(String minimumordervalue) {
        this.minimumordervalue = minimumordervalue;
    }

    public String getImageData() {
        return imageData;
    }

    public void setImageData(String imageData) {
        this.imageData = imageData;
    }

    public String getCuisinetype() {
        return cuisinetype;
    }

    public void setCuisinetype(String cuisinetype) {
        this.cuisinetype = cuisinetype;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public Restaurant(long id, String name, String address, Long menu_item_id, String email, String password) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.menu_item_id = menu_item_id;
        this.email = email;
        this.password = password;
    }

    

    public Restaurant(long id, String name, String address, Long menu_item_id) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.menu_item_id = menu_item_id;
    }

    public Restaurant(String deliverytime, String minimumordervalue, String imageData, String cuisinetype,
            String rating) {
        this.deliverytime = deliverytime;
        this.minimumordervalue = minimumordervalue;
        this.imageData = imageData;
        this.cuisinetype = cuisinetype;
        this.rating = rating;
    }

    public Restaurant() {
        super();
    }
}
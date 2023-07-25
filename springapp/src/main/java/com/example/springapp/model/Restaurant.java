package com.example.springapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;



    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }



    @Column(nullable = false)
    private String address;

    @Column(nullable=false, unique=true)
    private String email;
    @Column(nullable=false)
    private String password;

    @Column(nullable=false)
    private  String deliverytime;


    @Column(nullable = false)
    private String phone_number;

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

    @Column(nullable=false)
    private  String minimumordervalue;
    @Column(nullable=false)
    private String imageData;

    @Column(nullable=false)
    private  String cuisinetype;
    @Column(nullable=false)
    private String rating;





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




    public Restaurant(long id, String name,
                      String email, String password, String address, String deliverytime, String phoneNumber, String cuisinetype, String rating) {

        super();
        this.id = id;
        this.name = name;

        this.email = email;
        this.password = password;
        this.address = address;
        this.deliverytime = deliverytime;
        phone_number = phoneNumber;
        this.cuisinetype = cuisinetype;
        this.rating = rating;

    }





    public Restaurant() {
        super();
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
}
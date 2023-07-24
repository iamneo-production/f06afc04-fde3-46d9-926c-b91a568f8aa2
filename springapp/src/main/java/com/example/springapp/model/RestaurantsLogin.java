package com.example.springapp.model;


import javax.persistence.*;

@Entity
@Table(name="restaurants")
public class RestaurantsLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;



    public RestaurantsLogin() {

    }

    public RestaurantsLogin(String email, String password) {
        this.email = email;
        this.password = password;
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
}

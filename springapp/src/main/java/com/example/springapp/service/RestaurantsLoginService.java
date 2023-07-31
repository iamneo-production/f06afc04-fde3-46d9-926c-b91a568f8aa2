package com.example.springapp.service;

import com.example.springapp.model.RestaurantsLogin;
import com.example.springapp.repository.RestaurantsLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantsLoginService {

    private final RestaurantsLoginRepository restaurantsLoginRepository;



    @Autowired
    public RestaurantsLoginService(RestaurantsLoginRepository restaurantsLoginRepository) {
        this.restaurantsLoginRepository = restaurantsLoginRepository;
    }

    public String restaurantsLogin(String email, String password) {
        RestaurantsLogin existingRestaurantsLogin = restaurantsLoginRepository.findByEmail(email);

        if (existingRestaurantsLogin != null && existingRestaurantsLogin.getPassword().equals(password)) {
            // Credentials matched, login successful
            return "Restaurants Login successful";
        } else {
            // Invalid credentials, return an error message
            return "Invalid credentials. Please try again.";
        }
    }



}

package com.example.springapp.service;

import com.project.backend.entity.Restaurant;
import com.project.backend.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        super();
        this.restaurantRepository = restaurantRepository;
    }

    public String register(Restaurant restaurant)
    {    if(! restaurantRepository.existsByEmail(restaurant.getEmail())) {
        restaurantRepository.save(restaurant);
        return "Restaurant created";
    }
        return "Restaurant not created, email is already registered";

    }

    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }



    public Restaurant updateRestaurant(Restaurant restaurant) {

       boolean restaurantExists = restaurantRepository.existsById(restaurant.getId());
        if (restaurantExists) {

            return restaurantRepository.save(restaurant);
        } else {
            return null;
        }
    }


    public Restaurant findByRestaurantName(String name) {
        return restaurantRepository.findByName(name);
    }
}
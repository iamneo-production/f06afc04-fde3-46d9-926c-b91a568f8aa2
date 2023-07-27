package com.example.springapp.service;

import com.example.springapp.model.Admin;
import com.example.springapp.model.Restaurant;
import com.example.springapp.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    private RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        super();
        this.restaurantRepository = restaurantRepository;
    }

    public String createRestaurant(Restaurant restaurant) {
        if (!restaurantRepository.existsByEmail(restaurant.getEmail())) {
            restaurantRepository.save(restaurant);
            return "Restaurant created";
        } else {
            return "already registered";
        }
    }

    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    public List<Restaurant> getRestaurantsByCuisine(String cuisineType) {
        return restaurantRepository.findByCuisinetypeContainingIgnoreCase(cuisineType);
    }
    

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }

    public Restaurant updateRestaurant(Long id, Restaurant restaurant) {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findById(id);
        if (restaurantOptional.isPresent()) {
            Restaurant existingRestaurant = restaurantOptional.get();
            existingRestaurant.setName(restaurant.getName());
            existingRestaurant.setAddress(restaurant.getAddress());
            existingRestaurant.setMenu_item_id(restaurant.getMenu_item_id());
            return restaurantRepository.save(existingRestaurant);
        }
        return null;
    }

    public Restaurant findByRestaurantName(String name) {
        return restaurantRepository.findByName(name);
    }

    public String deleteRestaurantById(Long id) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(id);
        if (optionalRestaurant.isPresent()) {
            restaurantRepository.delete(optionalRestaurant.get());
            return "Restaurant deleted successfully";
        } else {
            return null;
        }
    }
}
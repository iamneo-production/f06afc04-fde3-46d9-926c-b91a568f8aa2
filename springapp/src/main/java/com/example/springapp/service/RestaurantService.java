package com.example.springapp.service;

import com.example.springapp.model.Restaurant;
import com.example.springapp.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    private RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        super();
        this.restaurantRepository = restaurantRepository;
    }

    public Restaurant createRestaurant(Restaurant restaurant)
    {
        return restaurantRepository.save(restaurant);
    }

   public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }
<<<<<<< HEAD
    
=======
    public Restaurant updateRestaurant(Restaurant restaurant) {
        Long id = restaurant.getId();
        Restaurant existingRestaurant = restaurantRepository.findById(id).orElse(null);
        if (existingRestaurant != null) {
            existingRestaurant.setName(restaurant.getName());
            existingRestaurant.setAddress(restaurant.getAddress());
            existingRestaurant.setMenu_item_id(restaurant.getMenu_item_id());
            return restaurantRepository.save(existingRestaurant);
        } else {
            return null;
        }
    }

>>>>>>> 0a2df80 (updated the restaurant controller)
     public Restaurant findByRestaurantName(String name) {
    return restaurantRepository.findByName(name);
}

public String updateRestaurant(Restaurant restaurant) {
    boolean restaurantExists = restaurantRepository.existsById(restaurant.getId());
    if(restaurantExists) {
        restaurantRepository.save(restaurant);
        return "Restaurant updated successfully";
    }
    else {
        return "No restaurant with the given id";
    }
}
}
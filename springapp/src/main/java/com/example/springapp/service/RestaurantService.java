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
    public  Restaurant restaurant(Restaurant restaurant){
        long  id = restaurant.getId();
       Restaurant res = restaurantRepository.findById(id).get();
       res.setName(restaurant.getName());
       res.setAddress(restaurant.getAddress());
       res.setMenu_item_id(restaurant.getMenu_item_id());
       return restaurantRepository.save(res);
 
 
     }

     public Restaurant findByRestaurantName(String name) {
    return restaurantRepository.findByName(name);
}

}



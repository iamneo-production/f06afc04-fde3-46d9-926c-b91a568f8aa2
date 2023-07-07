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

<<<<<<< HEAD
    public String createRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
        return "Restaurant created";
    }

    public List<Restaurant> getRestaurant() {
=======
    public Restaurant createRestaurant(Restaurant restaurant)
    {
        return restaurantRepository.save(restaurant);
    }

   public List<Restaurant> getAllRestaurant() {
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }
<<<<<<< HEAD
}



=======
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
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789

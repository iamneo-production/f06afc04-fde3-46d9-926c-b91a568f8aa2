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
<<<<<<< HEAD
    public String createRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
        return "Restaurant created";
    }

    public List<Restaurant> getRestaurant() {
=======
=======
>>>>>>> f288ea2a64350e396d9fa82821278236b095453c
    public Restaurant createRestaurant(Restaurant restaurant)
    {
        return restaurantRepository.save(restaurant);
    }

   public List<Restaurant> getAllRestaurant() {
<<<<<<< HEAD
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
=======
>>>>>>> f288ea2a64350e396d9fa82821278236b095453c
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> f288ea2a64350e396d9fa82821278236b095453c

    

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

<<<<<<< HEAD
=======
    public  Restaurant restaurant(Restaurant restaurant){
        long  id = restaurant.getId();
       Restaurant res = restaurantRepository.findById(id).get();
       res.setName(restaurant.getName());
       res.setAddress(restaurant.getAddress());
       res.setMenu_item_id(restaurant.getMenu_item_id());
       return restaurantRepository.save(res);
 
 
     }
=======
>>>>>>> f288ea2a64350e396d9fa82821278236b095453c

     public Restaurant findByRestaurantName(String name) {
    return restaurantRepository.findByName(name);
}
}
<<<<<<< HEAD
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
=======


>>>>>>> f288ea2a64350e396d9fa82821278236b095453c

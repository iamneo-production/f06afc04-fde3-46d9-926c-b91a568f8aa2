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
    public Restaurant createRestaurant(Restaurant restaurant)
    {
        return restaurantRepository.save(restaurant);
    }

   public List<Restaurant> getAllRestaurant() {
=======
    public String createRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
        return "Restaurant created";
    }

    public List<Restaurant> getRestaurant() {
>>>>>>> ebb8483 (api 11,12,13)
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id).orElse(null);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e0587b5 (api 14 is completed)
    public  Restaurant restaurant(Restaurant restaurant){
        long  id = restaurant.getId();
       Restaurant res = restaurantRepository.findById(id).get();
       res.setName(restaurant.getName());
       res.setAddress(restaurant.getAddress());
       res.setMenu_item_id(restaurant.getMenu_item_id());
       return restaurantRepository.save(res);
 
 
     }
<<<<<<< HEAD

     public Restaurant findByRestaurantName(String name) {
    return restaurantRepository.findByName(name);
}
<<<<<<< HEAD
}
=======
}
>>>>>>> 88b72a8 (test-case_success)
<<<<<<< HEAD
=======
=======
}
=======
<<<<<<< HEAD
}
=======
}
=======
=======
>>>>>>> e0587b5 (api 14 is completed)
}



>>>>>>> ebb8483 (api 11,12,13)
>>>>>>> ed4dde3 (api 11,12,13)
>>>>>>> 8a97903 (api 11,12,13)
>>>>>>> 9f58a86 (api 11,12,13)
>>>>>>> c1de581 (api 14 is completed)

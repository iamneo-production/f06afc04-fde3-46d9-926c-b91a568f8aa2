package com.example.springapp.controller;

import com.example.springapp.model.Restaurant;
import com.example.springapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
=======
>>>>>>> ebb8483 (api 11,12,13)

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService) {
        super();
        this.restaurantService = restaurantService;
    }

    @PostMapping
<<<<<<< HEAD
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
         Restaurant createdRestaurant=restaurantService.createRestaurant(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRestaurant);
=======
    public String createRestaurant(@RequestBody Restaurant restaurant) {
        String response = restaurantService.createRestaurant(restaurant);
        return response;
>>>>>>> ebb8483 (api 11,12,13)
    }


    @GetMapping
<<<<<<< HEAD
    public ResponseEntity<List<Restaurant>> getAllRestaurant() {
    List<Restaurant> restaurants = restaurantService.getAllRestaurant();
    if (restaurants.isEmpty()) {
        return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(restaurants);
    }
    @GetMapping("/name")
    public ResponseEntity<Restaurant> getRestaurantByName(@RequestParam("name") String name) {
        Restaurant restaurant = restaurantService.findByRestaurantName(name);
        if (restaurant != null) {
            return ResponseEntity.ok(restaurant);
        } else {
            return ResponseEntity.notFound().build();
        }
=======
    public List<Restaurant> getRestaurant() {
        return restaurantService.getRestaurant();
>>>>>>> ebb8483 (api 11,12,13)
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable Long id) {
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        if (restaurant != null) {
            return ResponseEntity.ok(restaurant);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> ed4dde3 (api 11,12,13)
=======
<<<<<<< HEAD
=======
>>>>>>> e0587b5 (api 14 is completed)
>>>>>>> 2eaf1cb (api 14 is completed)
    @PutMapping
    public  Restaurant updateRestaurant(@RequestBody Restaurant restaurant)
    {
        return restaurantService.restaurant(restaurant);
        return restaurantRepository.save(res);

    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> 8a97903 (api 11,12,13)
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 2eaf1cb (api 14 is completed)
>>>>>>> 327d11e (api 14 is completed)
}

    
  

    
<<<<<<< HEAD

=======
=======
=======
>>>>>>> e0587b5 (api 14 is completed)

    }

>>>>>>> ebb8483 (api 11,12,13)

>>>>>>> ed4dde3 (api 11,12,13)
>>>>>>> 8a97903 (api 11,12,13)

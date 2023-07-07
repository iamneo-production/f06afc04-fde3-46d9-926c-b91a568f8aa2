package com.example.springapp.controller;

import com.example.springapp.model.Restaurant;
import com.example.springapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
=======
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789

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
    public String createRestaurant(@RequestBody Restaurant restaurant) {
        String response = restaurantService.createRestaurant(restaurant);
        return response;
=======
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
         Restaurant createdRestaurant=restaurantService.createRestaurant(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRestaurant);
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
    }


    @GetMapping
<<<<<<< HEAD
    public List<Restaurant> getRestaurant() {
        return restaurantService.getRestaurant();
=======
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
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
    }

    @GetMapping("/{id}")
    public Restaurant getRestaurantById(@PathVariable Long id) {
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        return restaurant;
    }
<<<<<<< HEAD

    }

=======
    @PutMapping
    public  Restaurant updateRestaurant(@RequestBody Restaurant restaurant)
    {
        return restaurantService.restaurant(restaurant);

    }
}

    
  

    
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789


package com.example.springapp.controller;

import com.example.springapp.model.Restaurant;
import com.example.springapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

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
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
         Restaurant createdRestaurant=restaurantService.createRestaurant(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRestaurant);
    }


    @GetMapping
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

    @PutMapping
    public  Restaurant updateRestaurant(@RequestBody Restaurant restaurant)
    {
        return restaurantService.restaurant(restaurant);
        return restaurantRepository.save(res);

    }
}
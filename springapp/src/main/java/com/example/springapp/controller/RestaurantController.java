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
    public ResponseEntity<String> createRestaurant(@RequestBody Restaurant restaurant) {
        String result = restaurantService.createRestaurant(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
    @GetMapping("/cuisine")
    public ResponseEntity<List<Restaurant>> getRestaurantsByCuisine(@RequestParam("cuisineType") String cuisineType) {
        List<Restaurant> restaurants = restaurantService.getRestaurantsByCuisine(cuisineType);
        if (restaurants.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(restaurants);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@PathVariable Long id, @RequestBody Restaurant restaurantData) {
        Restaurant updatedRestaurant = restaurantService.updateRestaurant(id, restaurantData);
        if (updatedRestaurant != null) {
            return ResponseEntity.ok(updatedRestaurant);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurant() {
        List<Restaurant> restaurants = restaurantService.getAllRestaurant();
        if (restaurants.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(restaurants);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable Long id) {
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        if (restaurant != null) {
            return ResponseEntity.ok(restaurant);
        }
        return ResponseEntity.notFound().build();
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

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRestaurant(@PathVariable Long id) {
        String result = restaurantService.deleteRestaurantById(id);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

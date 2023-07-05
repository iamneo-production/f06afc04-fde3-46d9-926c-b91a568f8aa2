package com.example.springapp.controller;

import com.example.springapp.model.Restaurant;
import com.example.springapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public String createRestaurant(@RequestBody Restaurant restaurant) {
        String response = restaurantService.createRestaurant(restaurant);
        return response;
    }


    @GetMapping
    public List<Restaurant> getRestaurant() {
        return restaurantService.getRestaurant();
    }

    @GetMapping("/{id}")
    public Restaurant getRestaurantById(@PathVariable Long id) {
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        return restaurant;
    }
    @PutMapping
    public  Restaurant updateRestaurant(@RequestBody Restaurant restaurant)
    {
        return restaurantService.restaurant(restaurant);

    }

    }



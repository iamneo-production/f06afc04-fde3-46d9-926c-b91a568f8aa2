package com.example.springapp.controller;


import com.example.springapp.model.RestaurantsLogin;
import com.example.springapp.service.RestaurantsLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class RestaurantsLoginController {

    private final RestaurantsLoginService restaurantLoginService;

    @Autowired
    public RestaurantsLoginController(RestaurantsLoginService restaurantLoginService) {
        this.restaurantLoginService = restaurantLoginService;
    }

    @PostMapping("/restaurantsLogin")
    public ResponseEntity<Map<String, String>> adminLogin(@RequestBody RestaurantsLogin restaurantLogin) {
        String result = restaurantLoginService.restaurantsLogin(restaurantLogin.getEmail(), restaurantLogin.getPassword());
        HttpStatus status = result.equals("Restaurants Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        Map<String, String> response = new HashMap<>();
        response.put("message", result);
        return ResponseEntity.status(status).body(response);
    }




}

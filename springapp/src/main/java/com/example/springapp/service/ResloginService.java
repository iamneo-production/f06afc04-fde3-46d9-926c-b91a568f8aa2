package main.java.com.example.springapp.service;

import com.project.backend.entity.Reslogin;
import com.project.backend.entity.Restaurant;

import com.project.backend.repository.ResloginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResloginService {

    private final ResloginRepository resloginRepository;


    @Autowired
    RestaurantService restaurantService;


    @Autowired
    public ResloginService(ResloginRepository resloginRepository) {
        this.resloginRepository = resloginRepository;

    }

    public Restaurant reslogin(String email, String password) {
        Reslogin existingLogin = resloginRepository.findByEmail(email);
        Restaurant restaurant = null;

        if (existingLogin != null && existingLogin.getPassword().equals(password)) {
            // Credentials matched, redirect to the Home component
            restaurant = restaurantService.getRestaurantById(existingLogin.getId());
            restaurant.setPassword("");
//            
        } else {
            // Invalid credentials, show an alert
//          
        }
        return restaurant;
    }

}

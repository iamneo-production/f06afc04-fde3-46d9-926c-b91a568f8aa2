package com.example.springapp.repository;

import com.project.backend.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByEmail(String email);
    Restaurant findByName(String name);
    public Boolean existsByEmail(String email);
    public Boolean existsByEmailAndPassword(String email, String password);

}
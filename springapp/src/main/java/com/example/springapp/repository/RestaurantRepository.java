package com.example.springapp.repository;

import com.example.springapp.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByName(String name);
    Optional<Restaurant> findByEmail(String email);

    public Boolean existsByEmail(String email);
    public Boolean existsByEmailAndPassword(String email, String password);

    void deleteById(Long id);
}




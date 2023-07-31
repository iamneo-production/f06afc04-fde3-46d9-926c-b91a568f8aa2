package com.example.springapp.repository;

import com.example.springapp.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List; // Add this import

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByName(String name);

    Optional<Restaurant> findByEmail(String email);

    Boolean existsByEmail(String email);

    List<Restaurant> findByCuisinetypeContainingIgnoreCase(String cuisineType);

    void deleteById(Long id);
}


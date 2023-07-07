package com.example.springapp.repository;

import com.example.springapp.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

<<<<<<< HEAD
=======
    Restaurant findByName(String name);


>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
}

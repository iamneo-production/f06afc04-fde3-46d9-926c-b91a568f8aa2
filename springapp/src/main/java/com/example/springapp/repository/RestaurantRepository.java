package com.example.springapp.repository;

import com.example.springapp.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

<<<<<<< HEAD
    Restaurant findByName(String name);


=======
>>>>>>> ebb8483 (api 11,12,13)
}

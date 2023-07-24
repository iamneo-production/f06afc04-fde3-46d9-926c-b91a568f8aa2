package com.example.springapp.repository;

import com.example.springapp.model.RestaurantsLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantsLoginRepository extends JpaRepository<RestaurantsLogin, Long> {
    RestaurantsLogin findByEmail(String email);

}

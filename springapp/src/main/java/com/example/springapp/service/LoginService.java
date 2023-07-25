package com.example.springapp.service;

import com.project.backend.entity.Customer;
import com.project.backend.entity.Login;
import com.project.backend.entity.Restaurant;
import com.project.backend.repository.LoginRepository;
import com.project.backend.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final LoginRepository loginRepository;



    @Autowired
    CustomerService customerService;



    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;

    }


    public Customer login(String email, String password) {
        Login existingLogin = loginRepository.findByEmail(email);
        Customer customer = null;

        if (existingLogin != null && existingLogin.getPassword().equals(password)) {
            // Credentials matched, redirect to the Home component
            customer = customerService.getUserProfileById(existingLogin.getId());
            customer.setPassword("");
//            return "Login successful";
        } else {
            // Invalid credentials, show an alert
//            return "Invalid credentials. Please try again.";
        }
        return customer;
    }


    public String logout() {

        return "Logout successfully done";

    }
}
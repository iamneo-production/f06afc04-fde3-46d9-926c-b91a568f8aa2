package com.example.springapp.service;

import com.example.springapp.model.AdminLogin;
import com.example.springapp.model.Login;
import com.example.springapp.repository.AdminLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminLoginService {

    private final AdminLoginRepository adminLoginRepository;



    @Autowired
    public AdminLoginService(AdminLoginRepository adminLoginRepository) {
        this.adminLoginRepository = adminLoginRepository;
    }

    public String adminLogin(String email, String password) {
        AdminLogin existingAdminLogin = adminLoginRepository.findByEmail(email);

        if (existingAdminLogin != null && existingAdminLogin.getPassword().equals(password)) {
            // Credentials matched, redirect to the Home component
            return "AdminLogin successful";
        } else {
            // Invalid credentials, show an alert
            return "Invalid credentials. Please try again.";
        }
    }


}

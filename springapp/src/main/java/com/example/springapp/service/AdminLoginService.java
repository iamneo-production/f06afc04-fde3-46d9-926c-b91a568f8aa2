package com.example.springapp.service;

import com.example.springapp.model.AdminLogin;
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
        // You can remove the default credentials handling from the backend since we are handling it in the frontend.
        AdminLogin existingAdminLogin = adminLoginRepository.findByEmail(email);

        if (existingAdminLogin != null && existingAdminLogin.getPassword().equals(password)) {
            // Credentials matched, return success message
            return "AdminLogin successful";
        }

        // Invalid credentials, return failure message
        return "Invalid credentials. Please try again.";
    }
}

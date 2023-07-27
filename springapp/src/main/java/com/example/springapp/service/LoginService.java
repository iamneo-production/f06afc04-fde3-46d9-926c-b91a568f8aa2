package com.example.springapp.service;

import com.example.springapp.model.Login;
import com.example.springapp.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class LoginService {

    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public String login(String email, String password) {
        Login existingLogin = loginRepository.findByEmail(email);

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        if (existingLogin != null && bCryptPasswordEncoder.matches(password, existingLogin.getPassword())) {
            // Credentials matched, redirect to the Home component
            return "Login successful";
        } else {
            // Invalid credentials, show an alert
            return "Invalid credentials. Please try again.";
        }
    }

    public String logout() {
        return "Logout successfully done";
    }
}

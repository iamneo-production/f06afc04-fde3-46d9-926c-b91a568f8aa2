package com.example.springapp.controller;

import com.project.backend.entity.Customer;
import com.project.backend.entity.Login;
import com.project.backend.entity.Reslogin;
import com.project.backend.entity.Restaurant;
import com.project.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<Customer> login(@RequestBody Login login) {
        Customer result = loginService.login(login.getEmail(), login.getPassword());
//        HttpStatus status = result.equals("Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        HttpStatus status = (result != null) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(result);

    }



    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        String result = loginService.logout();
        return ResponseEntity.ok(result);
    }



}
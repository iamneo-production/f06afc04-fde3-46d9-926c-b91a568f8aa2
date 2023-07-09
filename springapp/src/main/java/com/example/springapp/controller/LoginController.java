package com.example.springapp.controller;

import com.example.springapp.model.Login;
import com.example.springapp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Login login) {
       String result = loginService.login(login.getEmail(), login.getPassword());
       HttpStatus status = result.equals("Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
       return ResponseEntity.status(status).body(result);
  
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        String result = loginService.logout();
        return ResponseEntity.ok(result);
    }



}

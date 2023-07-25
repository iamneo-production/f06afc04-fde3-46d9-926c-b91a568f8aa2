package com.example.springapp.controller;

import com.example.springapp.model.Login;
import com.example.springapp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Login login) {
        String result = loginService.login(login.getEmail(), login.getPassword());
        HttpStatus status = result.equals("Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        Map<String, String> response = new HashMap<>();
        response.put("message", result);
        return ResponseEntity.status(status).body(response);
    }


    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout() {
        String result = loginService.logout();

        Map<String, String> response = new HashMap<>();
        response.put("message", result);

        return ResponseEntity.ok(response);
    }
}

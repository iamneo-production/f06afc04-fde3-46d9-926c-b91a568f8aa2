package com.example.springapp.controller;

import com.example.springapp.model.AdminLogin;
import com.example.springapp.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class AdminLoginController {

    private final AdminLoginService adminLoginService;

    @Autowired
       public AdminLoginController(AdminLoginService adminLoginService) {
        this.adminLoginService = adminLoginService;
    }

    @PostMapping("/adminLogin")
    public ResponseEntity<Map<String, String>> adminLogin(@RequestBody AdminLogin adminLogin) {
        String result = adminLoginService.adminLogin(adminLogin.getEmail(), adminLogin.getPassword());
        HttpStatus status = result.equals("AdminLogin successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        Map<String, String> response = new HashMap<>();
        response.put("message", result);
        return ResponseEntity.status(status).body(response);
    }



}

package com.example.springapp.controller;

import com.project.backend.entity.Customer;
import com.project.backend.service.CustomerService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;



    @PostMapping
    public ResponseEntity<String> register(@RequestBody Customer customer) {
        String result = customerService.register(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getUserProfileById(@PathVariable("id") Long id) {
        Customer customer = customerService.getUserProfileById(id);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value="/updateprofile",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> updateUserProfile(@RequestBody Customer customer) {
        Customer result = customerService.updateUserProfile(customer);
        if (result != null) {
            return ResponseEntity.status(HttpStatus.OK).body(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
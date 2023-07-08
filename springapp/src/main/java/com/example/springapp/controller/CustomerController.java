package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Customer;
import com.example.springapp.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/customer")
	public String register(@RequestBody Customer customer) {
		return customerService.register(customer);
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

    @PutMapping
    public ResponseEntity<String> updateUserProfile(@RequestBody Customer customer) {
        String result = customerService.updateUserProfile(customer);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

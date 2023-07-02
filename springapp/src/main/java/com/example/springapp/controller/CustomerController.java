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
	
	@GetMapping("/customer/id")
	public Customer getUserProfile(@RequestParam long id, @RequestHeader String email, @RequestHeader String password) {
		return customerService.getUserProfile(id, email, password);
	}
	
	@PutMapping("/customer")
	public String updateUserProfile(@RequestBody Customer customer) {
		return customerService.updateUserProfile(customer);
	}
}

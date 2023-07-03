package com.example.springapp.service;

import com.example.springapp.model.Customer;

public interface CustomerService {
	
	String register(Customer customer);
	
	Customer getUserProfile(long id, String email, String password);
	
	String updateUserProfile(Customer customer);
}

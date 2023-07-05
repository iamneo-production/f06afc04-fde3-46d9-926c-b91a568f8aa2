package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Customer;
import com.example.springapp.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public String register(Customer customer) {
		if(! customerRepository.existsByEmail(customer.getEmail())) {
			customerRepository.save(customer);
			return "Customer created";
		}
		return "Customer not created, email is already registered";
	}
	
	public Customer getUserProfile(long id, String email, String password) {
		if(customerRepository.existsByEmailAndPassword(email, password)) {
			Customer customer = customerRepository.findById(id).orElse(null);
			return customer;
		}
		else {
			return null;
		}
	}
	
	public String updateUserProfile(Customer customer) {
		boolean customerExists = customerRepository.existsById(customer.getId());
		if(customerExists) {
			customerRepository.save(customer);
			return "";
		}
		else {
			return "No customer with the given id";
		}
	}
}

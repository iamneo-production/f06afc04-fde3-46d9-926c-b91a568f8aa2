package com.example.springapp.service;

import com.project.backend.entity.Customer;
import com.project.backend.repository.CustomerRepository;
import com.project.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
    public String register(Customer customer) {
        if(! customerRepository.existsByEmail(customer.getEmail())) {
            customerRepository.save(customer);
            return "Customer created";
        }
        return "Customer not created, email is already registered";
    }

    public Customer getUserProfileById(Long id)
    {
        return customerRepository.findById(id).orElse(null);
    }
    public Customer updateUserProfile(Customer customer) {
        boolean customerExists = customerRepository.existsById(customer.getId());
        if(customerExists) {
            return customerRepository.save(customer);
//            return "Customer profile updated successfully";
        }
        else {
//            return "No customer with the given id";
            return null;
        }

    }



}
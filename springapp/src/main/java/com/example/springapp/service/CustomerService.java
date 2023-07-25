package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.Customer;
import com.example.springapp.repository.CustomerRepository;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;


    public String register(Customer customer) {
        if (!customerRepository.existsByEmail(customer.getEmail())) {
            customerRepository.save(customer);
            return "Customer created";
        } else {
            return "already registered";
        }
    }


	public Customer getUserProfileById(Long id)
    {
        return customerRepository.findById(id).orElse(null);
    }
    public Customer updateUserProfile(Customer customer) {
        boolean customerExists = customerRepository.existsById(customer.getId());
        if(customerExists) {
            return customerRepository.save(customer);
//            
        }
        else {
//           
            return null;
        }

    }


    public boolean deleteCustomer(Long id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
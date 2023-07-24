package com.example.springapp.service;

import com.example.springapp.model.Payment;
import com.example.springapp.repository.PaymentRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PaymentService  {

    @Autowired
    private PaymentRepository paymentRepository;
    public String makePayment(Payment payment) {

            paymentRepository.save(payment);
            return "Payment created";

    }
}





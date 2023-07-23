package com.example.springapp.service;

import org.springframework.stereotype.Service;

@Service
public class PaymentService implements PaymentRequestService {
    private final String UPI_ID = "";

    private long amount = 10000000000L;
    private final int password = 1234;
    @Override
    public Boolean verifyUpiId(String upiId){
        return upiId.equals(UPI_ID);
    }

    @Override
    public String paymentRequest(long cost, int pass){
        if (password == pass && amount >= cost) {
            amount -= cost;
          return  "Payment is success"; }
        return "Payment is unsuccessful";
}
    }





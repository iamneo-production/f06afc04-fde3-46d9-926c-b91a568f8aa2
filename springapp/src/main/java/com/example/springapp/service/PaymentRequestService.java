package com.example.springapp.service;

public interface PaymentRequestService {
    String paymentRequest(long cost, int pass);
    Boolean verifyUpiId(String upiId);
}

package com.example.springapp.controller;

import com.example.springapp.service.OrderService;
import com.example.springapp.service.PaymentRequestService;
import com.example.springapp.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    PaymentRequestService paymentRequestService;
    @PostMapping(value ="/upi-verification")
    public ResponseEntity<Boolean> verifyUpi(@RequestParam("upi-id") String upiId)
    {
        return ResponseEntity.status(HttpStatus.OK.value()).body(paymentRequestService.verifyUpiId(upiId));
    }

    @PostMapping(value = "/request")
    public ResponseEntity<String> requestPayment(@RequestParam("amount") long amount, @RequestParam("password") int password)
    {
        return ResponseEntity.status(HttpStatus.OK.value()).body(paymentRequestService.paymentRequest(amount, password));
    }

}

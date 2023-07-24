package com.example.springapp.controller;

import com.example.springapp.model.ContactUs;
import com.example.springapp.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/contactus")
public class ContactUsController {

    private final ContactUsService contactUsService;

    @Autowired
    public ContactUsController(ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @PostMapping
    public ContactUs submitContactUsForm(@RequestBody ContactUs contactUs) {
        return contactUsService.saveContactUs(contactUs);
    }

    @GetMapping
    public List<ContactUs> getAllContactUs() {
        return contactUsService.getAllContactUs();
    }

    @DeleteMapping("/{id}")
    public void deleteContactUs(@PathVariable Long id) {
        contactUsService.deleteContactUs(id);
    }
}

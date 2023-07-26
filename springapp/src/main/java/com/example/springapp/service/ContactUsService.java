package com.example.springapp.service;

import com.example.springapp.model.ContactUs;
import com.example.springapp.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactUsService {

    private final ContactUsRepository contactUsRepository;

    @Autowired
    public ContactUsService(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    public ContactUs saveContactUs(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }

    public List<ContactUs> getAllContactUs() {
        return contactUsRepository.findAll();
    }

    public void deleteContactUs(Long id) {
        contactUsRepository.deleteById(id);
    }
}

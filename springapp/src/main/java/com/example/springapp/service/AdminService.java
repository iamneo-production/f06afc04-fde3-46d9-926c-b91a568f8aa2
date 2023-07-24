package com.example.springapp.service;

import com.example.springapp.model.Admin;
import com.example.springapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;


    public String register(Admin admin) {
        if (!adminRepository.existsByEmail(admin.getEmail())) {
            adminRepository.save(admin);
            return "Admin created";
        } else {
            return "already registered";
        }
    }


    public Admin getAdminProfileById(Long id)
    {
        return adminRepository.findById(id).orElse(null);
    }

    public String updateAdminProfile(Admin admin) {
        boolean adminExists = adminRepository.existsById(admin.getId());
        if(adminExists) {
            adminRepository.save(admin);
            return "Admin profile updated successfully";
        }
        else {
            return "No Admin with the given id";
        }
    }

    public boolean deleteAdmin(Long id) {
        if (adminRepository.existsById(id)) {
            adminRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
}
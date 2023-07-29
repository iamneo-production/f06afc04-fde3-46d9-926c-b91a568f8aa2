package com.example.springapp.controller;

import com.example.springapp.model.Admin;
import com.example.springapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")  
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping()
    public ResponseEntity<String> register(@RequestBody Admin admin) {
        String result = adminService.register(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminProfileById(@PathVariable("id") Long id) {
        Admin admin = adminService.getAdminProfileById(id);
        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> updateAdminProfile(@RequestBody Admin admin) {
        String result = adminService.updateAdminProfile(admin);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdmin(@PathVariable("id") Long id) {
        boolean deleted = adminService.deleteAdmin(id);
        if (deleted) {
            return ResponseEntity.ok("Admin deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmin() {
        List<Admin> admins = adminService.getAllAdmins();
        if(admins!=null){
          return ResponseEntity.ok(admins);
    }
         else {
         return ResponseEntity.notFound().build();
    }
}
}

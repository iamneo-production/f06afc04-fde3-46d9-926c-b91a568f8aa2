package main.java.com.example.springapp.controller;

import com.project.backend.entity.Reslogin;
import com.project.backend.entity.Restaurant;

import com.project.backend.service.ResloginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class ResloginController {

    private final ResloginService resloginService;

    @Autowired
    public ResloginController(ResloginService resloginService) {
        this.resloginService = resloginService;
    }

    @PostMapping("/reslogin")
    public ResponseEntity<Restaurant> reslogin(@RequestBody Reslogin reslogin) {
        Restaurant result = resloginService.reslogin(reslogin.getEmail(), reslogin.getPassword());
//        HttpStatus status = result.equals("Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        HttpStatus status = (result != null) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(result);

    }
}

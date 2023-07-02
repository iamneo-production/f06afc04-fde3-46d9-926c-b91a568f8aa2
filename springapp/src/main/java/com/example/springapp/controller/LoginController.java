package main.java.com.example.springapp.controller;


import main.java.com.example.springapp.model.Login;
import main.java.com.example.springapp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public String login(@RequestBody Login login) {
        return loginService.login(login.getEmail(), login.getPassword());
    }

    @PostMapping("/logout")
    public String logout() {
        return loginService.logout();
    }



}

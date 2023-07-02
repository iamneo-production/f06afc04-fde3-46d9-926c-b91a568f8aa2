package main.java.com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import main.java.com.example.springapp.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByEmail(String email);

}

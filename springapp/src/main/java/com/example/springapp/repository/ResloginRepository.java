package main.java.com.example.springapp.repository;
import com.project.backend.entity.Reslogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResloginRepository  extends JpaRepository<Reslogin, Long> {

    Reslogin findByEmail(String email);
}
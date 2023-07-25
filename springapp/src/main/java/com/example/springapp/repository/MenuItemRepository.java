package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.MenuItem;
<<<<<<< HEAD

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

=======
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
     Optional<MenuItem> findByName(String name);
>>>>>>> origin
}

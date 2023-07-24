package com.example.springapp.controller;

import com.example.springapp.model.MenuItem;
import com.example.springapp.model.Restaurant;
import com.example.springapp.repository.MenuItemRepository;
import com.example.springapp.repository.RestaurantRepository;
import com.example.springapp.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/menu-item")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    @PostMapping
    public ResponseEntity<MenuItem> createMenuItem(@RequestBody MenuItem menuItem) {
        boolean created = menuItemService.createMenuItem(menuItem);
        if (created) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @RequestBody MenuItem menuItemData) {
        MenuItem updatedMenuItem = menuItemService.updateMenuItem(id, menuItemData);
        if (updatedMenuItem != null) {
            return ResponseEntity.ok(updatedMenuItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItem() {
    List<MenuItem> menuItems = menuItemService.getAllMenuItem();
    if (menuItems.isEmpty()) {
        return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(menuItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getMenuItemById(@PathVariable("id") Long id) {
        MenuItem menuItem = menuItemService.getMenuItemById(id);
        if (menuItem != null) {
            return ResponseEntity.ok(menuItem);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenuItem(@PathVariable("id") Long id) {
        boolean deleted = menuItemService.deleteMenuItem(id);
        if (deleted) {
            return ResponseEntity.ok("Menu item deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

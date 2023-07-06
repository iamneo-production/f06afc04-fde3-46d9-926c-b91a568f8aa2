package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.MenuItem;
import com.example.springapp.service.MenuItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping
    public ResponseEntity<MenuItem> createMenuItem(@RequestBody MenuItem menuItem) {
    boolean created = menuItemService.createMenuItem(menuItem);
    if (created) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    } else {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
   
    @PutMapping
    public String updateMenuItems(@RequestBody MenuItem menuItem) {
        return menuItemService.updateMenuItems(menuItem);
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
}

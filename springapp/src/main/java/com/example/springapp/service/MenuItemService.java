package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.MenuItem;
import com.example.springapp.repository.MenuItemRepository;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository;

    public boolean createMenuItem(MenuItem menuItem) {
    // Logic to create the menu item
    // ...
    try {
        // Save the menu item to the repository
        menuItemRepository.save(menuItem);
        return true; // Return true if the creation is successful
    } catch (Exception e) {
        e.printStackTrace();
        return false; // Return false if an exception occurs during creation
    }
}

    public String updateMenuItems(MenuItem menuItem) {
        Optional<MenuItem> menuItemOptional = menuItemRepository.findByName(menuItem.getName());
        if(menuItemOptional.isPresent()){
            menuItem.setId(menuItemOptional.get().getId());
            BeanUtils.copyProperties(menuItem, menuItemOptional.get());
            menuItemRepository.save(menuItemOptional.get());
            return "Updated";
        }
        return "Not Updated";
    }

    public List<MenuItem> getAllMenuItem(){
        return menuItemRepository.findAll();
    }

    public MenuItem getMenuItemById(Long id) {
        return menuItemRepository.findById(id).orElse(null);
    }

}


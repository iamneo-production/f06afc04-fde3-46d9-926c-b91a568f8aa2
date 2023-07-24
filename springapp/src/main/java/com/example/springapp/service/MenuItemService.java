package com.example.springapp.service;

import com.example.springapp.model.MenuItem;
import com.example.springapp.repository.MenuItemRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository;

    public boolean createMenuItem(MenuItem menuItem) {
        try {
            menuItemRepository.save(menuItem);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public MenuItem updateMenuItem(Long id, MenuItem menuItem) {
        Optional<MenuItem> menuItemOptional = menuItemRepository.findById(id);
        if (menuItemOptional.isPresent()) {
            MenuItem existingMenuItem = menuItemOptional.get();
            BeanUtils.copyProperties(menuItem, existingMenuItem, "id");
            return menuItemRepository.save(existingMenuItem);
        }
        return null;
    }

    public List<MenuItem> getAllMenuItem() {
        return menuItemRepository.findAll();
    }

    public MenuItem getMenuItemById(Long id) {
        return menuItemRepository.findById(id).orElse(null);
    }

    public boolean deleteMenuItem(Long id) {
        Optional<MenuItem> menuItemOptional = menuItemRepository.findById(id);
        if (menuItemOptional.isPresent()) {
            menuItemRepository.delete(menuItemOptional.get());
            return true;
        }
        return false;
    }



}

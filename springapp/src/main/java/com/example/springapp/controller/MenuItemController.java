package com.example.springapp.controller;

import com.example.springapp.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.MenuItem;
import com.example.springapp.service.MenuItemService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/menu-item")
public class MenuItemController {
<<<<<<< HEAD
	
	@Autowired
	private MenuItemService menuItemService;
	
	@PostMapping("/menu-item")
	public String addMenuItem(@RequestBody MenuItem menuItem) {
		String repsonse = menuItemService.addMenuItem(menuItem);
		return repsonse;
	}

	@PutMapping("/menu-item")
	public String updateMenuItems(@RequestBody MenuItem menuItem) {
		return menuItemService.updateMenuItems(menuItem);
	}

	@GetMapping("/menu-item")
	public List<MenuItem> getMenuItems() {
		return menuItemService.getMenuItems();
	}

}
=======

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping
    public String addMenuItem(@RequestBody MenuItem menuItem) {
        String repsonse = menuItemService.addMenuItem(menuItem);
        return repsonse;
    }

    @PutMapping
    public String updateMenuItems(@RequestBody MenuItem menuItem) {
        return menuItemService.updateMenuItems(menuItem);
    }

    @GetMapping
    public List<MenuItem> getMenuItems() {
        return menuItemService.getMenuItems();
    }

    @GetMapping("/{id}")
    public MenuItem getMenuItemById(@PathVariable Long id) {
        MenuItem menuItem = menuItemService.getMenuItemsById(id);
        return menuItem;
    }
}
>>>>>>> ee22ef3 (api 19 completed)

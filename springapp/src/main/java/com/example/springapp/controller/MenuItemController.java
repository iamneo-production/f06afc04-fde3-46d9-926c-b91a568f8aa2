package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.MenuItem;
import com.example.springapp.service.MenuItemService;

import java.awt.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class MenuItemController {
	
	@Autowired
	private MenuItemService menuItemService;
	
	@PostMapping("/menu-item")
	public String addMenuItem(@RequestBody MenuItem menuItem) {
		String repsonse = menuItemService.addMenuItem(menuItem);
		return repsonse;
	}

	@PutMapping(value = "/PUT/menu-item")
	public String updateMenuItems(@RequestBody MenuItem menuItem) {
		return menuItemService.updateMenuItems(menuItem);
	}

	@GetMapping(value = "get/menu-item")
	public List<MenuItem> getMenuItems() {
		return menuItemService.getMenuItems();
	}

}

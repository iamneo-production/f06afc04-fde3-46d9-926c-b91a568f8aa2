package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.MenuItem;
import com.example.springapp.service.MenuItemService;

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

}

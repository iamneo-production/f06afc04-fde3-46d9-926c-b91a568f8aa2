package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.MenuItem;
import com.example.springapp.repository.MenuItemRepository;

@Service
public class MenuItemService {

	@Autowired
	private MenuItemRepository menuItemRepository;
	
	public String addMenuItem(MenuItem menuItem) {
		menuItemRepository.save(menuItem);
		return "Created";
	}
	
}

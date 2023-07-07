package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
<<<<<<< HEAD
@Table(name="restaurants")
=======
@Table(name = "restaurants")
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
<<<<<<< HEAD
    private String menu_item_id;
=======
    private Long menu_item_id;
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

<<<<<<< HEAD
    public String getMenu_item_id() {
        return menu_item_id;
    }

    public void setMenu_item_id(String menu_item_id) {
        this.menu_item_id = menu_item_id;
    }

    public Restaurant(long id, String name, String address, String menu_item_id) {
=======
    public Long getMenu_item_id() {
        return menu_item_id;
    }

    public void setMenu_item_id(Long menu_item_id) {
        this.menu_item_id = menu_item_id;
    }

    public Restaurant(long id, String name, String address, Long menu_item_id) {
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.menu_item_id = menu_item_id;  
<<<<<<< HEAD
        
=======
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789
    }

    public Restaurant() {
        super();
    }
}
<<<<<<< HEAD


=======
>>>>>>> 523baac2dfffdf7b2dc640730352d1cc708c9789

package com.rencotreR.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "users")

public class User {
    public User() {
}

@Id
private Long id;
private String firstname;
private String lastname;
private String password;
private String email;
private int age;
    private LocalDate birthday;

private String oriantation ;
private LocalDate date_inscription ;

public User(String fisrtname, String lastname, String password, String email, int age, LocalDate birthday, String orientation, LocalDate date_inscription) {
    this.firstname = fisrtname;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.age = age;
    this.birthday = birthday;
    this.oriantation = orientation;
    this.date_inscription = date_inscription;

}

}

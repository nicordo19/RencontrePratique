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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getOriantation() {
        return oriantation;
    }

    public void setOriantation(String oriantation) {
        this.oriantation = oriantation;
    }

    public LocalDate getDate_inscription() {
        return date_inscription;
    }

    public void setDate_inscription(LocalDate date_inscription) {
        this.date_inscription = date_inscription;
    }
}

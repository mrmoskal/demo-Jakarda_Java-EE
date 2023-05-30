package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Employee {
    // vars:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_name", nullable = false, length = 100)
    private String name;

    @Column(name = "employee_email", nullable = true, length = 255)
    private String email;

    @Column(name = "employee_position", nullable = false, length = 100)
    private String position;

}

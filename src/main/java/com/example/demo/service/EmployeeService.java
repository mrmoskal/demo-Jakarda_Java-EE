package com.example.demo.service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id){
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(Employee employee){
        try {
            return employeeRepository.save(employee);
        } catch (Exception e) {
            // Log the exception
            System.out.println("An error occurred while creating an employee:\n" + e.getMessage());
            throw new RuntimeException("Failed to create employee");
        }
    }

    public Employee updateEmployee(Long id, Employee employeeDetails){
        Employee employee = employeeRepository.getById(id); // suppose to be "employeeRepository.getById(id)"
        employee.setName(employeeDetails.getName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPosition(employeeDetails.getPosition());

        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}

package com.portfoready.server.service;


import com.portfoready.server.dto.request.UpdateEmployerRequest;
import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.repository.EmployerRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployerService {
    private final EmployerRepository employerRepository;

    public Employer getEmployerById(Long employerId){
        return employerRepository.findById(employerId)
                .orElseThrow(() -> new EntityNotFoundException("Employer Id not exist"));
    }

    public Employer updateEmployer(UpdateEmployerRequest request, Employer employer){
        Employer updatedStudent = request.updateEmployer(employer);
        return employerRepository.save(updatedStudent);
    }

    public Employer getEmployerByUser(User user) {
        return employerRepository.getEmployerByUser(user);
    }
}

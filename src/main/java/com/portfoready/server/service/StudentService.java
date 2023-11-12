package com.portfoready.server.service;


import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public Student getStudentByUser(User user) {
        return studentRepository.findByUser(user).orElseThrow(() -> new EntityNotFoundException("User Not Found"));
    }

    public Student updateStudent(UpdateStudentRequest request, Student student){
        Student updatedStudent = request.updateStudent(student);
        return studentRepository.save(updatedStudent);
    }
}

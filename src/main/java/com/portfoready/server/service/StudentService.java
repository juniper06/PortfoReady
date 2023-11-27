package com.portfoready.server.service;


import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.entity.File;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@AllArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final FileService fileService;

    public Student getStudentByUser(User user) {
        return studentRepository.findByUser(user).orElseThrow(() -> new EntityNotFoundException("User Not Found"));
    }

    public Student updateStudent(UpdateStudentRequest request, Student student) {
        Student updatedStudent = request.updateStudent(student);
        return studentRepository.save(updatedStudent);
    }

    public Student getStudentById(Long studentId) {
        return studentRepository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student Id Not Found"));
    }

    public void uploadResume(MultipartFile file, Student student) throws Exception {
        User user = student.getUser();
        if (student.getResume() != null) {
            fileService.deleteFile(student.getResume());
        }
        File imageFile = fileService.uploadFile(file, user);
        student.setResume(imageFile);
        studentRepository.save(student);
    }

    public byte[] getResumeData(Long studentId) throws IOException {
        Student student = getStudentById(studentId);
        return fileService.downloadImageFromFileSystem(student.getResume().getName());
    }

    public void removeResume(Student student){
        student.setResume(null);
        studentRepository.save(student);
    }
}

package com.portfoready.server.service;


import com.portfoready.server.entity.Certificate;
import com.portfoready.server.entity.File;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.repository.CertificateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class CertificateService {
    private final CertificateRepository certificateRepository;
    private final StudentService studentService;
    private final FileService fileService;

    public void addCertificate(String name, MultipartFile file, User user) throws IOException {
        Student student = studentService.getStudentByUser(user);
        Date date = new Date();
        File imageFile = fileService.uploadFile(file, user);
        Certificate certificate = Certificate.builder()
                .name(name)
                .student(student)
                .date(date)
                .image(imageFile)
                .build();
        certificateRepository.save(certificate);
    }

    public List<Certificate> getCertificatesByStudent(User user) {
        Student student = studentService.getStudentByUser(user);
        return certificateRepository.findAllByStudent(student);
    }

    public Certificate deleteCertificate(Long id) throws Exception {
        Certificate certificate = certificateRepository.findById(id).orElseThrow();
        certificateRepository.deleteById(id);
        fileService.deleteFile(certificate.getImage());
        return certificate;
    }

    public Certificate getCertificate(Long id) {
        return certificateRepository.findById(id).orElseThrow();
    }
}

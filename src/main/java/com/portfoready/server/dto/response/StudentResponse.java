package com.portfoready.server.dto.response;


import com.portfoready.server.entity.Certificate;
import com.portfoready.server.entity.Student;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class StudentResponse {
    private Long id;
    private UserResponse user;
    private List<CertificateResponse> certificates;
    private String experiences;
    private String skills;
    private String education;

    public StudentResponse(Student student) {
        id = student.getId();
        user = new UserResponse(student.getUser());
        certificates = student.getCertificates().stream().map(CertificateResponse::new).collect(
                Collectors.toList());
        experiences = student.getExperience();
        skills = student.getSkills();
        education = student.getEducation();
    }
}

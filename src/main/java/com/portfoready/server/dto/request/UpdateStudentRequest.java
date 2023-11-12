package com.portfoready.server.dto.request;


import com.portfoready.server.entity.Student;
import lombok.Data;

@Data
public class UpdateStudentRequest {
    private String education;
    private String skills;
    private String experience;
    private String language;

    public Student updateStudent(Student student){
        student.setEducation(education);
        student.setSkills(skills);
        student.setExperience(experience);
        student.setLanguage(language);
        return student;
    }
}

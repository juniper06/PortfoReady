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
        if(!education.isBlank())
            student.setEducation(education);
        if(!skills.isBlank())
            student.setSkills(skills);
        if(!experience.isBlank())
            student.setExperience(experience);
        if(!language.isBlank())
            student.setLanguage(language);
        return student;
    }
}

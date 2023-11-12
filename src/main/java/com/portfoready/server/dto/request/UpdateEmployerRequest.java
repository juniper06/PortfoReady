package com.portfoready.server.dto.request;


import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.Student;
import lombok.Data;

@Data
public class UpdateEmployerRequest {
    private String companyName;
    private String companyDescription;
    private String companyEmail;


    public Employer updateEmployer(Employer employer){
        employer.setCompanyName(companyName);
        employer.setCompanyDescription(companyDescription);
        employer.setCompanyEmail(companyEmail);
        return employer;
    }
}

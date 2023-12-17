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
        if(!companyName.isBlank())
            employer.setCompanyName(companyName);
        if(!companyDescription.isBlank())
            employer.setCompanyDescription(companyDescription);
        if(!companyEmail.isBlank())
            employer.setCompanyEmail(companyEmail);
        return employer;
    }
}

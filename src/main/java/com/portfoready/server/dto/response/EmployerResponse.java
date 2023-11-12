package com.portfoready.server.dto.response;


import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.Post;
import lombok.Data;

import java.util.List;

@Data
public class EmployerResponse {
    private Long id;
    private UserResponse user;
    private String companyName;
    private String companyDescription;
    private String companyEmail;
    private List<Post> posts;

    public EmployerResponse(Employer employer){
        id = employer.getId();
        user = new UserResponse(employer.getUser());
        companyName = employer.getCompanyName();
        companyDescription = employer.getCompanyDescription();
        companyEmail = employer.getCompanyEmail();
        posts = employer.getPosts();
    }
}

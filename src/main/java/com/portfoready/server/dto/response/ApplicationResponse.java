package com.portfoready.server.dto.response;

import com.portfoready.server.entity.Application;
import lombok.Data;

@Data
public class ApplicationResponse {
    private Long id;
    private PostResponse post;
    private StudentResponse student;
    private Application.ApplicationStatus status;

    public ApplicationResponse(Application application){
        id = application.getId();
        post = new PostResponse(application.getAppliedPost());
        student = new StudentResponse(application.getApplicant());
        status = application.getStatus();
    }
}

package com.portfoready.server.service;


import com.portfoready.server.entity.Application;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.Student;
import com.portfoready.server.repository.ApplicationRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ApplicationService {
    private final ApplicationRepository applicationRepository;

    public void applyPost(Student applicant, Post appliedPost) {
        Application application = Application.builder().applicant(applicant).appliedPost(appliedPost).status(
                Application.ApplicationStatus.PENDING).build();
        applicationRepository.save(application);
    }

    public Application getApplicationById(Long applicationId) {
        return applicationRepository.findById(applicationId)
                .orElseThrow(() -> new EntityNotFoundException("Application Id Not Found!"));
    }

    public void approvedApplication(Long applicationId) {
        Application application = getApplicationById(applicationId);
        application.approve();
        applicationRepository.save(application);
    }

    public void rejectedApplication(Long applicationId) {
        Application application = getApplicationById(applicationId);
        application.reject();
        applicationRepository.save(application);
    }

    public List<Application> getApplicationsByPost(Long postId){
        return applicationRepository.findByAppliedPostId(postId);
    }

    public List<Application> getAppliedPost(Long studentId) {
        return applicationRepository.findAllByApplicantId(studentId);
    }

    public List<Student> getApplicantsByPost(Long postId) {
        return applicationRepository.getAllApplicantsByPostId(postId);
    }

    public List<Application> getApplicationsByPostId(Long postId) {
        return applicationRepository.findAllByAppliedPost_Id(postId);
    }
}

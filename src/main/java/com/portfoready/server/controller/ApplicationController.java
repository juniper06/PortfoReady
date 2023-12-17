package com.portfoready.server.controller;

import com.portfoready.server.dto.response.ApplicationResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentResponse;
import com.portfoready.server.entity.Application;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.Student;
import com.portfoready.server.service.ApplicationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/application")
public class ApplicationController {
    private final ApplicationService applicationService;

    @PutMapping("/approveApplication")
    public ResponseEntity<Object> approveApplication(@RequestParam(name = "applicationId") Long applicationId) {
        try{
            applicationService.approvedApplication(applicationId);
            return ResponseHandler.generateResponse("Successfully Approved", HttpStatus.OK);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/rejectApplication")
    public ResponseEntity<Object> rejectApplication(@RequestParam(name = "applicationId") Long applicationId) {
        try{
            applicationService.rejectedApplication(applicationId);
            return ResponseHandler.generateResponse("Successfully Approved", HttpStatus.OK);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAppliedPosts")
    public ResponseEntity<Object> getAppliedPosts(@RequestParam(name = "studentId") Long studentId) {
        try{
            List<Application> applications = applicationService.getAppliedPost(studentId);
            List<ApplicationResponse> response = applications.stream().map(ApplicationResponse::new).toList();
            return ResponseHandler.generateResponse("Successfully Approved", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getApplications")
    public ResponseEntity<Object> getApplications(@RequestParam(name = "postId") Long postId) {
        try{
            List<Application> applications = applicationService.getApplicationsByPostId(postId);
            List<ApplicationResponse> response = applications.stream().map(ApplicationResponse::new).toList();
            return ResponseHandler.generateResponse("Successfully Approved", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

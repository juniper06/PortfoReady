package com.portfoready.server.controller;

import com.portfoready.server.dto.request.UpdateEmployerRequest;
import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.dto.response.EmployerResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentResponse;
import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.EmployerService;
import com.portfoready.server.service.StudentService;
import com.portfoready.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/student")
public class EmployerController {
    private final EmployerService employerService;

    @PostMapping("/updateEmployer")
    public ResponseEntity<Object> updateStudent(@RequestParam(name = "userId") Long userId,
                                                @RequestBody UpdateEmployerRequest request) {
        Employer student = employerService.getEmployerById(userId);
        return ResponseHandler.generateResponse(
                "Update Successfully", HttpStatus.OK, employerService.updateEmployer(request, student));
    }

    @GetMapping("/getEmployerByUserId")
    public ResponseEntity<Object> getEmployerByUserId(@RequestParam(name = "userId") Long userId) {
        Employer employer = employerService.getEmployerById(userId);
        EmployerResponse response = new EmployerResponse(employer);
        return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
    }

}

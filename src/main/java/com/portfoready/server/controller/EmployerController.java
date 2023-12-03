package com.portfoready.server.controller;

import com.portfoready.server.dto.request.UpdateEmployerRequest;
import com.portfoready.server.dto.response.EmployerResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.entity.Employer;
import com.portfoready.server.service.EmployerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/employer")
public class EmployerController {
    private final EmployerService employerService;

    @PutMapping("/updateEmployer")
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

    @GetMapping
    public ResponseEntity<Object> getAllEmployer(@RequestParam(name = "companyName") String companyName) {
        List<Employer> employer = employerService.getAllEmployer(companyName);
        List<EmployerResponse> response = employer.stream().map(EmployerResponse::new).toList();
        return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
    }

    @GetMapping("/count")
    public ResponseEntity<Object> countAllEmployer() {
        try {
            return ResponseHandler.generateResponse(
                    "Successfully Generated", HttpStatus.OK, employerService.countAllEmployer());
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

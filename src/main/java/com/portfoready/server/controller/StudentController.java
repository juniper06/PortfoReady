package com.portfoready.server.controller;

import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentResponse;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.StudentService;
import com.portfoready.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@AllArgsConstructor
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;
    private final UserService userService;

    @PostMapping("/updateStudent")
    public ResponseEntity<Object> updateStudent(@RequestParam(name = "userId") Long userId,
                                                @RequestBody UpdateStudentRequest request) {
        User user = userService.getUserById(userId);
        Student student = studentService.getStudentByUser(user);
        return ResponseHandler.generateResponse(
                "Update Successfully", HttpStatus.OK, studentService.updateStudent(request, student));
    }

    @GetMapping("/getStudentByUserId")
    public ResponseEntity<Object> getStudentByUserId(@RequestParam(name = "userId") Long userId) {
        User user = userService.getUserById(userId);
        Student employer = studentService.getStudentByUser(user);
        StudentResponse response = new StudentResponse(employer);
        return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
    }


    @PutMapping("/uploadResume/{studentId}")
    public ResponseEntity<Object> uploadResume(@RequestParam("file") MultipartFile file, @PathVariable Long studentId) {
        try {
            Student student = studentService.getStudentById(studentId);
            studentService.uploadResume(file, student);
            return ResponseHandler.generateResponse("Successfully Uploaded", HttpStatus.OK);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getResume/{studentId}")
    public ResponseEntity<byte[]> getResume(@PathVariable Long studentId) throws IOException {
        byte[] resumeData = studentService.getResumeData(studentId);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf(studentService.getStudentById(studentId).getResume().getType()))
                .body(resumeData);
    }
}

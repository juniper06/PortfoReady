package com.portfoready.server.controller;

import com.portfoready.server.dto.request.AddPostRequest;
import com.portfoready.server.dto.request.UpdateStudentRequest;
import com.portfoready.server.dto.response.PostResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentResponse;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.PostService;
import com.portfoready.server.service.StudentService;
import com.portfoready.server.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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

}

package com.portfoready.server.controller;

import com.portfoready.server.dto.request.UpdateUserRequest;
import com.portfoready.server.dto.request.UserAuthRequest;
import com.portfoready.server.dto.request.UserCreationRequest;
import com.portfoready.server.dto.response.LoginResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.UserResponse;
import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.exception.InvalidPasswordException;
import com.portfoready.server.exception.InvalidUsernameException;
import com.portfoready.server.service.UserService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Object> createStudent(@RequestBody UserCreationRequest request) {
        try {
            if (request.getType().equals("student")) {
                userService.createStudent(request);
            } else if (request.getType().equals("employer")) {
                userService.createEmployer(request);
            } else {
                return ResponseHandler.generateResponse("Invalid User Type", HttpStatus.BAD_REQUEST);
            }
            return ResponseHandler.generateResponse("Successfully Created", HttpStatus.OK);
        } catch (EntityExistsException ex) {
            return ResponseHandler.generateResponse(ex.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody UserAuthRequest request) {
        try {
            User user = userService.checkUserAuth(request);
            Long id;
            if (userService.getUserType(user).equals("student")) {
                Student student = userService.getStudentByUser(user);
                id = student.getId();
            } else {
                Employer employer = userService.getEmployerByUser(user);
                id = employer.getId();
            }
            LoginResponse response = LoginResponse.builder()
                    .username(user.getUsername())
                    .userId(user.getId())
                    .type(userService.getUserType(user))
                    .id(id)
                    .build();
            return ResponseHandler.generateResponse("Successfully Created", HttpStatus.OK, response);
        } catch (InvalidUsernameException | InvalidPasswordException ex) {
            return ResponseHandler.generateResponse(ex.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/followUser")
    public ResponseEntity<Object> followUser(@RequestParam(name = "to") Long to,
                                             @RequestParam(name = "from") Long from) {
        try {
            userService.followUser(to, from);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK);
        } catch (EntityNotFoundException ex) {
            return ResponseHandler.generateResponse("Failed Generated", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getPeopleYouMayKnow")
    public ResponseEntity<Object> getPeopleYouMayKnow(@RequestParam(name = "userId") Long userId) {
        try {
            return ResponseHandler.generateResponse(
                    "Successfully Generated", HttpStatus.OK, userService.getUsersYouMayKnow(userId));
        } catch (EntityNotFoundException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateUser/{userId}")
    public ResponseEntity<Object> updateUser(@RequestBody UpdateUserRequest request, @PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return ResponseHandler.generateResponse(
                "Update Successfully", HttpStatus.OK, userService.updateUser(request, user));
    }

    @PutMapping("/uploadImage/{userId}")
    public ResponseEntity<Object> uploadImage(@RequestParam(name = "file") MultipartFile file,
                                              @PathVariable Long userId) {
        try {
            userService.uploadImage(file, userId);
            return ResponseHandler.generateResponse("Successfully Uploaded", HttpStatus.OK);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getUser")
    public ResponseEntity<Object> getUser(@RequestParam(name = "userId") Long userId) {
        try {
            User user = userService.getUserById(userId);
            UserResponse response = new UserResponse(user);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{userId}/image")
    public ResponseEntity<Object> getImage(@PathVariable Long userId) {
        try {
            User user = userService.getUserById(userId);
            byte[] image = userService.getImage(user);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            return new ResponseEntity<>(image, headers, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllUsers() {
        try {
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, userService.getAllUsers());
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

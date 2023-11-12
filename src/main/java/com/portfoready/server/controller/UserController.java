package com.portfoready.server.controller;

import com.portfoready.server.dto.request.UpdateUserRequest;
import com.portfoready.server.dto.request.UserAuthRequest;
import com.portfoready.server.dto.request.UserCreationRequest;
import com.portfoready.server.dto.response.LoginResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.entity.User;
import com.portfoready.server.exception.InvalidPasswordException;
import com.portfoready.server.exception.InvalidUsernameException;
import com.portfoready.server.service.UserService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            LoginResponse response = LoginResponse.builder()
                    .username(user.getUsername())
                    .id(user.getId())
                    .type(userService.getUserType(user))
                    .build();
            return ResponseHandler.generateResponse("Successfully Created", HttpStatus.OK, response);
        } catch (InvalidUsernameException | InvalidPasswordException ex) {
            return ResponseHandler.generateResponse(ex.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/followUser")
    private ResponseEntity<Object> followUser(@RequestParam(name = "userId") Long userId,
                                              @RequestParam(name = "followerId") Long followerId) {
        try {
            userService.followUser(userId, followerId);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK);
        } catch (EntityNotFoundException ex) {
            return ResponseHandler.generateResponse("Failed Generated", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getPeopleYouMayKnow")
    private ResponseEntity<Object> getPeopleYouMayKnow(@RequestParam(name = "userId") Long userId) {
        try {
            return ResponseHandler.generateResponse(
                    "Successfully Generated", HttpStatus.OK, userService.getUsersYouMayKnow(userId));
        } catch (EntityNotFoundException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/updateUser")
    public ResponseEntity<Object> updateUser(@RequestParam(name = "userId") Long userId,
                                             @RequestBody UpdateUserRequest request) {
        User user = userService.getUserById(userId);
        return ResponseHandler.generateResponse(
                "Update Successfully", HttpStatus.OK, userService.updateUser(request, user));
    }
}

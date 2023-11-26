package com.portfoready.server.service;


import com.portfoready.server.dto.request.UpdateUserRequest;
import com.portfoready.server.dto.request.UserAuthRequest;
import com.portfoready.server.dto.request.UserCreationRequest;
import com.portfoready.server.entity.*;
import com.portfoready.server.exception.InvalidPasswordException;
import com.portfoready.server.exception.InvalidUsernameException;
import com.portfoready.server.repository.EmployerRepository;
import com.portfoready.server.repository.FollowerRepository;
import com.portfoready.server.repository.StudentRepository;
import com.portfoready.server.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final EmployerRepository employerRepository;
    private final FollowerRepository followerRepository;
    private final FileService fileService;
    private final StudentService studentService;
    private final EmployerService employerService;

    public User checkUserAuth(UserAuthRequest request) throws InvalidUsernameException, InvalidPasswordException {
        Optional<User> user = userRepository.findByUsername(request.getUsername());
        if (user.isEmpty()) {
            throw new InvalidUsernameException();
        }
        if (!user.get().getPassword().equals(request.getPassword())) {
            throw new InvalidPasswordException();
        }

        return user.get();
    }

    public String getUserType(User user) {
        if (studentRepository.findByUser(user).isPresent()) {
            return "student";
        } else {
            return "employer";
        }
    }

    private User createUser(UserCreationRequest request) throws EntityExistsException {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new EntityExistsException("Username already exist");
        }
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new EntityExistsException("Email already exist");
        }
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();
        userRepository.save(user);
        return user;
    }

    public void createStudent(UserCreationRequest request) throws EntityExistsException {
        User user = createUser(request);
        Student student = Student.builder()
                .user(user).build();
        studentRepository.save(student);
    }

    public void createEmployer(UserCreationRequest request) throws EntityExistsException {
        User user = createUser(request);
        Employer employer = Employer.builder()
                .user(user).build();
        employerRepository.save(employer);
    }

    public void followUser(Long toUserId, Long fromUserId) throws EntityNotFoundException {
        User toUser = userRepository.findById(toUserId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        User fromUser = userRepository.findById(fromUserId)
                .orElseThrow(() -> new EntityNotFoundException("Follower not found"));
        Follower follower = Follower.builder().from(fromUser).to(toUser).build();
        followerRepository.save(follower);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public void uploadImage(MultipartFile file, Long userId) throws Exception {
        User user = getUserById(userId);
        if (user.getImage() != null) {
            fileService.deleteFile(user.getImage());
        }
        File imageFile = fileService.uploadFile(file, user);
        user.setImage(imageFile);
        userRepository.save(user);
    }

    public List<User> getUsersYouMayKnow(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User Id Not Found!"));
        return userRepository.findRandomUsersNotFollowing(user, userId, Pageable.unpaged());
    }

    public User updateUser(UpdateUserRequest request, User user) {
        User updatedUser = request.updateUser(user);
        return userRepository.save(updatedUser);
    }

    public Student getStudentByUser(User user) {
        return studentService.getStudentByUser(user);
    }

    public Employer getEmployerByUser(User user) {
        return employerService.getEmployerByUser(user);
    }
}

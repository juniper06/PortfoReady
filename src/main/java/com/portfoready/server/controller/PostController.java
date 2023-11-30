package com.portfoready.server.controller;

import com.portfoready.server.dto.request.AddPostRequest;
import com.portfoready.server.dto.request.ApplicationRequest;
import com.portfoready.server.dto.request.UpdatePostRequest;
import com.portfoready.server.dto.response.PostResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentResponse;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.PostService;
import com.portfoready.server.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@RequestMapping("/post")
@Slf4j
public class PostController {
    private final PostService postService;
    private final UserService userService;

    @GetMapping("/posts")
    public ResponseEntity<Object> getPosts(@RequestParam(name = "page", defaultValue = "0") int page,
                                           @RequestParam(name = "userId") Long userId) {
        try {
            User user = userService.getUserById(userId);
            PageRequest pageRequest = PageRequest.of(page, 10);
            Page<Post> postsPage = postService.getPosts(pageRequest);

            List<PostResponse> postResponses = postsPage.getContent().stream()
                    .map(post -> new PostResponse(post, user))
                    .collect(Collectors.toList());
            Page<PostResponse> postPageResponse = new PageImpl<>(
                    postResponses, pageRequest, postsPage.getTotalElements());
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, postPageResponse);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/addPost")
    public ResponseEntity<Object> addPost(@RequestBody AddPostRequest addPostRequest) {
        try {
            Post post = postService.addPost(addPostRequest);
            PostResponse response = new PostResponse(post);
            return ResponseHandler.generateResponse("Successfully Added", HttpStatus.OK, response);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/deletePost")
    public ResponseEntity<Object> deletePost(@RequestParam(name = "postId") Long postId) {
        try {
            postService.deletePost(postId);
            return ResponseHandler.generateResponse("Successfully Deleted", HttpStatus.OK);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/updatePost")
    public ResponseEntity<Object> updatePost(@RequestBody UpdatePostRequest request,
                                             @RequestParam(name = "postId") Long postId) {
        try {
            Post post = postService.updatePost(request, postId);
            PostResponse response = new PostResponse(post);
            return ResponseHandler.generateResponse("Successfully Added", HttpStatus.OK, response);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/applyPost")
    public ResponseEntity<Object> applyPost(@RequestBody ApplicationRequest request){
        try{
            postService.applyPost(request);
            return ResponseHandler.generateResponse("Successfully Applied", HttpStatus.OK);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getApplicants")
    public ResponseEntity<Object> getApplicants(@RequestParam("postId") Long postId){
        try{
            List<Student> students = postService.getApplicants(postId);
            List<StudentResponse> response = students.stream().map(StudentResponse::new).toList();
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getPostByJobId(@RequestParam("jobId") Long jobId){
        try{
            List<Post> posts = postService.getPostByJobId(jobId);
            List<PostResponse> response = posts.stream().map(PostResponse::new).toList();
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Object> getPostById(@PathVariable Long postId){
        try{
            Post post = postService.getPostById(postId);
            PostResponse response = new PostResponse(post);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

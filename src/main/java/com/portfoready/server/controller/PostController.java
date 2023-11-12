package com.portfoready.server.controller;

import com.portfoready.server.dto.request.AddPostRequest;
import com.portfoready.server.dto.response.PostResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.PostService;
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
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    private final UserService userService;

    @GetMapping("/posts")
    private Page<PostResponse> getPosts(@RequestParam(name = "page", defaultValue = "0") int page,
                                        @RequestParam(name = "userId") Long userId) {
        User user = userService.getUserById(userId);
        PageRequest pageRequest = PageRequest.of(page, 10);
        Page<Post> postsPage = postService.getPosts(pageRequest);

        List<PostResponse> postResponses = postsPage.getContent().stream()
                .map(post -> new PostResponse(post, user))
                .collect(Collectors.toList());

        return new PageImpl<>(postResponses, pageRequest, postsPage.getTotalElements());
    }

    @PostMapping("/addPost")
    private ResponseEntity<Object> addPost(@RequestBody AddPostRequest addPostRequest) {
        try {
            Post post = postService.addPost(addPostRequest);
            return ResponseHandler.generateResponse("Successfully Added", HttpStatus.OK, post);
        } catch (EntityNotFoundException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

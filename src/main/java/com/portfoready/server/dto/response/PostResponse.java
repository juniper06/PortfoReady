package com.portfoready.server.dto.response;

import com.portfoready.server.entity.Job;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.User;
import lombok.Builder;
import lombok.Data;


@Data
public class PostResponse {
    private Long id;
    private String title;
    private String description;
    private Job job;
    private Long posterId;
    private Long examId;
    private boolean followed;
    private String username;
    private String email;
    private Long userId;

    public PostResponse(Post post, User user) {
        id = post.getId();
        title = post.getTitle();
        description = post.getDescription();
        posterId = post.getPoster().getId();
        job = post.getJob();
        examId = post.getExam().getId();
        username = user.getUsername();
        userId = user.getId();
        email = user.getEmail();
        followed = user.getFollowing().stream()
                .anyMatch(follower -> follower.getFrom().equals(user) &&
                        follower.getTo().getId().equals(post.getPoster().getId()));
    }

    public PostResponse(Post post) {
        id = post.getId();
        title = post.getTitle();
        description = post.getDescription();
        posterId = post.getPoster().getId();
        examId = post.getExam().getId();
        job = post.getJob();
        followed = false;
    }
}

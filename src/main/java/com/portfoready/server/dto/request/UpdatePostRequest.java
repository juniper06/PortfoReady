package com.portfoready.server.dto.request;


import com.portfoready.server.entity.Job;
import com.portfoready.server.entity.Post;
import lombok.Data;

import java.util.List;

@Data
public class UpdatePostRequest {
    private String title;
    private String description;
    private Long jobId;
    private List<UpdateQuestionRequest> questions;

    @Data
    public static class UpdateQuestionRequest{
        private Long id;
        private String question;
    }

    public Post updatePost(Post post, Job job){
        post.setTitle(title);
        post.setDescription(description);
        post.setJob(job);
        return post;
    }
}

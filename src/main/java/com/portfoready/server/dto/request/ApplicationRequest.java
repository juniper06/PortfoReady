package com.portfoready.server.dto.request;

import lombok.Data;

import java.util.List;


@Data
public class ApplicationRequest {
    private Long studentId;
    private Long postId;
    private List<QuestionResponse> questionResponses;

    @Data
    public static class QuestionResponse{
        private Long questionId;
        private String answer;
    }
}

package com.portfoready.server.dto.response;

import com.portfoready.server.entity.Exam;
import com.portfoready.server.entity.Question;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ExamResponse {
    private final Long id;
    private final List<QuestionResponse> questions;

    public ExamResponse(Exam exam){
        id = exam.getId();
        questions = exam.getQuestions().stream().map(QuestionResponse::new).collect(Collectors.toList());
    }

    @Data
    static class QuestionResponse{
        private String question;
        private String answer;

        QuestionResponse(Question question){
            this.question = question.getQuestion();
            answer = question.getAnswer();
        }
    }
}

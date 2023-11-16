package com.portfoready.server.service;


import com.portfoready.server.entity.Exam;
import com.portfoready.server.entity.Question;
import com.portfoready.server.repository.QuestionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;


    public List<Question> addAllQuestions(List<String> questions, Exam exam) {
        List<Question> newQuestions = questions.stream().map(question -> Question.builder().question(question).exam(exam).build())
                .toList();
        return questionRepository.saveAll(newQuestions);
    }


    public Question getQuestionById(Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new EntityNotFoundException("Question Id Not Found"));
    }

    public void updateQuestions(List<Question> questions){
        questionRepository.saveAll(questions);
    }
}

package com.portfoready.server.service;


import com.portfoready.server.entity.Question;
import com.portfoready.server.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public Question addQuestion(String question) {
        Question newQuestion = Question.builder().question(question).build();
        return questionRepository.save(newQuestion);
    }

    public List<Question> addAllQuestions(List<String> questions) {
        List<Question> newQuestions = questions.stream().map(question -> Question.builder().question(question).build())
                .toList();
        return questionRepository.saveAll(newQuestions);
    }

    public Question addAnswerQuestion(Question question, String answer) {
        question.setAnswer(answer);
        return questionRepository.save(question);
    }
}

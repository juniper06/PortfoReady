package com.portfoready.server.service;


import com.portfoready.server.entity.Exam;
import com.portfoready.server.entity.Question;
import com.portfoready.server.repository.ExamRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {
    private final ExamRepository examRepository;

    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    public Exam addExam(Exam exam) {
        return examRepository.save(exam);
    }

    public Exam getExamById(Long examId) {
        return examRepository.findById(examId).orElseThrow(() -> new EntityNotFoundException("Exam Id Not Found!"));
    }

    public List<Question> getQuestionsByExam(Exam exam) {
        return exam.getQuestions();
    }
}

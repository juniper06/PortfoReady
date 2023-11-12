package com.portfoready.server.service;


import com.portfoready.server.entity.Exam;
import com.portfoready.server.repository.ExamRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ExamService {
    private final ExamRepository examRepository;

    public Exam addExam(Exam exam){
        return examRepository.save(exam);
    }
}

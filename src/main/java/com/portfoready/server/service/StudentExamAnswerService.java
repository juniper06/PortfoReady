package com.portfoready.server.service;

import com.portfoready.server.entity.Exam;
import com.portfoready.server.entity.Question;
import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.StudentExamAnswer;
import com.portfoready.server.repository.StudentExamAnswerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StudentExamAnswerService {
    private final StudentExamAnswerRepository studentExamAnswerRepository;

    public void addStudentExamAnswer(Exam exam, Student student, Question question, String studentAnswer) {
        StudentExamAnswer studentExamAnswer = StudentExamAnswer.builder().exam(exam).student(student).question(question)
                .studentAnswer(studentAnswer).build();
        studentExamAnswerRepository.save(studentExamAnswer);
    }
}

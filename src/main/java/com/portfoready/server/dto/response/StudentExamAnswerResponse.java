package com.portfoready.server.dto.response;


import com.portfoready.server.entity.StudentExamAnswer;
import lombok.Data;

@Data
public class StudentExamAnswerResponse {
    private Long id;
    private Long examId;
    private StudentResponse student;
    private ExamResponse.QuestionResponse question;
    private String answer;


    public StudentExamAnswerResponse(StudentExamAnswer studentExamAnswer){
        id = studentExamAnswer.getId();
        examId = studentExamAnswer.getExam().getId();
        student = new StudentResponse(studentExamAnswer.getStudent());
        question = new ExamResponse.QuestionResponse(studentExamAnswer.getQuestion());
        answer = studentExamAnswer.getStudentAnswer();
    }
}

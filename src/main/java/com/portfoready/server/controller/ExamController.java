package com.portfoready.server.controller;

import com.portfoready.server.dto.response.ExamResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.dto.response.StudentExamAnswerResponse;
import com.portfoready.server.entity.Exam;
import com.portfoready.server.entity.StudentExamAnswer;
import com.portfoready.server.service.ExamService;
import com.portfoready.server.service.StudentExamAnswerService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/exam")
public class ExamController {
    private final ExamService examService;
    private final StudentExamAnswerService studentExamAnswerService;

    @GetMapping("/getExam")
    public ResponseEntity<Object> getExam(@RequestParam("examId") Long examId){
        try{
            Exam exam = examService.getExamById(examId);
            ExamResponse examResponse = new ExamResponse(exam);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, examResponse);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getStudentExamAnswer")
    public ResponseEntity<Object> getStudentExamAnswer(@RequestParam("examId") Long examId){
        try{
            List<StudentExamAnswer> studentExamAnswers = studentExamAnswerService.getExamAnswersByExamId(examId);
            List<StudentExamAnswerResponse> response = studentExamAnswers.stream().map(StudentExamAnswerResponse::new).toList();
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        } catch (Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

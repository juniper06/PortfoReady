package com.portfoready.server.controller;

import com.portfoready.server.dto.response.ExamResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.entity.Exam;
import com.portfoready.server.service.ExamService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/exam")
public class ExamController {
    private final ExamService examService;

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
}

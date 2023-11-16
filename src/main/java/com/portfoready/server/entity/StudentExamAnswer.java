package com.portfoready.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class StudentExamAnswer {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Exam exam;
    @ManyToOne
    private Student student;
    @ManyToOne
    private Question question;
    private String studentAnswer;
}
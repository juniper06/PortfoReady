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
public class Question {
    @Id
    @GeneratedValue
    private Long id;
    private String question;
    @ManyToOne
    @JoinColumn(name = "examId")
    private Exam exam;
}

package com.portfoready.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Exam {
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL)
    private List<Question> questions;
    @OneToMany
    private List<Student> respondents;
}

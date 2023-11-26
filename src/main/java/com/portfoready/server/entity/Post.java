package com.portfoready.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Post {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    @JoinColumn(name = "jobId")
    private Job job;
    @ManyToOne
    @JoinColumn(name = "posterId")
    private Employer poster;
    @OneToMany(fetch = FetchType.LAZY)
    private List<Application> applicants = new ArrayList<>();
    @OneToOne
    private Exam exam;
}

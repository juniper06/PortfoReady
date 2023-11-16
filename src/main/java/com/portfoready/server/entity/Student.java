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
public class Student {
    @Id
    @GeneratedValue
    private Long id;
    private String education;
    private String skills;
    private String experience;
    private String language;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private File resume;
    @OneToOne(orphanRemoval = true)
    private User user;
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Certificate> certificates = new ArrayList<>();
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Application> applications = new ArrayList<>();
}

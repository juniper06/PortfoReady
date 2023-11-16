package com.portfoready.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "postId")
    private Post appliedPost;

    @ManyToOne
    @JoinColumn(name = "studentId")
    private Student applicant;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status = ApplicationStatus.PENDING;

    public enum ApplicationStatus {
        REJECTED,
        PENDING,
        APPROVED
    }

    public void approve(){
        status = ApplicationStatus.APPROVED;
    }

    public void reject(){
        status = ApplicationStatus.APPROVED;
    }
}
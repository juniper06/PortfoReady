package com.portfoready.server.repository;

import com.portfoready.server.entity.Application;
import com.portfoready.server.entity.Post;
import com.portfoready.server.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByAppliedPostId(Long postId);

    List<Application> findAllByApplicantId(Long studentId);

    @Query("select a.applicant from Application a where a.appliedPost.id = :postId")
    List<Student> getAllApplicantsByPostId(Long postId);

    List<Application> findAllByAppliedPost_Id(Long postId);
}

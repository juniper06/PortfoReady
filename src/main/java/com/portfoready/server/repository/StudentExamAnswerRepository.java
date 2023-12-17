package com.portfoready.server.repository;

import com.portfoready.server.entity.StudentExamAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentExamAnswerRepository extends JpaRepository<StudentExamAnswer, Long> {

    List<StudentExamAnswer> findByExamId(Long examId);
}

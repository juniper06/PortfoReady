package com.portfoready.server.repository;

import com.portfoready.server.entity.Student;
import com.portfoready.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByUser(User user);
}

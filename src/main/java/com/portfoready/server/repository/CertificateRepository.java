package com.portfoready.server.repository;

import com.portfoready.server.entity.Certificate;
import com.portfoready.server.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {
    List<Certificate> findAllByStudent(Student student);
}

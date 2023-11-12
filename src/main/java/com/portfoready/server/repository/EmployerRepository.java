package com.portfoready.server.repository;

import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployerRepository extends JpaRepository<Employer, Long> {
    Optional<Employer> findByUser(User user);
}

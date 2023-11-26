package com.portfoready.server.repository;

import com.portfoready.server.entity.Employer;
import com.portfoready.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployerRepository extends JpaRepository<Employer, Long> {
    Optional<Employer> findByUser(User user);


    @Query("select e from Employer e where e.user = :user")
    Employer getEmployerByUser(User user);


    List<Employer> findAllByCompanyNameContains(String companyName);
}

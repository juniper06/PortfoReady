package com.portfoready.server.repository;

import com.portfoready.server.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;


public interface JobRepository extends JpaRepository<Job, Long> {
}

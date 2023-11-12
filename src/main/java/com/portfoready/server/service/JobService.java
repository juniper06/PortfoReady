package com.portfoready.server.service;


import com.portfoready.server.entity.Job;
import com.portfoready.server.repository.JobRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class JobService {
    private final JobRepository jobRepository;

    public Job getJobById(Long jobId) {
        return jobRepository.findById(jobId)
                .orElseThrow(() -> new EntityNotFoundException("Job Id Not Exist"));
    }
}

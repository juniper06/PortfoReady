package com.portfoready.server.repository;

import com.portfoready.server.entity.Job;
import com.portfoready.server.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByJob(Job job);


    @Query("SELECT p FROM Post p ORDER BY RAND() LIMIT 2")
    List<Post> recommendedJobs();

    List<Post> findAllByPosterId(Long posterId);
}

package com.portfoready.server.repository;

import com.portfoready.server.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findAllByJobId(Long jobId);

}

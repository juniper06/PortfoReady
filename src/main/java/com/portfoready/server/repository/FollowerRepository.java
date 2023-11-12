package com.portfoready.server.repository;

import com.portfoready.server.entity.Follower;
import com.portfoready.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
}

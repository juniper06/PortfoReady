package com.portfoready.server.repository;


import com.portfoready.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.id <> :userId AND u.id NOT IN (SELECT f.to.id FROM Follower f WHERE f.from = :user) ORDER BY RAND()")
    List<User> findRandomUsersNotFollowing(@Param("user") User user, @Param("userId") Long userId, Pageable pageable);

}
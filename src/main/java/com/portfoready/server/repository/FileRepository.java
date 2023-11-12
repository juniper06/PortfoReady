package com.portfoready.server.repository;

import com.portfoready.server.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Long> {
    File findByName(String name);
}

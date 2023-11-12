package com.portfoready.server.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class File {
    @Id
    @GeneratedValue
    private Long id;
    @Column(length = 6555555)
    private String filePath;
    private String name;
    private String type;
    private Long size;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    @ManyToOne
    private User uploader;
}

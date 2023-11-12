package com.portfoready.server.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Employer {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private User user;
    private String companyName;
    private String companyDescription;
    private String companyEmail;
    @OneToMany
    private List<Post> posts = new ArrayList<>();
}

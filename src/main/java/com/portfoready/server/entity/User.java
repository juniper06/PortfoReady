package com.portfoready.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    @ElementCollection
    private List<String> links = new ArrayList<>();
    @OneToOne(orphanRemoval = true)
    private File image;
    @OneToMany(mappedBy = "to", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Follower> followers = new ArrayList<>();
    @OneToMany(mappedBy = "from", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Follower> following = new ArrayList<>();

}

package com.portfoready.server.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class UserCreationRequest {
    private String username;
    private String email;
    private String password;
    private String type;
}

package com.portfoready.server.dto.request;


import com.portfoready.server.entity.User;
import lombok.Data;

import java.util.List;

@Data
public class UpdateUserRequest {
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<String> links;

    public User updateUser(User user){
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPhoneNumber(phoneNumber);
        user.setLinks(links);
        return user;
    }
}

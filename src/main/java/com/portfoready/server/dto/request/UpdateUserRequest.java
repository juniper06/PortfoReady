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
        if(!username.isBlank())
            user.setUsername(username);
        if(!password.isBlank())
            user.setPassword(password);
        if(!email.isBlank())
            user.setEmail(email);
        if(!firstName.isBlank())
            user.setFirstName(firstName);
        if(!lastName.isBlank())
            user.setLastName(lastName);
        if(!phoneNumber.isBlank())
            user.setPhoneNumber(phoneNumber);
        if(links!=null)
            user.setLinks(links);
        return user;
    }
}

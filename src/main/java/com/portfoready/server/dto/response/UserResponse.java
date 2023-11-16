package com.portfoready.server.dto.response;

import com.portfoready.server.entity.File;
import com.portfoready.server.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private FileResponse imageFile;
    private List<String> links;

    public UserResponse(User user) {
        id = user.getId();
        username = user.getUsername();
        email = user.getEmail();
        firstName = user.getFirstName();
        lastName = user.getLastName();
        phoneNumber = user.getPhoneNumber();
        links = user.getLinks();
        if(user.getImage() != null)
            imageFile = new FileResponse(user.getImage());
    }
}
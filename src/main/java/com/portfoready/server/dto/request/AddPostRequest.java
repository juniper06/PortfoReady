package com.portfoready.server.dto.request;


import lombok.Data;

import java.util.List;

@Data
public class AddPostRequest {
    private String title;
    private String description;
    private Long jobId;
    private Long posterId;
    private List<String> questions;
}

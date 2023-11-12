package com.portfoready.server.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AddCertificateRequest {
    private String name;
    private MultipartFile image;
}

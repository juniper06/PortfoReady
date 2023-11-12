package com.portfoready.server.dto.response;

import com.portfoready.server.entity.Certificate;
import lombok.Data;

import java.util.Date;

@Data
public class CertificateResponse {
    private Long id;
    private String name;
    private Date date;
    private FileResponse imageFile;


    public CertificateResponse(Certificate certificate) {
        id = certificate.getId();
        name = certificate.getName();
        date = certificate.getDate();
        imageFile = new FileResponse(certificate.getImage());
    }
}

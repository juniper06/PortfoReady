package com.portfoready.server.dto.response;


import com.portfoready.server.entity.File;
import lombok.Data;

import java.util.Date;

@Data
public class FileResponse {
    private Long id;
    private String name;
    private String contentType;
    private Long size;
    private Date date;
    private Long uploaderId;

    public FileResponse(File file){
        id = file.getId();
        name = file.getName();
        contentType = file.getType();
        size = file.getSize();
        date = file.getDate();
        uploaderId = file.getUploader().getId();
    }
}

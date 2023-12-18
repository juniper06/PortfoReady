package com.portfoready.server.controller;


import com.portfoready.server.dto.request.AddCertificateRequest;
import com.portfoready.server.dto.response.CertificateResponse;
import com.portfoready.server.dto.response.ResponseHandler;
import com.portfoready.server.entity.Certificate;
import com.portfoready.server.entity.User;
import com.portfoready.server.service.CertificateService;
import com.portfoready.server.service.FileService;
import com.portfoready.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/certificate")
public class CertificateController {
    private final CertificateService certificateService;
    private final UserService userService;
    private final FileService fileService;

    @PostMapping("/addCertificate")
    public ResponseEntity<Object> addCertificate(@RequestParam(name = "name") String name,
                                                 @RequestParam(name = "file") MultipartFile file,
                                                 @RequestParam(name = "userId") Long userId) {
        try {
            User user = userService.getUserById(userId);
            certificateService.addCertificate(name, file, user);
            return ResponseHandler.generateResponse("Successfully Added", HttpStatus.OK);
        } catch (IOException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/getCertificatesByUser")
    public ResponseEntity<Object> getCertificatesByUser(@RequestParam(name = "userId") Long userId) {

        User user = userService.getUserById(userId);
        List<Certificate> certificates = certificateService.getCertificatesByStudent(user);
        HttpHeaders headers = new HttpHeaders();
        return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, headers, certificates.getFirst().getImage());
    }

    @GetMapping("/getCertificate")
    public ResponseEntity<byte[]> getCertificate(@RequestParam(name = "id") Long id) throws IOException {
        Certificate certificate = certificateService.getCertificate(id);
        byte[] imageData = fileService.downloadImageFromFileSystem(certificate.getImage().getName());

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @DeleteMapping("/deleteCertificate")
    public ResponseEntity<Object> deleteCertificate(@RequestParam(name = "id") Long id) {
        try {
            Certificate certificate = certificateService.deleteCertificate(id);
            CertificateResponse response = new CertificateResponse(certificate);
            return ResponseHandler.generateResponse("Successfully Generated", HttpStatus.OK, response);
        }
        catch(Exception e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

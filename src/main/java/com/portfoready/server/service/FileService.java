package com.portfoready.server.service;


import com.portfoready.server.entity.File;
import com.portfoready.server.entity.User;
import com.portfoready.server.repository.FileRepository;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.Objects;

@Service
@AllArgsConstructor
public class FileService {
    private final FileRepository fileRepository;
    private final String userHome = System.getProperty("user.home");
    private final Path root = Paths.get(userHome, "Downloads/PortfoReady");

    public File uploadFile(MultipartFile file, User user) throws IOException {
        String originalFilename = Objects.requireNonNull(file.getOriginalFilename());
        Path filePath = this.root.resolve(originalFilename);
        Files.copy(file.getInputStream(), filePath);
        return fileRepository.save(File.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .uploader(user)
                .date(new Date())
                .size(file.getSize())
                .filePath(filePath.toString()).build());
    }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        File file = fileRepository.findByName(fileName);
        String filePath = file.getFilePath();
        return Files.readAllBytes(new java.io.File(filePath).toPath());
    }

    @PostConstruct
    private void init() throws IOException {
        Path uploads = Paths.get("uploads");
        if (!Files.exists(root) && !Files.isDirectory(root)) {
            Files.createDirectories(uploads);
        }

//        Comment this if you are using production
        if (Files.exists(root) && Files.isDirectory(root)) {
            DirectoryStream<Path> directoryStream = Files.newDirectoryStream(root);
            for (Path file : directoryStream) {
                Files.delete(file);
            }
        } else {
            Files.createDirectories(uploads);
        }
    }

    public void deleteFile(File file) throws Exception {
        java.io.File ioFile = new java.io.File(root + "/" + file.getName());
        boolean isDeleted = ioFile.delete();
        if (isDeleted) {
            fileRepository.delete(file);
        } else {
            throw new Exception("Failed to Delete File");
        }
    }
}

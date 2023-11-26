package com.portfoready.server;


import com.portfoready.server.entity.*;
import com.portfoready.server.repository.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Component
@AllArgsConstructor
@Slf4j
@Transactional
public class DataInitializer implements CommandLineRunner {
    private JobRepository jobRepository;
    private UserRepository userRepository;
    private EmployerRepository employerRepository;
    private StudentRepository studentRepository;
    private ExamRepository examRepository;
    private PostRepository postRepository;

    @Override
    public void run(String... args) throws Exception {
        // Initialize your entities here
        initialData(); // Uncomment this if your application.properties has spring.jpa.hibernate.ddl-auto = create-drop
    }


    private void initialData() throws IOException {
        Job job1 = Job.builder().name("UI/UX Designer").build();
        Job job2 = Job.builder().name("Front-End Developer").build();
        Job job3 = Job.builder().name("Back-End Developer").build();
        List<Job> jobs = jobRepository.saveAll(List.of(job1, job2, job3));
        log.info(jobs.toString());
        User user1 = User.builder().username("juniper06").email("juniper06@gmail.com").password("juniper06password")
                .build();
        User user2 = User.builder().username("moraxfunk").email("moraxfunk@gmail.com").password("moraxfunkpassword")
                .build();
        userRepository.saveAll(List.of(user1, user2));
        Employer employer = Employer.builder().user(user1).build();
        Student student = Student.builder().user(user2).build();
        employerRepository.save(employer);
        studentRepository.save(student);

        Path root = Paths.get("uploads");
        if (Files.exists(root) && Files.isDirectory(root)) {
            DirectoryStream<Path> directoryStream = Files.newDirectoryStream(root);
            for (Path file : directoryStream) {
                Files.delete(file);
            }
        } else {
            Files.createDirectories(root);
        }
    }

}

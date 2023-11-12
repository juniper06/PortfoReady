package com.portfoready.server.service;


import com.portfoready.server.dto.request.AddPostRequest;
import com.portfoready.server.entity.*;
import com.portfoready.server.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final ExamService examService;
    private final QuestionService questionService;
    private final JobService jobService;
    private final EmployerService employerService;

    public Page<Post> getPosts(PageRequest pageRequest) {
        return postRepository.findAll(pageRequest);
    }

    public Post addPost(AddPostRequest addPostRequest) throws EntityNotFoundException {
        Job job = jobService.getJobById(addPostRequest.getJobId());
        Employer employer = employerService.getEmployerById(addPostRequest.getPosterId());
        List<Question> questions = questionService.addAllQuestions(addPostRequest.getQuestions());
        Exam exam = Exam.builder().questions(questions).build();
        Post newPost = Post.builder().title(addPostRequest.getTitle()).description(addPostRequest.getDescription())
                .job(job).exam(examService.addExam(exam)).poster(employer).build();
        return postRepository.save(newPost);
    }
}

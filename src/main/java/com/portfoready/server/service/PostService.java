package com.portfoready.server.service;


import com.portfoready.server.dto.request.AddPostRequest;
import com.portfoready.server.dto.request.ApplicationRequest;
import com.portfoready.server.dto.request.UpdatePostRequest;
import com.portfoready.server.entity.*;
import com.portfoready.server.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class PostService {
    private final PostRepository postRepository;
    private final ExamService examService;
    private final QuestionService questionService;
    private final JobService jobService;
    private final EmployerService employerService;
    private final StudentService studentService;
    private final ApplicationService applicationService;
    private final StudentExamAnswerService studentExamAnswerService;

    public Page<Post> getPosts(PageRequest pageRequest) {
        return postRepository.findAll(pageRequest);
    }

    public Post addPost(AddPostRequest addPostRequest) throws EntityNotFoundException {
        Job job = jobService.getJobById(addPostRequest.getJobId());
        Employer employer = employerService.getEmployerById(addPostRequest.getPosterId());
        Exam exam = examService.addExam(new Exam());
        List<Question> questions = questionService.addAllQuestions(addPostRequest.getQuestions(), exam);
        Post newPost = Post.builder().title(addPostRequest.getTitle()).description(addPostRequest.getDescription())
                .job(job).exam(exam).poster(employer).build();
        return postRepository.save(newPost);
    }

    public Post getPostById(Long postId) {
        return postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("Post Id not Found!"));
    }

    public void deletePost(Long postId) {
        Post post = getPostById(postId);
        postRepository.delete(post);
    }

    public Post updatePost(UpdatePostRequest request, Long postId) {
        Job job = jobService.getJobById(request.getJobId());
        List<Question> questions = request.getQuestions().stream().map(question -> {
            Question updatedQuestion = questionService.getQuestionById(question.getId());
            updatedQuestion.setQuestion(question.getQuestion());
            return updatedQuestion;
        }).toList();
        questionService.updateQuestions(questions);
        Post post = getPostById(postId);
        Post updatedPost = request.updatePost(post, job);
        return postRepository.save(updatedPost);
    }

    public void applyPost(ApplicationRequest request) {
        Student student = studentService.getStudentById(request.getStudentId());
        Post post = getPostById(request.getPostId());
        applicationService.applyPost(student, post);
        request.getQuestionResponses().forEach(questionResponse -> {
            Question question = questionService.getQuestionById(questionResponse.getQuestionId());
            studentExamAnswerService.addStudentExamAnswer(post.getExam(), student, question,
                    questionResponse.getAnswer()
            );
        });
    }

    public List<Student> getApplicants(Long postId) {
        return applicationService.getApplicationsByPost(postId).stream().map(Application::getApplicant)
                .toList();
    }

    public List<Post> getPostByJobId(Long jobId){
        Job job = jobService.getJobById(jobId);
        return postRepository.findAllByJob(job);
    }

    public Long countAllPost(){
        return postRepository.count();
    }
}

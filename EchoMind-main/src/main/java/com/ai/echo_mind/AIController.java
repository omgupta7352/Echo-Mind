package com.ai.echo_mind;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna")
public class AIController {

    private final QnAService qnAService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload){
      //  System.out.println("ask question starts");
        String question = payload.get("question");
     //   System.out.println("question get");
        String answer = qnAService.getAnswer(question);
     //   System.out.println("answer get");
        return ResponseEntity.ok(answer);
    }
}

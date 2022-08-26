package com.example.searchSample3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class mainController {
    @Autowired
    SampleUserRepository sampleUserRepository;

    @GetMapping("")
    public String index(){
        return "index";
    }

    @PostMapping("/search")
    public String search(@RequestParam("search-text")String searchText, Model model){
        List<SampleUser> sampleUsers = sampleUserRepository.findAllByNameContaining(searchText);
        model.addAttribute("sampleUsers",sampleUsers);

        return "index";
    }
}

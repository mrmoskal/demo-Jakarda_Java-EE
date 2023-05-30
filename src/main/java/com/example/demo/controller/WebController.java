package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {

    @RequestMapping(method = RequestMethod.GET, value = { "/", "/home page - HTML.html", "/home%20page%20-%20HTML.html" })
    public String getHomePage(){
        return "/website/home page - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/page 2 - HTML.html", "/page%202%20-%20HTML.html"})
    public String getSecPage(){
        return "/website/page 2 - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/page 3 - HTML.html", "/page%203%20-%20HTML.html"})
    public String getThirdPage(){
        return "/website/page 3 - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/page 4 - HTML.html", "/page%204%20-%20HTML.html"})
    public String getFourthPage(){
        return "/website/page 4 - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/page 5 - HTML.html", "/page%205%20-%20HTML.html"})
    public String getFifthPage(){
        return "/website/page 5 - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/page 6 - HTML.html", "/page%206%20-%20HTML.html"})
    public String getSixthPage(){
        return "/website/page 6 - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/About page - HTML.html", "/About%20page%20-%20HTML.html"})
    public String getAboutPage(){
        return "/website/About page - HTML";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/About creator.html", "/About%20creator.html"})
    public String getAboutCreatorPage(){
        return "/website/About creator";
    }

    @RequestMapping(method = RequestMethod.GET, value = {"/About creator Result.html", "/About%20creator%20Result.html"})
    public String getAboutCreatorResultPage(){
        return "/website/About creator Result";
    }
}

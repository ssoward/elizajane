package com.ssoward.controller;

import com.ssoward.model.Word;
import com.ssoward.model.WordLevelEnum;
import com.ssoward.service.WordsService;
import com.ssoward.service.TestUtil;
import com.ssoward.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ssoward on 3/5/14.
 */

@Controller
@RequestMapping("/api")
public class WordsController {

    @Autowired
    TestUtil testUtil;

    @Autowired
    UserService userService;

    @Autowired
    WordsService wordService;

    @RequestMapping(method = RequestMethod.POST, value="/words", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveWord(@RequestBody Word word) {
        if(word != null){
            wordService.saveWord(word);
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/words", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<Word> getWords(HttpServletRequest request) {
        return wordService.getWords();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/words/{level}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<Word> getWordsForLevel(HttpServletRequest request, @PathVariable("level") String level) {
        return wordService.getWordsForLevel(level);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/words/levels", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<Map<String, Object>> getWordLevels(HttpServletRequest request) {
        List<Map<String, Object>> eList = new ArrayList<Map<String, Object>>();
        for(WordLevelEnum e: WordLevelEnum.values()){
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("value", e.id);
            map.put("name", e.name());
            eList.add(map);
        }
        return eList;
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/words", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteEmployee(@RequestParam Long id) {
        wordService.deleteWord(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

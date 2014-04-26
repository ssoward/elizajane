package com.ssoward.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Created by ssoward on 4/26/14.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class Word {
    Long id;
    WordLevelEnum level;
    String name;

    public Word() {

    }
    public Word(String a, WordLevelEnum l) {
        this.name = a;
        this.level = l;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public WordLevelEnum getLevel() {
        return level;
    }

    public void setLevel(WordLevelEnum level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

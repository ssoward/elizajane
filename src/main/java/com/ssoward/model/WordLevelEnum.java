package com.ssoward.model;

/**
 * Created by ssoward on 4/26/14.
 */
public enum WordLevelEnum {
    PRE    (101l),
    KINDER (102l),
    FIRST  (1l),
    SECOND (2l),
    THIRD  (3l),
    FORTH  (4l),
    FIFTH  (5l),
    SIXTH  (6l),
    SEVENTH(7l),
    EIGHTH (8l);
    public Long id;
    WordLevelEnum(Long i){
        this.id = i;
    }

    public static WordLevelEnum getForString(String level) {
        for(WordLevelEnum e: WordLevelEnum.values()){
            if(e.id.toString().equals(level)){
                return e;
            }
        }
        return null;
    }

    public static WordLevelEnum getForStringName(String enumStr) {
        for(WordLevelEnum e: WordLevelEnum.values()){
            if(e.name().equals(enumStr)){
                return e;
            }
        }
        return null;
    }
}

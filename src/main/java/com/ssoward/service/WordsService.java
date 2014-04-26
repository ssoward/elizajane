package com.ssoward.service;

import com.ssoward.model.Word;

import java.util.List;

/**
 * Created by ssoward on 3/5/14.
 */

public interface WordsService {

    List<Word> getWords();

    List<Word> getWordsForLevel(String level);

    void saveWord(Word word);

    void deleteWord(Long id);
}

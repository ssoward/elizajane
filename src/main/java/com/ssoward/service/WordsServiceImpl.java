package com.ssoward.service;

import com.ssoward.model.Word;
import com.ssoward.model.WordLevelEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by ssoward on 3/5/14.
 */

@Service
public class WordsServiceImpl implements WordsService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    UserService userService;


    RowMapper wordsRowMapper = new RowMapper() {
        @Override public Word mapRow(ResultSet rs, int i) throws SQLException {
            Word prop = new Word();
            prop.setId(rs.getLong("id"));
            prop.setName(rs.getString("name"));
            prop.setLevel(WordLevelEnum.getForString(rs.getString("level")));
            return prop;
        }
    };

    @Override
    public List<Word> getWords() {
        List<Word> l = jdbcTemplate.query("select * from words", wordsRowMapper);
        return l;
    }

    @Override
    public List<Word> getWordsForLevel(String level) {
        WordLevelEnum e = WordLevelEnum.getForString(level);
        List<Word> l = jdbcTemplate.query("select * from words where level = ?", wordsRowMapper, e.id);
        return l;
    }

    @Override
    public void saveWord(Word word) {
        jdbcTemplate.update("insert into words values (null,?, ?)",
                        word.getName(),
                        word.getLevel().id);
    }

    @Override
    public void deleteWord(Long id) {
        jdbcTemplate.update("delete from words where id = ?", id);
    }
}

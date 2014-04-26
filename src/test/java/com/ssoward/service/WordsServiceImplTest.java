package com.ssoward.service;

import com.ssoward.DB;
import com.ssoward.model.Word;
import com.ssoward.model.WordLevelEnum;
import org.junit.Before;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;

/**
 * Created by ssoward on 2/1/1.
 */

public class WordsServiceImplTest {

    WordsService wordsService;

    @Before
    public void setUp() throws Exception {
        wordsService     = mock(WordsService.class);
        wordsService = new WordsServiceImpl();
    }

    @Test
    public void saveWords() throws Exception {
//        when(mluFacade.getMelchizedekWardMemberList(anyLong())).thenReturn(defaultWard);
//        List<Member> members = memberService.searchWardMembers(1l, "someString");
//
//        assertThat(members.size()).isEqualTo(0);
    }

    public static void main(String args[]){
        DB db = new DB();
        Connection conn = null;
        PreparedStatement pstmt = null;
        try {
            conn = db.getConn();
            String sql = "insert into words values(null,?,?)";


            pstmt = conn.prepareStatement( sql );
            List<Word> words = getWords();
            for(Word w: words) {
                pstmt.setString(1, w.getName());
                pstmt.setLong(2, w.getLevel().id);
                try{pstmt.executeUpdate();}catch (Exception e){e.printStackTrace();}
            }
            conn.close();


        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            try {
                conn.close();
                pstmt.close();
            } catch (Exception e) {
                e.printStackTrace();
            }

        }

    }

    private static List<Word> getWords() {
        final File folder = new File("/Users/ssoward/sandbox/Workspace/elizajane/src/test/java/com/ssoward/words");
        List<Word> sList = listFilesForFolder(folder);
        return sList;
    }


    public static List<Word> listFilesForFolder(final File folder) {
        List<Word> words = new ArrayList<Word>();
        for (final File fileEntry : folder.listFiles()) {
            if (fileEntry.isDirectory()) {
                listFilesForFolder(fileEntry);
            } else {
                String enumStr = fileEntry.getName().toUpperCase().replace(".TXT","");
                WordLevelEnum levelEnum = WordLevelEnum.getForStringName(enumStr);
                System.out.println(levelEnum +"  === "+fileEntry.getAbsolutePath());
                BufferedReader br = null;
                try {
                    br = new BufferedReader(new FileReader(fileEntry.getAbsolutePath()));
                    String line;
                    while ((line = br.readLine()) != null) {
                        Word word = new Word(line, levelEnum);
                        words.add(word);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return words;
    }

}

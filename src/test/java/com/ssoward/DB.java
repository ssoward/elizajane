package com.ssoward;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by ssoward on 4/26/14.
 */
public class DB {
    static {
        try {
            Class.forName( "com.mysql.jdbc.Driver" );
        } catch ( ClassNotFoundException cnfe ) {
            throw new RuntimeException( cnfe );
        }
    }

    public static Connection getConn() throws SQLException {
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/eliza", "root", "asdfg123");
    }
}

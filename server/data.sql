CREATE DATABASE zamora;

\c zamora;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    date DATE, 
    description VARCHAR(255)
);


INSERT INTO todo (date, description) VALUES ('2016-03-02 12:05:00', 'first post, trying to get this date working');




















\q;
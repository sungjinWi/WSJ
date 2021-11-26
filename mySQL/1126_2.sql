create database testdb;

/*
drop database testdb;
*/

create user  'sa@%' identified by '1234'; -- 어디서 접속할래 모든곳에서

select * from mysql.user where user='root';
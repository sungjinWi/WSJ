create database nodepot;
use nodepot;

create table class4 (
	seq int not null auto_increment PRIMARY KEY,     -- not null 무조건 값을 받아야한다 auto_increment 1씩 증가 increment primary key 필요
	userid varchar(16) null, -- varchar는 캐릭터 문자열
    userpwd varchar(16) null, 
	phone varchar(16) null,
    addr varchar(256) null,
    descr varchar(512) null,
    createTime datetime default NOW(),  -- 자동으로 현재시간
    updateTime datetime default NOW()
);

-- drop table class4; -- 테이블 삭제

INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('bloodhunt', '1234', '010-1234-5678', 'New York City', 'He lives in Ogrima');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('frostmage', '1234', '010-1212-5678', 'New York City', 'He lives in UnderCity');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('firemage', '1234', '010-128-5678', 'New York City', 'He lives in Silvermoon');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('visionmage', '1234', '010-5648-5678', 'New York City', 'He lives in Shatras');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('warrior', '1234', '010-9874-5678', 'New York City', 'He lives in Thralma');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('warlock', '1234', '010-3215-5678', 'New York City', 'He lives in Bloodhoff');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('shaman', '1234', '010-7565-5678', 'New York City', 'He lives in Mt. Heizal');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('rogue', '1234', '010-7546-5678', 'New York City', 'He lives in Karazan');
INSERT INTO class4 (userid, userpwd, phone, addr, descr) values ('priest', '1234', '010-7218-5678', 'New York City', 'He lives in Dark shire');


select * from class4 -- select는 query
where seq = 8;

-- where userid = 'frostmage';

-- select userid, userpwd from class4;

UPDATE CLASS4 SET USERID = 'sharman' -- query는 대문자로 써주자
WHERE PHONE = '010-7565-5678'; -- =이 자바스크립트와 달리 동등연산자로 쓰인다

DELETE FROM CLASS4
WHERE USERID = 'ROGUE';

delete from class4
where seq = 6;


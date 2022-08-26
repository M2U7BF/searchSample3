drop table if exists sample_user;

create table sample_user (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name varchar(30) default 'kamei' NOT NULL,
 number int default 0
);
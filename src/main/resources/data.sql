insert into sample_user() values ();
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0  from sample_user;
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0 from sample_user;
insert into sample_user(id) select 0 from sample_user;

update sample_user set
name = CONCAT('name', CEIL(RAND() * 10000), CEIL(RAND() * 10000)),
number = concat(CEIL(RAND() * 9999),CEIL(RAND() * 9999));

commit;
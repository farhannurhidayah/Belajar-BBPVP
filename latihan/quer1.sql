create database pegawai
-- memilih database pegawai
use pegawai;

select * from hobi;

create table hobi(
id int,
nama_hobi varchar(50) not null,
primary key(id));

create table asn(
nip char(18) primary key,
nama varchar(50) not null,
id_hobi int, 
foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(50);

rename table asn to pns;

show databases;
show tables;

drop table pns;
drop database pegawai;
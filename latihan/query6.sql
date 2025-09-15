create database Latihan_1;
use Latihan_1;

create table Buku(
Kode_Buku char(4) primary key,
Judul_Buku varchar(30) not null,
Pengarang varchar(20) not null,
Penerbit varchar(20) not null);

create table pengembalian(
Kode_Pinjam char(4),
Kode_Buku char(4),
Tgl_Kembali date not null,
Denda numeric(9,0) not null,
primary key(Kode_Pinjam, Kode_Buku),
foreign key(Kode_Pinjam) references Peminjaman(Kode_Pinjam),
foreign key(Kode_Buku) references Buku(Kode_Buku));

create table Peminjaman(
Kode_Pinjam char(4),
NIK char(18) ,
NIM char(8), 
tgl_Pinjam date not null,
primary key(Kode_Pinjam),
foreign key(NIK) references Karyawan(NIK),
foreign key(NIM) references mahasiswa(NIM));

create table Mahasiswa(
NIM char(8),
Nama_mhs varchar(30) not null,
Alamat_Mhs varchar(30) not null,
NoHp_Mhs varchar(15) not null,
primary key(NIM));

create table karyawan(
NIK char(18) primary key,
Nama_Karyawan varchar(30) not null,
Alamat_Karyawan varchar(30) not null,
NoHp_Karyawan varchar(15) not null,
Jabatan varchar(25) not null);

select * from buku;
select * from pengembalian;
select * from Peminjaman;
select * from Mahasiswa;
select * from karyawan;
 
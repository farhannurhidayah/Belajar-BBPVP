create database toko_online;
use toko_online;
create table pelanggan(
id int primary key,
nama varchar(50) not null);

create table transaksi(
id int primary key,
id_pelanggan int,
produk varchar(50) not null);

insert into pelanggan values
(1, 'Ándi'),
(2, 'Budi'),
(3, 'Citra');

insert into transaksi values
(1,1, 'Laptop'),
(2,1, 'HP'),
(3,4, 'Kamera');

select * from pelanggan;
select * from transaksi;

-- INNER JOIN
select pelanggan.id, pelanggan.nama, transaksi.produk
from pelanggan
inner join transaksi
on pelanggan.id = transaksi.id_pelanggan; 

-- LEFT JOIN
select p.nama, t.produk
from transaksi t
left join pelanggan p
on p.id = t.id_pelanggan;

select p.nama, t.produk
from pelanggan p
left join transaksi t
on p.id = t.id_pelanggan;

-- RIGHT JOIN
select p.nama, t.produk
from pelanggan p
right join transaksi t
on p.id = t.id_pelanggan;

-- RIGHT JOIN
select p.id, p.nama, t.id , t.id_pelanggan, t.produk
from pelanggan p
cross join transaksi t;

-- view
select * from pelanggan;
create view vs_asn as;

-- Procedure Menggunakan Delimeter // $$
-- Function / DETERMINISTIC
-- Trigger 


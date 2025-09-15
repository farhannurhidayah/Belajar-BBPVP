use pegawai;

-- COMMIT - Tidak bisa di Rollback
-- Mulai transaksi
start transaction;
-- Tambah Hobi
insert into hobi (id, nama_hobi) values (5, 'Menulis');
-- simpan ke database secara permanen
commit;

rollback;
select * from hobi;

-- commit - Bisa di Rollback
-- Mulai Transaksi
start transaction;
-- tambah hobi;
insert into hobi(id, nama_hobi) values (6,'ngoding');
select * from hobi;
rollback;
select * from hobi;

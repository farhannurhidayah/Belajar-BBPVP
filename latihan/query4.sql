use pegawai;

create table asn_audit(
id int auto_increment primary key,
aksi varchar(20),
nip varchar(20),
nama varchar(100),
id_hobi int,
tgl datetime);

create trigger after_nip_ditambah
after insert on asn
for each row
insert into asn_audit
set aksi = 'tambah',
nip = new.nip,
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

insert into asn values 
('2141513513535','ujang',2);

select * from asn;
select * from asn_audit;

-- Commit
-- RollBack
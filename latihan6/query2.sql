insert into hobi values
(1, 'Memasak'),
(2, 'Olaharaga'),
(3, 'Menyanyi'),
(4, 'Membaca');

insert into asn values 
('1234567895254523','Pogba', 1),
('1234567891241421','Puyol', 2),
('1234567892131233','Madun', 3),
('1234567892312312','Palmer', 2),
('1234567892131234','Meguire', 1);

select * from hobi;
select * from asn;

update asn set nama = 'Sunflower' where nip = '1234567892131233';

delete from asn where nip = '1234567892131233';

select * from asn
where nip = '1234567892131234';

select * from asn
where nip in ('1234567892131234','1234567891241421');

delete from asn;
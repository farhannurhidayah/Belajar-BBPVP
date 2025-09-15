use sekolah;

DELIMITER $$
create procedure sp_cari_agama(
	in m_nama_agama varchar(11)
    )
begin
	select nama, jumlah
    from vw_jml_agama_siswa
    where Nama = m_nama_agama;
end $$
DELIMITER ;
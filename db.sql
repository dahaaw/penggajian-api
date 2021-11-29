-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mal-db
-- Waktu pembuatan: 28 Nov 2021 pada 10.54
-- Versi server: 8.0.27
-- Versi PHP: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mal`
--
CREATE DATABASE IF NOT EXISTS `mal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `mal`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`) VALUES
(1, 'Hamdan Awaludin', 'hamdan', '$2a$10$IR4zv6FUEEolZK86ADuJmePg4wmssUD5ZgscCeTc82HsJj5Dn2Rm.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cuti`
--

CREATE TABLE `cuti` (
  `id` int NOT NULL,
  `karyawan_id` int NOT NULL,
  `tanggal_cuti` date NOT NULL,
  `jumlah` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `cuti`
--

INSERT INTO `cuti` (`id`, `karyawan_id`, `tanggal_cuti`, `jumlah`) VALUES
(5, 14, '2021-10-21', 1),
(6, 14, '2021-10-21', 9);

-- --------------------------------------------------------

--
-- Struktur dari tabel `golongan`
--

CREATE TABLE `golongan` (
  `id` int NOT NULL,
  `nama_golongan` varchar(100) NOT NULL,
  `gaji_pokok` int NOT NULL,
  `tunjangan_istri` int NOT NULL,
  `tunjangan_anak` int NOT NULL,
  `tunjangan_transport` int NOT NULL,
  `tunjangan_makan` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `golongan`
--

INSERT INTO `golongan` (`id`, `nama_golongan`, `gaji_pokok`, `tunjangan_istri`, `tunjangan_anak`, `tunjangan_transport`, `tunjangan_makan`) VALUES
(1, 'I', 10000000, 1000000, 100000, 10000, 1000),
(2, 'II', 8000000, 800000, 80000, 8000, 800),
(3, 'III', 6000000, 600000, 60000, 6000, 600),
(4, 'IV', 5000000, 500000, 50000, 5000, 500);

-- --------------------------------------------------------

--
-- Struktur dari tabel `karyawan`
--

CREATE TABLE `karyawan` (
  `id` int NOT NULL,
  `nip` varchar(12) NOT NULL,
  `nik` varchar(12) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jenis_kelamin` enum('pria','wanita') NOT NULL,
  `tempat_lahir` varchar(100) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `telpon` varchar(12) NOT NULL,
  `agama` varchar(15) NOT NULL,
  `status_nikah` enum('belum nikah','nikah') NOT NULL,
  `alamat` text NOT NULL,
  `golongan_id` int NOT NULL,
  `foto` varchar(150) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `karyawan`
--

INSERT INTO `karyawan` (`id`, `nip`, `nik`, `nama`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `telpon`, `agama`, `status_nikah`, `alamat`, `golongan_id`, `foto`, `createdAt`, `updatedAt`) VALUES
(14, 'MAL211100001', 'K00001', 'Awaludin', 'pria', 'bogor', '1999-10-19', '085210566071', 'islam', 'nikah', 'Jl. Alamanda', 3, 'oto', '2021-11-28 05:52:42', '2021-11-28 05:52:42'),
(15, 'MAL211100002', 'K00002', 'Hamdan', 'pria', 'bogor', '1999-10-19', '085210566071', 'islam', 'nikah', 'Jl. Alamanda', 1, 'oto', '2021-11-28 05:53:03', '2021-11-28 05:53:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `lembur`
--

CREATE TABLE `lembur` (
  `id` int NOT NULL,
  `karyawan_id` int NOT NULL,
  `tanggal_lembur` date NOT NULL,
  `jumlah` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `lembur`
--

INSERT INTO `lembur` (`id`, `karyawan_id`, `tanggal_lembur`, `jumlah`) VALUES
(2, 14, '2021-10-21', 1),
(3, 14, '2021-10-25', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `penggajian`
--

CREATE TABLE `penggajian` (
  `id` int NOT NULL,
  `tanggal` date NOT NULL,
  `keterangan` text,
  `karyawan_id` int NOT NULL,
  `jumlah_gaji` int NOT NULL,
  `jumlah_lembur` int NOT NULL,
  `potongan` int NOT NULL,
  `total_gaji_diterima` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `penggajian`
--

INSERT INTO `penggajian` (`id`, `tanggal`, `keterangan`, `karyawan_id`, `jumlah_gaji`, `jumlah_lembur`, `potongan`, `total_gaji_diterima`) VALUES
(1, '2021-10-12', NULL, 14, 6666600, 180000, 1000000, 5846600),
(2, '2021-10-12', NULL, 15, 11111000, 0, 0, 11111000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cuti`
--
ALTER TABLE `cuti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `karyawan_id` (`karyawan_id`);

--
-- Indeks untuk tabel `golongan`
--
ALTER TABLE `golongan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `golongan_id` (`golongan_id`);

--
-- Indeks untuk tabel `lembur`
--
ALTER TABLE `lembur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `karyawan_id` (`karyawan_id`);

--
-- Indeks untuk tabel `penggajian`
--
ALTER TABLE `penggajian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `karyawan_id` (`karyawan_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `cuti`
--
ALTER TABLE `cuti`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `golongan`
--
ALTER TABLE `golongan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `lembur`
--
ALTER TABLE `lembur`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `penggajian`
--
ALTER TABLE `penggajian`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `cuti`
--
ALTER TABLE `cuti`
  ADD CONSTRAINT `cuti_ibfk_1` FOREIGN KEY (`karyawan_id`) REFERENCES `karyawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  ADD CONSTRAINT `karyawan_ibfk_1` FOREIGN KEY (`golongan_id`) REFERENCES `golongan` (`id`);

--
-- Ketidakleluasaan untuk tabel `lembur`
--
ALTER TABLE `lembur`
  ADD CONSTRAINT `lembur_ibfk_1` FOREIGN KEY (`karyawan_id`) REFERENCES `karyawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `penggajian`
--
ALTER TABLE `penggajian`
  ADD CONSTRAINT `penggajian_ibfk_1` FOREIGN KEY (`karyawan_id`) REFERENCES `karyawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

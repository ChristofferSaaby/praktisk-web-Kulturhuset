-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 20. 04 2018 kl. 10:13:41
-- Serverversion: 5.6.24
-- PHP-version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kulturhuset`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `arrangementer`
--

CREATE TABLE IF NOT EXISTS `arrangementer` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `fk_type` int(11) NOT NULL,
  `dato_tid` datetime NOT NULL,
  `varighed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fk_sted` int(11) NOT NULL,
  `fk_sal` int(11) NOT NULL,
  `pris` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `arrangementer`
--

INSERT INTO `arrangementer` (`id`, `title`, `fk_type`, `dato_tid`, `varighed`, `fk_sted`, `fk_sal`, `pris`) VALUES
(1, 'Find Nemo 60+', 1, '2018-04-12 16:00:00', '2018-04-04 17:00:00', 1, 1, 200),
(2, 'martins arbejdsskema', 2, '2018-04-14 12:00:00', '2018-04-14 21:59:00', 2, 2, 2000),
(3, 'franks tårn', 3, '2018-04-11 10:00:00', '2018-04-10 07:00:00', 3, 3, 22),
(4, 'støvregnens historie', 4, '2018-04-10 10:00:00', '2018-04-10 13:00:00', 1, 4, 500),
(5, 'noget om noget', 5, '2018-04-10 09:00:00', '2018-04-10 08:00:00', 2, 5, 0),
(6, 'hvem hvad hvor', 1, '2018-04-10 07:00:00', '2018-04-10 11:00:00', 3, 6, 2275);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `sal`
--

CREATE TABLE IF NOT EXISTS `sal` (
  `id` int(11) NOT NULL,
  `sal` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `sal`
--

INSERT INTO `sal` (`id`, `sal`) VALUES
(1, 'sal 1'),
(2, 'sal 2'),
(3, 'sal 3'),
(4, 'sal 4'),
(5, 'sal 5'),
(6, 'mødelokale 1'),
(7, 'mødelokale 2'),
(8, 'mødelokale 3'),
(9, 'mødelokale 4'),
(10, 'mødelokale 5'),
(11, 'mødelokale 6'),
(12, 'mødelokale 7'),
(13, 'mødelokale 8');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `steder`
--

CREATE TABLE IF NOT EXISTS `steder` (
  `id` int(11) NOT NULL,
  `postnummer` int(11) NOT NULL,
  `by` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `steder`
--

INSERT INTO `steder` (`id`, `postnummer`, `by`) VALUES
(1, 4000, 'roskilde'),
(2, 4040, 'jyllinge'),
(3, 4100, 'ringsted');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `typer`
--

CREATE TABLE IF NOT EXISTS `typer` (
  `id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `typer`
--

INSERT INTO `typer` (`id`, `type`) VALUES
(1, 'teater'),
(2, 'film'),
(3, 'udstillinger'),
(4, 'fordrag'),
(5, 'koncert');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `mob_no`, `user_name`, `password`) VALUES
(4, 'Christoffer', 'Laursen', 12345678, 'admin', '1234'),
(5, 'Martin', 'Saaby', 87654321, '$$MoNeYmAkEr420$$', 'Faggot');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `arrangementer`
--
ALTER TABLE `arrangementer`
  ADD PRIMARY KEY (`id`), ADD KEY `fk_type` (`fk_type`), ADD KEY `fk_sted` (`fk_sted`), ADD KEY `fk_sal` (`fk_sal`);

--
-- Indeks for tabel `sal`
--
ALTER TABLE `sal`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `steder`
--
ALTER TABLE `steder`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `typer`
--
ALTER TABLE `typer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `arrangementer`
--
ALTER TABLE `arrangementer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Tilføj AUTO_INCREMENT i tabel `sal`
--
ALTER TABLE `sal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- Tilføj AUTO_INCREMENT i tabel `steder`
--
ALTER TABLE `steder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Tilføj AUTO_INCREMENT i tabel `typer`
--
ALTER TABLE `typer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `arrangementer`
--
ALTER TABLE `arrangementer`
ADD CONSTRAINT `arrangementer_ibfk_1` FOREIGN KEY (`fk_type`) REFERENCES `typer` (`id`),
ADD CONSTRAINT `arrangementer_ibfk_2` FOREIGN KEY (`fk_sal`) REFERENCES `sal` (`id`),
ADD CONSTRAINT `arrangementer_ibfk_3` FOREIGN KEY (`fk_sted`) REFERENCES `steder` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2023 a las 23:08:40
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `next_proyect_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `comprador` varchar(255) NOT NULL,
  `articulos` mediumtext NOT NULL,
  `ganancia` double NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `comprador`, `articulos`, `ganancia`, `createdAt`, `updatedAt`) VALUES
(1, 'jose.carrillo27@hotmail.com', 'jose manue', 300333003, '2023-04-25', '2023-04-26'),
(7, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1}]', 61000, '2023-04-26', '2023-04-26'),
(8, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1}]', 61000, '2023-04-26', '2023-04-26'),
(9, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1}]', 61000, '2023-04-26', '2023-04-26'),
(10, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":2},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\"}]', 85000, '2023-04-26', '2023-04-26'),
(11, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":2},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\"}]', 85000, '2023-04-26', '2023-04-26'),
(12, 'paula.qui@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":2},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":2},{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\"},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\"}]', 122000, '2023-05-02', '2023-05-02'),
(13, 'jose.carrillo27@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":9,\"id_category\":1,\"nombre\":\" PIC 16f877a\",\"numero_ref\":\"AC-6789\",\"stock\":32,\"image\":\"image-1679583371838.D_NQ_NP_2X_630601-MCO49576991703_042022-F.webp\",\"costo\":27000,\"precio_venta\":39000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1}]', 73000, '2023-05-02', '2023-05-02'),
(14, 'paula.qui@hotmail.com', '[{\"id\":1,\"id_category\":1,\"nombre\":\"PIC 16f887\",\"numero_ref\":\"AC-1234\",\"stock\":35,\"image\":\"image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg\",\"costo\":27000,\"precio_venta\":51000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1},{\"id\":2,\"id_category\":1,\"nombre\":\"PIC 18f4550\",\"numero_ref\":\"AC-4321\",\"stock\":27,\"image\":\"image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp\",\"costo\":68000,\"precio_venta\":105000,\"createdAt\":\"2023-03-23\",\"updatedAt\":\"2023-03-23\",\"cantidad\":1}]', 61000, '2023-05-02', '2023-05-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `custumers`
--

CREATE TABLE `custumers` (
  `id` int(11) NOT NULL,
  `id_rool` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `CC` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` varchar(80) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_categorias`
--

CREATE TABLE `productos_categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos_categorias`
--

INSERT INTO `productos_categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Microcontroladores', NULL, NULL),
(2, 'Microprocesadores', NULL, NULL),
(5, 'Pilas', NULL, NULL),
(6, 'Memorias', NULL, NULL),
(7, 'Bobinas', NULL, NULL),
(8, 'Resistencias', NULL, NULL),
(9, 'Condensadores', NULL, NULL),
(10, 'Otros', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `numero_ref` varchar(150) CHARACTER SET ucs2 NOT NULL,
  `stock` int(11) NOT NULL,
  `costo` double NOT NULL,
  `precio_venta` double NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `id_category`, `nombre`, `numero_ref`, `stock`, `costo`, `precio_venta`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'PIC 16f887', 'AC-1234', 35, 27000, 51000, 'image-1679582252581.D_NQ_NP_665655-MLM31335437605_072019-O.jpg', '2023-03-23', '2023-03-23'),
(2, 1, 'PIC 18f4550', 'AC-4321', 27, 68000, 105000, 'image-1679582626936.D_NQ_NP_2X_602656-MCO53422625493_012023-F.webp', '2023-03-23', '2023-03-23'),
(9, 1, ' PIC 16f877a', 'AC-6789', 32, 27000, 39000, 'image-1679583371838.D_NQ_NP_2X_630601-MCO49576991703_042022-F.webp', '2023-03-23', '2023-03-23'),
(13, 2, 'Mos 6502ad 6502', 'BC-4536', 37, 9000, 17000, 'image-1679584303635.D_NQ_NP_2X_889813-MCO50276413301_062022-F.webp', '2023-03-23', '2023-03-23'),
(14, 8, 'Resistencias 1 W de 0.1 Ω a 560 Ω', 'RC-2345', 2500, 50, 200, 'image-1679584679163.resistencia_1_watt_de_potencia_ferretronica_984875bf-65f1-45c1-a66d-910908df7920_480x480.webp', '2023-03-23', '2023-03-23'),
(15, 8, 'Resistencia 10k  1/4 W X 50 Unidades', 'RC-5647', 70, 3000, 6500, 'image-1679584863632.D_NQ_NP_602400-MCO44728472025_012021-O.webp', '2023-03-23', '2023-03-23'),
(16, 5, 'Pila Recargable Aa Energizer De 1500mah X 4 Unid', 'PL-2356', 38, 42000, 62000, 'image-1679585256838.D_NQ_NP_2X_893771-MCO31111301295_062019-F.webp', '2023-03-23', '2023-03-23'),
(17, 5, 'Pilas Aa Carbón 1.5 V Beston', 'PL-6789', 37, 3200, 6500, 'image-1679585335110.D_NQ_NP_2X_713136-MCO31560820049_072019-F.webp', '2023-03-23', '2023-03-23'),
(18, 5, 'Pila 9v Voltios 250mah Recargable', 'PL-6784', 54, 18000, 37000, 'image-1679585467315.D_NQ_NP_2X_893019-MCO51233274245_082022-F.webp', '2023-03-23', '2023-03-23'),
(19, 6, 'RAM  8GB 1 Samsung M471B1G73DB0-YK0', 'ME-1234', 27, 70000, 124000, 'image-1679585641548.D_NQ_NP_2X_874092-MLA49180658936_022022-F.webp', '2023-03-23', '2023-03-23'),
(20, 7, 'Condensador 200v 2200uf', 'CO-1212', 78, 18000, 29000, 'image-1679585825524.D_NQ_NP_2X_682271-MCO50785279325_072022-F.webp', '2023-03-23', '2023-03-23'),
(21, 7, 'Kit Condensadores 20 Unidades', 'CO-4356', 59, 2800, 6000, 'image-1679585929245.D_NQ_NP_625393-MCO52647381317_112022-O.webp', '2023-03-23', '2023-03-23'),
(22, 10, 'Multimetro Digital Uni-t Ut33c+, Temperatura, Tester', 'MU-3429', 256, 47000, 81000, 'image-1679586162219.D_NQ_NP_643044-MCO32235203834_092019-O.webp', '2023-03-23', '2023-03-23'),
(23, 8, 'Kit Resistencias  1/4 Watt', 'RS-3049', 360, 9000, 13000, 'image-1680030553697.D_NQ_NP_2X_671882-MCO42910561829_072020-F.webp', '2023-03-28', '2023-03-28'),
(24, 8, 'Resistencia Cerámica 20 Watts', 'RS-4356', 279, 2300, 4200, 'image-1680030644077.D_NQ_NP_648870-MCO49152043345_022022-O.webp', '2023-03-28', '2023-03-28'),
(25, 8, 'Resistencias 1/2w Watts', 'RS-3254', 145, 4800, 9000, 'image-1680030739122.D_NQ_NP_2X_941914-MCO44917523313_022021-F.webp', '2023-03-28', '2023-03-28'),
(26, 8, 'Resistencia De Precision 1% 1/4w', 'RS-7896', 232, 4700, 11000, 'image-1680030887869.D_NQ_NP_706455-MCO42324475141_062020-O.webp', '2023-03-28', '2023-03-28'),
(27, 8, '300 Resistencias Película Metálica 1/4w', 'RS-4789', 644, 7800, 16300, 'image-1680031004630.D_NQ_NP_975244-MCO49634124590_042022-O.webp', '2023-03-28', '2023-03-28'),
(28, 1, 'Attiny85-20pu Dip-8', 'MC-5632', 143, 8000, 17000, 'image-1680031189081.D_NQ_NP_634935-MCO50120145224_052022-O.webp', '2023-03-28', '2023-03-28'),
(29, 1, 'Microcontrolador Atmega328p Dip-28', 'MC-2354', 334, 12000, 22000, 'image-1680031435485.D_NQ_NP_839353-MCO45062941264_032021-O.webp', '2023-03-28', '2023-03-28'),
(30, 10, 'multimetro', 'mu-3244', 345, 34000, 49000, 'image-1680124813763.descarga.jpg', '2023-03-29', '2023-03-29'),
(34, 7, 'sss', 'aaa', 34, 45667, 3454543, 'image-1682546519059.ruta.jpg', '2023-04-26', '2023-04-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_rool` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `CC` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` int(11) DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `contraseña` varchar(80) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `id_rool`, `nombre`, `apellido`, `CC`, `email`, `celular`, `departamento`, `ciudad`, `direccion`, `contraseña`, `createdAt`, `updatedAt`) VALUES
(5, 1, 'jose manuel', 'carrillo', 123456543, 'jose.adm@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$ywrZqYIQl9NQ2JWo9yhBq.paHZQn5oG7rr1l.0NXsyJuLXjFyUNHW', '2023-02-10', '2023-02-10'),
(11, 1, 'vanessa', 'carrillo', 1233455434, 'vanessa@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$/kmW40UHzvtjkrWCh0MoBuZVcNxv1LkvktSpspd01/DveLr9EGz4i', '2023-02-20', '2023-02-20'),
(16, 1, 'pedronel', 'carrillo', 123432345, 'pedro@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$BpZHwacP24Wp8VvMKTxng.uDtefy6X8toJupWW79QUnZez4PaMsKe', '2023-02-28', '2023-04-08'),
(20, 1, 'andrea', 'carrillo', 121123345, 'andrea@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$n.4eHRSTo.MF44AZFdqwzussXmqRv.AVpLLoiA3M24xzCVoc4PGXm', '2023-03-06', '2023-03-06'),
(21, 2, 'juana', 'perez', 123431256, 'jusan@hormail.com', 555555, 'cesar', 'Valledupar', 'calle 34 # 23-125', '$2a$08$Ubzs4.1trlMn.MqvRQxTk.ntNCgLkMQomgRrxdaBy4737FMiBkqBO', '2023-03-06', '2023-04-08'),
(22, 2, 'paula', 'qunchania', 345672552, 'paula.qui@hotmail.com', 300067887, 'altlantico', 'barranquilla', 'calle 84 # 46 -125', '$2a$08$jPP1w3C6FV/w2/kgzTrxbu5U11j1ml/FXBn1V3WEf/N3erJ2lvPue', '2023-03-29', '2023-04-08'),
(28, 2, 'andres', 'dddd', 434552232, 'andres.as@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$cPwJLGkTTFpIp5BGjVojH.nTQJ.FQLjRH4aKbDyEd2H8CwDad.UqK', '2023-04-25', '2023-04-25'),
(42, 2, 'pedro', 'asda', 12131175, 'pedr@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$Hrgfpd0FPaNJ45YQeGBPQOiNhRRV.UR2ubJ0AgZuMM/GKOWA6W0o.', '2023-04-26', '2023-04-26'),
(43, 2, 'migr', 'perez', 123134238, 'mige@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$pV3GA9MB1bO/63zmwXRF8eX98pS3bBmnS8fPy/PxT8CTrGtyozBRS', '2023-04-26', '2023-04-26'),
(44, 2, 'asas', 'asdas', 2147483647, 'josea.adm@hotmail.com', NULL, NULL, NULL, NULL, '$2a$08$3Dt5k8/JcMuXLHHtFIS6dO.ppKBsyfeTQqOpp8qvcXLnqRE5oqZyu', '2023-04-26', '2023-04-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_rool`
--

CREATE TABLE `user_rool` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_rool`
--

INSERT INTO `user_rool` (`id`, `tipo`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', NULL, NULL),
(2, 'user', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `custumers`
--
ALTER TABLE `custumers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CC` (`CC`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_rool` (`id_rool`);

--
-- Indices de la tabla `productos_categorias`
--
ALTER TABLE `productos_categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CC` (`CC`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `celular` (`celular`),
  ADD KEY `id_rool` (`id_rool`);

--
-- Indices de la tabla `user_rool`
--
ALTER TABLE `user_rool`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tipo` (`tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `custumers`
--
ALTER TABLE `custumers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_categorias`
--
ALTER TABLE `productos_categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `custumers`
--
ALTER TABLE `custumers`
  ADD CONSTRAINT `custumers_ibfk_1` FOREIGN KEY (`id_rool`) REFERENCES `user_rool` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `productos_categorias` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_rool`) REFERENCES `user_rool` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

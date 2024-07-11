-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-05-2024 a las 23:15:23
-- Versión del servidor: 8.0.37
-- Versión de PHP: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegcat_qa_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudientes`
--

CREATE TABLE `acudientes` (
  `id` int NOT NULL,
  `parentesco` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `vive` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `profesion` varchar(255) DEFAULT NULL,
  `dondeTrabaja` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `ingresoMensual` double DEFAULT NULL,
  `correoElectronico` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `bolsillo` double DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `acudientes`
--

INSERT INTO `acudientes` (`id`, `parentesco`, `estado`, `vive`, `tipoDocumento`, `identificacion`, `nombres`, `apellidos`, `profesion`, `dondeTrabaja`, `cargo`, `ingresoMensual`, `correoElectronico`, `direccion`, `telefono`, `celular`, `bolsillo`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, 'Padre', '1', '1', 'Esto no es un tipo de documento', 'Esto no es un número de cedula', 'Andrés', 'Bojaca', 'Tester', 'Testing', 'Tester', 0, 'qatesting@gmail.com', 'Carrera 123', '3214180122', '3214180122', 18153016, 1, '2023-05-10 20:00:00', '2024-05-13 20:00:36', 1),
(2, 'Padre', '1', '1', 'CEDULA', '1000349000', 'Samuel', 'Rodriguez', 'Ceo', 'Test', 'Test', 5000000, 'adminsamuel@gmail.com', 'Carrera 123', '3000000000', '3000000000', 0, 1, '2023-06-25 20:00:00', '2023-06-25 20:00:00', 2),
(3, 'Madre', NULL, '1', 'CEDULA', 'sdffsf', 'gsdff', 'sdfsdf', 'sdfsf', 'sdfsdf', 'sdfsdf', 12311, 'fdff@fasd.com', 'sdfsdfsdfsdf', '1313121212', '3333333333', NULL, 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 4),
(4, 'Padre', NULL, '1', 'CEDULA', '22222222', 'PAPA', 'PPss', 'ING', 'IND', 'ADMON', 2000000, 'F@GMAIL.COM', 'CR 5', '311111111122', '311111111', NULL, 1, '2023-10-11 21:25:45', '2024-04-27 03:59:12', 5),
(5, 'Padre', NULL, '1', 'CEDULA', 'kwjdsa ojsd', 'ds.msdlj ', 'wdalkowsde', ' dlondswob nsw', 'sdl nsodwno', 'wdlojcouswne', 5000000, 'samuel@tecnopac.com.co', 'o2einwoneifnweip', '3112364545', '3112363374', NULL, 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 7),
(6, 'Padre', NULL, '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', NULL, 1, '2024-01-25 08:52:20', '2024-05-13 19:46:15', 9),
(7, 'Padre', NULL, '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', NULL, 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 11),
(8, 'Padre', NULL, '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', NULL, 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 15),
(9, 'Madre', NULL, '1', 'CEDULA', '383838383', 'ALEJANDRA', 'GUZMAN', 'INDEPENDIENTE', 'INDEPENDIENTE', 'PROPIETARIA', 4000000, '1111@gmail.com', 'cr 23 No 5 - 5', '33333333', '315555555', NULL, 1, '2024-02-22 15:08:41', '2024-03-08 20:20:39', 16),
(10, 'Padre', NULL, '0', 'CEDULA', 'asass', 'sasas', 'asasas', 'asasa', 'asasas', 'sasas', 10000, 'Esto no es un correo', 'aaaaa', '600000', '3000000', NULL, 1, '2024-05-10 16:36:18', '2024-05-13 23:56:39', 17),
(11, 'Acudiente', NULL, 'No lo sé', 'Esto no es un tipo de documento', 'Esto no es una identificación', '4005006080', '7008009620', 'Contador', 'Mi empresa contable', 'Jefe', 2000000, 'dad', 'Su casa', '3004005060sss', 'Esto no es un número de telefono', NULL, 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 18),
(12, 'Acudiente', NULL, 'No lo sé', 'Esto no es un tipo de documento', 'Esto no es una identificación', '4005006080', '7008009620', 'Contador', 'Mi empresa contable', 'Jefe', 2000000, 'dad', 'Su casa', '3004005060sss', 'Esto no es un número de telefono', NULL, 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aptitudesEstadoFisicos`
--

CREATE TABLE `aptitudesEstadoFisicos` (
  `id` int NOT NULL,
  `deporteGusto` varchar(255) DEFAULT NULL,
  `arteGusto` varchar(255) DEFAULT NULL,
  `distincionDeporte` varchar(255) DEFAULT NULL,
  `distincionArtistica` varchar(255) DEFAULT NULL,
  `pasatiempos` varchar(255) DEFAULT NULL,
  `coleccion` varchar(255) DEFAULT NULL,
  `estadoSalud` varchar(255) DEFAULT NULL,
  `enfermedades` varchar(255) DEFAULT NULL,
  `medicamentos` varchar(255) DEFAULT NULL,
  `limitacionEducacionFisica` varchar(255) DEFAULT NULL,
  `tipoSangre` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `aptitudesEstadoFisicos`
--

INSERT INTO `aptitudesEstadoFisicos` (`id`, `deporteGusto`, `arteGusto`, `distincionDeporte`, `distincionArtistica`, `pasatiempos`, `coleccion`, `estadoSalud`, `enfermedades`, `medicamentos`, `limitacionEducacionFisica`, `tipoSangre`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, '5', '5', '5', '5', '5', '', '5', '5', '5', '5', '5', 1, '2022-12-15 19:18:22', '2022-12-15 19:18:22', NULL),
(2, '5', '5', '5', '5', '5', '', '5', '5', '5', '5', '5', 1, '2022-12-15 19:18:40', '2022-12-15 19:18:40', NULL),
(3, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', 1, '2022-12-15 19:22:14', '2022-12-15 19:22:14', NULL),
(4, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', 1, '2022-12-15 19:57:04', '2022-12-15 19:57:04', NULL),
(5, 'fsdfdf', 'dsf', 'sdfdf', 'sdfsf', 'sdf', 'sdf', 'sf', 'fsf', 'sff', 'asdasd', 'asdsa', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 4),
(6, 'FUT', 'DIBUJO', 'SI', 'SI', 'JUGAR', 'SI', 'EXCELENTE', 'NINGUNA', 'NO', 'SI', 'A+', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', 5),
(7, 'wpcnowsnecoi', 'wljocoebcoj', 'wkcnipencipe', 'cpinewoncoi', 'woljecnowoe', 'wlcon oeno', 'wdlcknweoini', 'wvkenoinwoi', 'ewcldneocnew', 'weoncoen', 'ewobcoeb', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 7),
(8, 'adas', 'dads', 'asdasd', 'asda', 'sdasd', 'sadas', 'adsasd', 'asd', 'asdsa', 'adasd', 'adas', 1, '2024-01-25 08:52:20', '2024-01-25 08:52:20', 9),
(9, 'WEWED', 'QEDEW', 'WONIOEN', 'WEDWF', 'AWCWE', 'WERF', 'OWINEOU', 'WLNCOIPE', 'KOWENOIPW', 'EPWIWEIO', 'OWENIP', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 11),
(10, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 15),
(11, 'FUTBOL, VOLEIBOL, BALONCESTO', 'DANZA', 'SI', 'SI', 'PRACTICAR FUTBOL', 'NO', 'EXCELENTE', 'NINGUNA', 'NO', 'SI', 'A+', 1, '2024-02-22 15:08:41', '2024-02-22 15:08:41', 16),
(12, 'a', 'a', 'a', 'aa', 'a', 'a', 'a', 'a', 'a', 's', 'a', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 17),
(13, 'Formula 1', 'Postmoderna', 'No', 'No', 'Tocar guitarra', 'No', 'Bueno', 'Ninguna', 'Ácido Fólico ', 'No Puede', 'O positivo', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 18),
(14, 'Formula 1', 'Postmoderna', 'No', 'No', 'Tocar guitarra', 'No', 'Bueno', 'Ninguna', 'Ácido Fólico ', 'No Puede', 'O positivo', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attendingManagements`
--

CREATE TABLE `attendingManagements` (
  `id` int NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pension` varchar(255) DEFAULT NULL,
  `balance` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cafeteria`
--

CREATE TABLE `cafeteria` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pay` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cafeteria`
--

INSERT INTO `cafeteria` (`id`, `description`, `pay`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Almuerzo mensual', '250000', 1, '2022-11-26 22:05:22', '2024-02-22 13:23:15'),
(2, 'Almuerzo día', '12500', 1, '2023-10-11 19:14:47', '2023-10-11 19:14:47'),
(3, 'Test', '100000', 1, '2023-12-29 03:41:51', '2024-02-22 13:25:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cafeteriaPagos`
--

CREATE TABLE `cafeteriaPagos` (
  `id` int NOT NULL,
  `price` double DEFAULT NULL,
  `cantMenu` int DEFAULT NULL,
  `productMenu` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cafeteriaPagos`
--

INSERT INTO `cafeteriaPagos` (`id`, `price`, `cantMenu`, `productMenu`, `metodoPago`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, 2250500, 5, 'Almuerzo mensual', 'bolsillo', 1, '2023-06-07 04:58:26', '2023-06-07 04:58:26', 1),
(2, 62500, 5, 'Almuerzo día', 'bolsillo', 0, '2023-10-11 19:15:16', '2023-10-11 19:16:14', 1),
(3, 1250000, 5, 'Almuerzo mensual', 'bolsillo', 0, '2023-12-29 03:42:21', '2023-12-29 03:43:08', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CanalReferencia`
--

CREATE TABLE `CanalReferencia` (
  `id` int NOT NULL,
  `comoSeEntero` varchar(255) DEFAULT NULL,
  `comoSabe` varchar(255) DEFAULT NULL,
  `porqueIngresar` varchar(255) DEFAULT NULL,
  `nombreAcudiente` varchar(255) DEFAULT NULL,
  `aceptaCompromisos` varchar(255) DEFAULT NULL,
  `estadoPago` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `CanalReferencia`
--

INSERT INTO `CanalReferencia` (`id`, `comoSeEntero`, `comoSabe`, `porqueIngresar`, `nombreAcudiente`, `aceptaCompromisos`, `estadoPago`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, 'sdfsdfsdfs', 'sdfsdfsf', 'sdfsdfsf', 'sdfsdfsfsf', '1', '0', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 4),
(2, 'GG', 'GG', 'GG', 'PAPA MM', '1', '0', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', 5),
(3, 'owncdoneo', 'eowicnwouenco', 'wocenweounc', 'owncoiwenoien', '1', '0', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 7),
(4, 'adad', 'asdas', 'asda', 'ada', '1', '0', 1, '2024-01-13 01:36:47', '2024-01-13 01:36:47', 8),
(5, 'adasd', 'adasd', 'adassd', 'aadad', '1', '0', 1, '2024-01-25 08:52:20', '2024-01-25 08:52:20', 9),
(6, 'WLJBWOJE', 'WJONWOI', 'WOINOIN', 'WIWNEPIEWN', '1', '0', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 11),
(7, ' ', ' ', ' ', ' ', '1', '0', 1, '2024-02-21 05:27:24', '2024-02-21 05:27:24', 15),
(8, 'Facebook', 'Excelente calidad académica', 'Por la excelente calidad académica', 'Isabel Gomez', '1', '0', 1, '2024-02-22 15:08:42', '2024-02-22 15:08:42', 16),
(9, 'asasa', 'asasa', 'asaas', 'asaasa', '1', '0', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 17),
(10, 'Recomendación', 'Es una buena institución educativa', 'Porque es un buen colegio', 'Martin De Avila', '1', '0', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 18),
(11, 'Recomendación', 'Es una buena institución educativa', 'Porque es un buen colegio', 'Martin De Avila', '1', '0', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certificateInscriptions`
--

CREATE TABLE `certificateInscriptions` (
  `id` int NOT NULL,
  `monto` varchar(255) DEFAULT NULL,
  `detalle` varchar(255) DEFAULT NULL,
  `canalEntrega` varchar(255) DEFAULT NULL,
  `documentUrl` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `entregado` tinyint(1) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idCertificate` int DEFAULT NULL,
  `idGrade` int DEFAULT NULL,
  `idEstudiante` int DEFAULT NULL,
  `paymentCode` varchar(255) DEFAULT NULL,
  `paid` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `certificateInscriptions`
--

INSERT INTO `certificateInscriptions` (`id`, `monto`, `detalle`, `canalEntrega`, `documentUrl`, `metodoPago`, `entregado`, `status`, `createdAt`, `updatedAt`, `idCertificate`, `idGrade`, `idEstudiante`, `paymentCode`, `paid`) VALUES
(1, '20000', 'Solicitud porque se necesita para la matricula de mi hijo en el próximo año', 'Online', 'https://docs.google.com/document/d/1XMI92zc1qEna0KD8X8JPzVPOViFZRtJC/edit#heading=h.gjdgxs', 'Pago Presencial', NULL, 3, '2024-02-29 10:37:44', '2024-02-29 11:33:45', 1, 3, 1, '60t1zrg8', 1),
(29, '20000', 'Test', 'Online', 'https://docs.google.com/document/d/1XMI92zc1qEna0KD8X8JPzVPOViFZRtJC/edit#heading=h.gjdgxs', 'Pago Presencial', NULL, 3, '2024-02-29 11:20:14', '2024-02-29 11:25:55', 1, 3, 1, 'hbu4arxa', 1),
(30, '20000', 'Test', 'Online', 'https://docs.google.com/document/d/1XMI92zc1qEna0KD8X8JPzVPOViFZRtJC/edit#heading=h.gjdgxs', 'Pago Presencial', NULL, 1, '2024-02-29 11:34:25', '2024-05-13 17:15:21', 1, 3, 1, 'jiu08j2m', 1),
(31, '20000', 'test', 'R. Caja', NULL, 'Pago Presencial', NULL, 1, '2024-02-29 11:35:54', '2024-02-29 11:36:23', 1, 3, 1, 'i9pjr1wi', 0),
(32, '20000', 'Test R.caja', 'R. Caja', NULL, 'Bolsillo', NULL, 2, '2024-02-29 11:41:33', '2024-02-29 11:44:52', 1, 3, 1, 'epw7p9cb', 1),
(33, '20000', 'Prueba', 'Online', NULL, 'Pago Presencial', NULL, NULL, '2024-05-13 18:14:41', '2024-05-13 18:14:41', 1, 2, 1, 'g9t8jfsb', 0),
(34, '45000', 'Urgente', 'R. Caja', NULL, 'Pago Presencial', NULL, NULL, '2024-05-13 18:20:32', '2024-05-13 18:20:32', 2, 3, 1, 'u63lam0x', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certificates`
--

CREATE TABLE `certificates` (
  `id` int NOT NULL,
  `concept` varchar(255) DEFAULT NULL,
  `time` bigint DEFAULT NULL,
  `channel` varchar(255) DEFAULT NULL,
  `applicant` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `certificates`
--

INSERT INTO `certificates` (`id`, `concept`, `time`, `channel`, `applicant`, `price`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Certificado de Notas', 2, 'online', 'Activo', 20000, 1, '2024-02-28 10:59:51', '2024-02-28 10:59:51'),
(2, 'Certificado Estudiantil', 8, 'fisico', 'Activo', 45000, 1, '2024-05-13 18:19:09', '2024-05-13 18:19:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id` int NOT NULL,
  `asignature` varchar(255) DEFAULT NULL,
  `starDate` datetime DEFAULT NULL,
  `finalDate` datetime DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `typeCourse` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idTeacher` int DEFAULT NULL,
  `starHour` varchar(255) DEFAULT NULL,
  `finalHour` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `asignature`, `starDate`, `finalDate`, `price`, `typeCourse`, `isActive`, `createdAt`, `updatedAt`, `idTeacher`, `starHour`, `finalHour`, `description`) VALUES
(6, 'Castellano', '2022-11-02 00:00:00', '2022-11-16 00:00:00', 210000, 'extraordinaria', 1, '2022-11-30 18:50:08', '2024-02-21 19:37:58', 1, '', '', ''),
(7, 'Matemáticas', '2024-07-15 00:00:00', '2024-08-14 00:00:00', 300000, 'verano', 1, '2023-10-11 17:07:53', '2024-02-21 18:49:41', 2, '8:00 am', '12:00 m', ''),
(8, 'Química', '2024-07-01 00:00:00', '2024-07-15 00:00:00', 200000, 'verano', 1, '2024-02-03 17:30:55', '2024-02-03 17:30:55', 3, '7:00 am', '10:00 am', ''),
(9, 'Matemáticas', '2024-07-01 00:00:00', '2024-07-16 00:00:00', 900000, 'habilitacion', 1, '2024-02-21 18:15:36', '2024-02-21 18:15:36', 2, '', '', ''),
(10, 'Español', '2024-07-01 00:00:00', '2024-02-15 00:00:00', 210000, 'verano', 1, '2024-02-21 18:50:12', '2024-02-21 18:50:12', 3, '', '', ''),
(11, 'Matemáticas', '2024-07-01 00:00:00', '2024-07-15 00:00:00', 210000, 'extraordinaria', 1, '2024-02-21 19:37:45', '2024-02-21 19:37:45', 1, '', '', ''),
(12, 'Química', '2024-07-01 00:00:00', '2024-07-15 00:00:00', 210000, 'habilitacion', 1, '2024-02-21 19:38:29', '2024-02-21 19:38:29', 3, '', '', ''),
(13, 'Inglés', '2024-04-26 00:00:00', '2024-12-27 00:00:00', 200000, 'extraordinaria', 1, '2024-04-26 09:06:31', '2024-04-26 09:06:31', 3, '', '', ''),
(14, 'Inglés', '2024-04-27 00:00:00', '2024-05-26 00:00:00', 200000, 'verano', 1, '2024-04-26 09:07:13', '2024-04-26 09:07:13', 3, '', '', 'Inglés'),
(15, 'Inglés', '2024-04-26 00:00:00', '2024-04-26 00:00:00', 200000, 'habilitacion', 1, '2024-04-26 09:07:34', '2024-04-26 09:07:34', 3, '', '', ''),
(16, 'Programación Inicial - Prueba', '2024-05-13 00:00:00', '2024-05-17 00:00:00', 200000, 'verano', 1, '2024-05-10 15:50:13', '2024-05-10 15:50:25', 3, 'aasjauauaua', 'njkkadakkaaksjjsjsjaa', 'Esto es un curso de programación de prueba'),
(17, 'Matemáticas - Prueba', '2024-05-20 00:00:00', '2024-05-24 00:00:00', 2000000, 'extraordinaria', 1, '2024-05-10 15:51:05', '2024-05-10 15:51:05', 2, '', '', ''),
(18, 'Matematicas - Pruebas', '2024-05-27 00:00:00', '2024-05-31 00:00:00', 2000000, 'habilitacion', 1, '2024-05-10 15:51:38', '2024-05-10 15:51:38', 3, '', '', ''),
(19, 'Curso de Prueba', '2024-05-27 00:00:00', '2024-05-31 00:00:00', 2000000, 'extraordinaria', 1, '2024-05-10 21:06:06', '2024-05-10 21:06:06', 2, '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coursesInscriptions`
--

CREATE TABLE `coursesInscriptions` (
  `id` int NOT NULL,
  `monto` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL,
  `idCourse` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `coursesInscriptions`
--

INSERT INTO `coursesInscriptions` (`id`, `monto`, `metodoPago`, `createdAt`, `updatedAt`, `idEstudiante`, `idCourse`) VALUES
(1, '7888', 'bolsillo', '2023-06-05 20:13:55', '2023-06-05 20:13:55', 1, 6),
(2, '7888', 'bolsillo', '2023-06-07 04:33:44', '2023-06-07 04:33:44', 1, 6),
(3, '7888', 'bolsillo', '2023-08-15 17:42:22', '2023-08-15 17:42:22', 1, 6),
(4, '7888', 'bolsillo', '2023-08-15 17:42:28', '2023-08-15 17:42:28', 1, 6),
(5, '7888', 'bolsillo', '2023-08-15 17:42:33', '2023-08-15 17:42:33', 1, 6),
(6, '7888', 'bolsillo', '2023-10-10 20:36:14', '2023-10-10 20:36:14', 1, 6),
(7, '200000', 'bolsillo', '2023-11-18 14:45:41', '2023-11-18 14:45:41', 1, 7),
(8, '7888', 'bolsillo', '2024-02-01 11:21:41', '2024-02-01 11:21:41', 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deudas`
--

CREATE TABLE `deudas` (
  `id` int NOT NULL,
  `deudaCode` varchar(255) DEFAULT NULL,
  `concepto` varchar(255) DEFAULT NULL,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaFinal` datetime DEFAULT NULL,
  `monto` double DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `cobro` varchar(255) DEFAULT NULL,
  `cobroValue` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `deudas`
--

INSERT INTO `deudas` (`id`, `deudaCode`, `concepto`, `fechaInicio`, `fechaFinal`, `monto`, `estado`, `cobro`, `cobroValue`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, '37crde1o', 'Deuda', '2024-05-10 00:00:00', '2024-05-31 00:00:00', 20000, 'Pendiente', 'todos', '', '2024-05-10 10:03:08', '2024-05-10 10:03:08', NULL),
(2, 'h51rizfs', 'Vidrio Roto', '2024-05-10 00:00:00', '2024-05-17 00:00:00', 100000, 'Pendiente', 'estudiante', '11', '2024-05-10 19:35:06', '2024-05-10 19:35:06', NULL),
(3, 'fv4g3wms', 'Ventana Rota', '2024-05-10 00:00:00', '2024-05-17 00:00:00', 2000000, 'Pendiente', 'estudiante', '1', '2024-05-11 01:06:12', '2024-05-11 01:06:12', NULL),
(4, '8fq4drme', 'Certificado Estudiantil', '2024-05-13 00:00:00', '2024-05-13 00:00:00', 20000, 'Pendiente', 'estudiante', '17', '2024-05-13 13:59:35', '2024-05-13 13:59:35', NULL),
(5, '9z3i7rie', 'Certificado Salud', '2024-05-13 00:00:00', '2024-05-13 00:00:00', 20000, 'Pendiente', 'estudiante', '1', '2024-05-13 14:01:58', '2024-05-13 14:01:58', NULL),
(6, 'wma8atid', 'Vidrio Roto segundo piso', '2024-05-17 00:00:00', '2024-05-17 00:00:00', 400000, 'Pendiente', 'grado', '7', '2024-05-13 16:23:39', '2024-05-13 16:23:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discounts`
--

CREATE TABLE `discounts` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `starDate` datetime DEFAULT NULL,
  `finalDate` datetime DEFAULT NULL,
  `percentage` varchar(255) DEFAULT NULL,
  `frequency` int DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `useType` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `discounts`
--

INSERT INTO `discounts` (`id`, `name`, `starDate`, `finalDate`, `percentage`, `frequency`, `service`, `isActive`, `createdAt`, `updatedAt`, `status`, `useType`) VALUES
(1, 'Agua', '2023-08-30 00:00:00', '2024-06-28 00:00:00', '7.4', 1, 'Pension', 1, '2022-11-25 02:37:11', '2024-05-13 04:39:05', 0, 0),
(2, 'Hermanos', '2023-08-29 00:00:00', '2024-06-27 00:00:00', '7.5', 2, 'Pension', 1, '2023-10-11 16:20:29', '2024-05-13 04:39:14', 0, 1),
(3, 'Mérito Académico Ma. Alejandra Durán', '2023-09-01 00:00:00', '2023-11-30 00:00:00', '7', 1, 'General', 1, '2023-10-11 16:29:27', '2024-03-09 14:51:25', 1, 1),
(7, 'Test', '2024-02-20 00:00:00', '2024-02-20 00:00:00', '43', 1, 'General', 1, '2024-02-19 10:23:08', '2024-02-19 10:23:08', 0, 1),
(8, 'Test', '2024-04-26 00:00:00', '2027-11-26 00:00:00', '15', 3, 'General', 1, '2024-04-26 08:01:04', '2024-04-26 08:01:04', 1, 0),
(9, 'Prueba', '2024-05-08 00:00:00', '2024-05-08 00:00:00', '5', 6, 'Casa', 0, '2024-05-10 15:33:48', '2024-05-10 15:44:05', 0, 0),
(10, 'Prueba Tecnopac', '2024-05-09 00:00:00', '2024-05-09 00:00:00', '200', 100, 'Matricula', 1, '2024-05-10 15:45:12', '2024-05-13 01:16:53', 0, 0),
(11, 'Prueba Tecnopac', '2024-05-13 00:00:00', '2024-05-17 00:00:00', '5', 50, 'Matricula', 1, '2024-05-10 15:47:11', '2024-05-13 04:39:20', 0, 0),
(12, 'Nuevo Cupón', '2024-05-12 00:00:00', '2024-05-12 00:00:00', '5', 1, 'Pension', 1, '2024-05-13 04:39:50', '2024-05-13 04:39:57', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `id` int NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `template` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`id`, `titulo`, `template`, `createdAt`, `updatedAt`) VALUES
(1, 'ACTA DE CORESPONSABILIDAD', '<table style=\"border-collapse: collapse; width: 100%; border-width: 0px;\" border=\"1\"><colgroup><col style=\"width: 13.7387%;\"><col style=\"width: 74.8874%;\"><col style=\"width: 11.3739%;\"></colgroup>\n<tbody>\n<tr>\n<td style=\"border-width: 0px;\">&nbsp;</td>\n<td style=\"border-width: 0px;\">\n<h4 style=\"text-align: center;\">&nbsp;</h4>\n<h4 style=\"text-align: center;\">&nbsp;</h4>\n<h4 style=\"text-align: center; line-height: 1.5;\"><span style=\"text-decoration: underline; font-family: arial, helvetica, sans-serif; font-size: 8pt;\">ACTO DE CORRESPONSABILIDAD</span></h4>\n<p style=\"line-height: 1.5;\">&nbsp;</p>\n<p style=\"line-height: 1.5;\"><span style=\"font-family: arial, helvetica, sans-serif; font-size: 8pt;\">Seg&uacute;n el art&iacute;culo 10 de la Ley 1098 y Art. 67 de la Constituci&oacute;n pol&iacute;tica de Colombia</span></p>\n<p style=\"text-align: justify; line-height: 1.5;\"><span style=\"font-family: arial, helvetica, sans-serif; font-size: 8pt;\"><span style=\"text-decoration: underline;\"><strong>OBLIGACIONES DEL ACUDIENTE:</strong></span> Los padres de familia (ACUDIENTE) est&aacute;n OBLIGADOS seg&uacute;n lo dispuesto en el Manual de Convivencia Escolar a: A) A asistir a todas las citaciones, reuniones, talleres, conferencias y actividades que programa el establecimiento educativo. B) A ser leales con la instituci&oacute;n educativa colaborando en todo lo que concierne a la formaci&oacute;n integral de sus hijos. C) A cumplir con todo el procedimiento de matr&iacute;cula exigido en el manual de convivencia y en el caso de la atenci&oacute;n a los ni&ntilde;os, ni&ntilde;as o adolescentes, soportar toda la papeler&iacute;a y registros de seguimiento m&eacute;dico asociados a su necesidad. D) Acompa&ntilde;ar y velar por el progreso acad&eacute;mico, personal y social de sus hijos de acuerdo con las exigencias de su grado conforme a lo dispuesto en el Sistema de Evaluaci&oacute;n Institucional SIEE; evitar incurrir en el facilismo y las disculpas no certificadas E) Inculcar los valores de sana convivencia, desarrollo de inteligencia emocional, inteligencia social, desarrollo personal, cumplimiento y puntualidad en sus compromisos, con la familia, la instituci&oacute;n y en las clases. F) Supervisar la presentaci&oacute;n de tareas, evaluaciones, deberes y actividades acad&eacute;micas para lograr la excelencia educativa de su hijo, de su grupo y de su colegio. G) Ense&ntilde;ar a su hijo a hacer uso correcto del uniforme dentro y fuera de la instituci&oacute;n educativa, evitando el uso prendas y accesorios ajenos al uniforme dando una mala imagen de s&iacute; mismo y del establecimiento educativo. G) Estar atento a las compa&ntilde;&iacute;as que frecuenta su hijo, ense&ntilde;arle a ser selectivo con sus amistades, evitar frecuentar malas compa&ntilde;&iacute;as que pongan en riesgo su integridad f&iacute;sica, psicol&oacute;gica y emocional; la integridad de su familia y de sus compa&ntilde;eros del colegio, H) Estar atento al uso de las redes virtuales; ense&ntilde;arle a ser selectivo con las p&aacute;ginas, blogs, youtubers, pel&iacute;culas, videos, contenidos multimedias, canciones, literatura, textos y redes sociales que frecuenta, evitando aquellas que pongan en riesgo su integridad f&iacute;sica, psicol&oacute;gica y emocional; la integridad de su familia y de sus compa&ntilde;eros del colegio. Configurar y establecer los controles parentales necesarios para el uso del internet. Ense&ntilde;ar a su hijo que la informaci&oacute;n, fotos, comentarios, que comparta o publique en internet pueden traerle consecuencias negativas, &nbsp;I) Velar por el cumplimiento del protocolo de seguridad del colegio, J) Promover el cuidado de los elementos &nbsp;escolares propios de sus hijos as&iacute; como de las instalaciones, muebles y enseres del colegio, K) Tener conocimiento de: ni el Colegio Cat&oacute;lico Rosalba Santander SAS ni los profesores se responsabilizan de objetos perdidos, no hacen el oficio de detectives si se pierden en el colegio; &nbsp;tampoco se responde por el costo de esos objetos, ejemplo: juguetes, celulares, computadores, bicicletas, otros, etc. El cuidado de estos corresponde a quien los trae, Ver MDC, L) Los hijos son el compromiso primordial afectivo, educativo, econ&oacute;mico, etc. Este compromiso no admite disculpas ni delegaciones.&nbsp;</span></p>\n<p style=\"text-align: justify; line-height: 1.5;\"><br><span style=\"font-family: arial, helvetica, sans-serif; font-size: 8pt;\">Yo <strong>{{acudiente_nombre}} </strong>en mi calidad de acudiente de <strong>{{estudiante_nombre}} </strong>acepto el acto de Corresponsabilidad.</span></p>\n<p style=\"line-height: 1.5;\"><span style=\"font-family: arial, helvetica, sans-serif; font-size: 8pt;\">Para constancia se firma a los {{fecha_actual_dia}} d&iacute;as del Mes {{fecha_actual_mes}} del A&ntilde;o {{fecha_actual_anio}}</span></p>\n<p style=\"line-height: 1.5;\"><br><span style=\"font-size: 8pt; font-family: arial, helvetica, sans-serif;\">_____________________________</span></p>\n</td>\n<td style=\"border-width: 0px; line-height: 1.5;\">&nbsp;</td>\n</tr>\n</tbody>\n</table>\n<p style=\"line-height: 1.5;\">&nbsp;</p>', '2023-08-08 18:54:15', '2024-01-27 03:41:31'),
(2, 'PAGARÉ', '<table style=\"border-collapse: collapse; width: 100%; border-width: 0px;\" border=\"1\"><colgroup><col style=\"width: 4.27928%;\"><col style=\"width: 92.2297%;\"><col style=\"width: 3.49099%;\"></colgroup>\n<tbody>\n<tr>\n<td style=\"border-width: 0px;\">&nbsp;</td>\n<td style=\"border-width: 0px; line-height: 1.5;\">\n<p style=\"text-align: center; line-height: 2;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><strong><span style=\"font-size: 12pt;\">COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS</span></strong></span></p>\n<p style=\"line-height: 2; text-align: left;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><strong><span style=\"font-size: 12pt;\">PAGAR&Eacute;</span></strong></span></p>\n<table style=\"border-collapse: collapse; width: 89.804%; border-width: 0px; height: 140px; border-spacing: 0px;\" border=\"1\"><colgroup><col style=\"width: 100%;\"></colgroup>\n<tbody>\n<tr style=\"height: 140px;\">\n<td style=\"border-width: 0px; height: 140px; line-height: 1.5; padding: 0px;\"><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Lugar y fecha de la firma: _______________________________________________________________Pagar&eacute; No.:________________________ </span><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Valor:_________________________________________________________________________________________________________________&nbsp; </span><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Intereses durante el plazo:<strong><span style=\"text-decoration: underline;\"> CORRIENTES LEGALES&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></strong>Intereses de mora: <strong><span style=\"text-decoration: underline;\">LOS INTERESES DE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></strong></span><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Persona a quien debe hacerse el pago: <strong><span style=\"text-decoration: underline;\">COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS .&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></strong></span><br><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Lugar donde se efectuar&aacute; el pago: Cali, carrera 49 # 9b-42 Fecha de vencimiento de la obligaci&oacute;n: <strong><span style=\"text-decoration: underline;\">SEG&Uacute;N DETALLE CL&Aacute;USULA TERCERA </span></strong></span><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Estudiante<strong><span style=\"text-decoration: underline;\"> &nbsp;{{estudiante_nombre}} &nbsp;</span></strong>GRADO:&nbsp;<span style=\"text-decoration: underline;\"> </span><strong><span style=\"text-decoration: underline;\">{{estudiante_grado}} </span></strong>&nbsp;C&Oacute;DIGO _______ Deudores acudientes:</span><br><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Nombre e identificaci&oacute;n: _________________________________________________________________________________________________</span><br><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Nombre e identificaci&oacute;n: _________________________________________________________________________________________________</span></td>\n</tr>\n</tbody>\n</table>\n<p style=\"line-height: 1.2; text-align: justify;\"><span style=\"font-family: \'times new roman\', times, serif; font-size: 9pt;\">Declaramos:&nbsp;<strong>PRIMERA. &ndash; OBJETO:</strong> Que por virtud del presente t&iacute;tulo valor pagar&eacute; (mos) incondicionalmente, a la orden del <span style=\"text-decoration: underline;\"><strong>COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS</strong></span>, o a quien represente sus derechos, en la ciudad y direcci&oacute;n indicados; en las fechas de amortizaci&oacute;n por cuotas se&ntilde;aladas en la Cl&aacute;usula Tercera de este pagar&eacute;, la suma de:&nbsp;<span style=\"text-decoration: underline;\"> </span><strong><span style=\"text-decoration: underline;\">{{valor_matricula_letras}} (${{valor_matricula}}) </span></strong>, m&aacute;s los intereses se&ntilde;alados en la Cl&aacute;usula Segunda de este documento, por la prestaci&oacute;n del servicio educativo, del estudiante&nbsp; <span style=\"text-decoration: underline;\"><strong>&nbsp; {{estudiante_nombre}}&nbsp; &nbsp; </strong></span>&nbsp;. <strong>SEGUNDA. &ndash; INTERESES:</strong> Que sobre la suma debida reconocer&eacute; (mos) intereses<span style=\"text-decoration: underline;\"><strong> A LA TASA LEGAL</strong></span> seg&uacute;n el <span style=\"text-decoration: underline;\"><strong>BANCO DE LA REP&Uacute;BLICA</strong></span>, sobre el capital o su saldo insoluto. En caso de mora reconocer&eacute; (mos) intereses a la tasa m&aacute;xima legal autorizada. <strong>TERCERA &ndash; PLAZO:</strong> Que pagar&eacute; (mos) el capital indicado en la cl&aacute;usula primera y sus intereses si se causaren, mediante cuotas mensuales y sucesivas correspondientes cada una a la cantidad de:</span><span style=\"font-size: 11pt;\"><span style=\"font-family: \'times new roman\', times, serif;\"><br><span style=\"font-size: 9pt;\">{{tabla_pensiones}}</span><br></span></span><span style=\"font-family: \'times new roman\', times, serif; font-size: 9pt;\">Pagos que se realizan por medio de: pago en l&iacute;nea a trav&eacute;s de la plataforma web del Colegio Cat&oacute;lico Rosalba Santander SAS, consignaci&oacute;n en la cuenta bancaria definida por el colegio o por dat&aacute;fono directamente en el colegio. <strong>CUARTA. &ndash; CL&Aacute;USULA ACELERATORIA:</strong> El tenedor podr&aacute; declarar vencidos la totalidad de los plazos de esta obligaci&oacute;n o de las cuotas que constituyan el saldo de lo debido y exigir su pago inmediato ya sea judicial o extrajudicialmente, cuando el (los) deudor (es) entre (n) en mora o incumpla (n) una o cualquiera de las obligaciones derivadas del presente documento. <strong>QUINTA. &ndash; IMPUESTO DE TIMBRE:</strong> El impuesto de timbre de este documento si se causare ser&aacute; de cargo &uacute;nica y exclusivamente del (los) deudor (es). <strong>SEXTA:</strong> &ldquo;El incumplimiento o retardo en el pago de m&aacute;s de una cuota dar&aacute; lugar a que el acreedor declare vencida la obligaci&oacute;n y exija el pago de la totalidad de la deuda o el saldo insoluto que se tenga a la fecha, m&aacute;s los intereses de mora que se hayan generado, as&iacute; como de las obligaciones accesorias a que haya lugar; sin necesidad de requerimiento judicial alguno. Ser&aacute;n a cargo del deudor, los gastos que se generen por el cobro pre jur&iacute;dico del 10% o jur&iacute;dico del 20%, cuando a ello hubiere lugar. La responsabilidad solidaria e incondicional se extiende a todas las pr&oacute;rrogas, renovaciones o ampliaciones del plazo, que el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS, otorgue a cualesquiera de nosotros y durante las cuales continuar&aacute; sin modificaci&oacute;n nuestra obligaci&oacute;n de solucionar solidaria e incondicionalmente las deudas aqu&iacute; contenidas, las cuales aceptamos expresamente desde la fecha. Autorizamos expresamente y desde ahora cualquier endoso que de este documento hiciera el acreedor a cualquier persona natural o jur&iacute;dica. Renuncio igualmente a la constituci&oacute;n en mora y al derecho de solicitar la divisi&oacute;n de los bienes embargados para efecto de su remate, as&iacute; como al derecho de nombrar o constituirme en depositario de bienes en caso de secuestro judicial. Los pagos que se realicen se registrar&aacute;n en la Plataforma web del Colegio Cat&oacute;lico, en caso de incurrir en mora el valor del recargo podr&aacute; visualizarse en la misma &ldquo;.</span></p>\n<p style=\"text-align: justify; line-height: 1.2;\"><span style=\"font-size: 9pt;\"><span style=\"font-family: \'times new roman\', times, serif;\">Suscribimos este pagar&eacute; en la Ciudad de Cali a los ({{fecha_actual_dia}}) d&iacute;as del mes de {{fecha_actual_mes}} del a&ntilde;o {{fecha_actual_anio}}, al COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS, para hacerlo negociable. </span></span></p>\n<p style=\"text-align: justify; line-height: 1.2;\"><span style=\"font-size: 9pt;\"><span style=\"font-family: \'times new roman\', times, serif;\">El presente Pagar&eacute; presta m&eacute;rito ejecutivo por contener una obligaci&oacute;n clara, expresa y actualmente exigible, para las partes de acuerdo al art&iacute;culo 422 del C&oacute;digo General del Proceso.</span></span></p>\n<p style=\"line-height: 1.3;\"><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">&nbsp; &nbsp; &nbsp; &nbsp;_________________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ___________________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FIRMA DEL PADRE o MADRE.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;FIRMA DEL CODEUDOR</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">C.C No. _______________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C.C No. _______________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">Tel&eacute;fono fijo____________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tel&eacute;fono fijo____________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">Tel&eacute;fono celular_________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tel&eacute;fono celular_________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">Dir. Residencia__________________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dir. Residencia_________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">Dir. Trabajo_____________________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dir. Trabajo____________________________________</span><br><span style=\"font-family: \'times new roman\', times, serif; font-size: 10pt;\">Correo Electr&oacute;nico _______________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Correo Electr&oacute;nico ______________________________</span><br><br></p>\n<p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Alba Ximena Guti&eacute;rrez. Santander</span><br><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">C.C. No. 31.854.318 de Cali.</span><br><span style=\"font-size: 9pt; font-family: \'times new roman\', times, serif;\">Directora y representante legal</span><br><span style=\"font-size: 9pt;\"><strong><span style=\"font-family: \'times new roman\', times, serif;\">Colegio Cat&oacute;lico Rosalba Santander SAS.</span></strong></span></p>\n</td>\n<td style=\"border-width: 0px;\">&nbsp;</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>', '2023-08-11 20:19:37', '2023-10-08 06:43:05'),
(3, 'CONTRATO EDUCATIVO', '<table style=\"border-collapse: collapse; width: 100%; border-width: 0px;\" border=\"1\"><colgroup><col style=\"width: 3.04054%;\"><col style=\"width: 93.8063%;\"><col style=\"width: 3.15315%;\"></colgroup>\n<tbody>\n<tr>\n<td style=\"border-width: 0px;\">&nbsp;</td>\n<td style=\"border-width: 0px;\">\n<p>&nbsp;</p>\n<p><span style=\"font-size: 14pt; font-family: verdana, geneva, sans-serif;\">COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER SAS.</span></p>\n<p style=\"text-align: left; line-height: 1.5;\"><span style=\"font-size: 8pt;\"><span style=\"font-family: helvetica, arial, sans-serif;\"><strong>CONTRATO DE MATR&Iacute;CULA Y SERVICIOS EDUCATIVOS.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;CONTRATO No</strong><strong>.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong></span><span style=\"font-family: helvetica, arial, sans-serif;\"><strong>A&Ntilde;O LECTIVO 2023 &ndash; 2024.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FECHA:</strong></span></span></p>\n<p style=\"text-align: justify;\"><span style=\"font-family: helvetica, arial, sans-serif; font-size: 9pt;\">Entre nosotros, Alba Ximena Guti&eacute;rrez Santander, identificada con la c&eacute;dula de ciudadan&iacute;a n&uacute;mero 31&rsquo;854.318 expedida en Santiago de Cali, obrando en la calidad de Directora del Colegio Cat&oacute;lico Rosalba Santander, Instituci&oacute;n de car&aacute;cter privado, debidamente aprobado seg&uacute;n Reconocimiento Oficial 4143.2.21.3133 de Mayo 12 de 2009 expedido por la Secretaria de Educaci&oacute;n Municipal, con domicilio en la ciudad de Santiago de Cali, en la Carrera 49 No. 9B &ndash; 42 quien para efectos de Ley se denominar&aacute; el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER y<br></span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Yo (Nosotros),&nbsp;<span style=\"text-decoration: underline;\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{acudiente_nombre}}&nbsp; &nbsp; &nbsp; &nbsp; </span>&nbsp;Padre(s) o Acudiente, Representante(s) legal(es) del estudiante:<span style=\"text-decoration: underline;\">&nbsp; &nbsp; &nbsp; {{estudiante_nombre}}&nbsp; &nbsp; </span>&nbsp;</span><span style=\"font-family: helvetica, arial, sans-serif; font-size: 9pt;\">Identificado con NUIP N&deg;___________________________ de ______________ Del grado <span style=\"text-decoration: underline;\">{{estudiante_grado}} </span>, mayores de edad, vecinos y residentes en Cali e identificados como aparece al pie de nuestras firmas, quienes se denominar&aacute;n los PADRES DE FAMILIA, hemos convenido firmar el presente contrato de prestaci&oacute;n de servicios escolares, el cual se regir&aacute; por las siguientes cl&aacute;usulas:</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA PRIMERA:</strong> LOS PADRES DE FAMILIA entienden que la presente matr&iacute;cula es entendida como Contrato de Prestaci&oacute;n de Servicios Docentes, regulado por el art&iacute;culo 68 de la Constituci&oacute;n Nacional de Colombia, mediante Decreto No<br>. 2737 de 1989, los art&iacute;culos 311, 312, 2144 del C&oacute;digo de Comercio, el art&iacute;culo 201 de la Ley 115 de 1994, el C&oacute;digo del Menor y las dem&aacute;s normas que determinan la materia educativa entre EL COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER Y LOS PADRES DE FAMILIA, por el a&ntilde;o lectivo 2023 &ndash; 2024 que va desde el 1 de Septiembre de 2023 hasta el 30 de Junio de 2024.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA SEGUNDA:</strong> El COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER se compromete durante el per&iacute;odo referido a prestar sus servicios educativos seg&uacute;n el Proyecto Educativo Institucional y a cumplir las mencionadas disposiciones de las autoridades educativas competentes y se sujeta en un todo a las disposiciones nacionales o departamentales en materia de Educaci&oacute;n por medios electr&oacute;nicos si fuere el caso.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA TERCERA:</strong> Los PADRES DE FAMILIA conjuntamente con su hijo(a) o acudido(a), optan libremente por el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER y asumen integralmente sus principios formativos y aceptan la normativa del Manual de Convivencia con todas sus implicaciones y compromisos, con la sola firma del presente contrato. Par&aacute;grafo: El Manual de Convivencia se encuentra dispuesto en la p&aacute;gina web del Colegio Cat&oacute;lico Rosalba Santander a trav&eacute;s del link http://colegiocatolicocali.edu.co/manual-deconvivencia/#</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA CUATRO:</strong> Los PADRES DE FAMILIA se comprometen a lo siguiente:</span></p>\n<p style=\"text-align: justify; padding-left: 40px;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">&bull; &nbsp; &nbsp; &nbsp;A cumplir con el pago de la mensualidad los primeros cinco d&iacute;as de cada mes. El pago retrasado o incumplido, causar&aacute; intereses de mora liquidados a la tasa que fije el Banco de la Rep&uacute;blica.<br>&bull;&nbsp; &nbsp; &nbsp; Asumir todos los costos adicionales a la educaci&oacute;n tales como Salidas Pedag&oacute;gicas, Navidad en Familia, D&iacute;a de la Familia etc.&nbsp;<br>&bull; &nbsp; &nbsp; &nbsp;Suministrar a su hijo(a) o acudido(a), lo elementos y recursos necesarios para su educaci&oacute;n. <br>&bull; &nbsp; &nbsp; &nbsp;Responder positivamente y con presteza a las citaciones que el COLEGIO solicite.&nbsp;<br>&bull; &nbsp; &nbsp; &nbsp;Asistir obligatoriamente de forma presencial o virtual a las reuniones de Padres de Familia, a citaciones que le haga el COLEGIO SANTANDER y a la Escuela de Padres de Familia. <br>&bull; &nbsp; &nbsp; &nbsp;Atender los llamados que requiera el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER de manera oportuna. Colaborar con todo el proceso formativo.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA QUINTA: Los PADRES DE FAMILIA reconocen que el costo educativo aprobado por EL COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER se ajustan a la Ley mediante el Decreto 3149 del 20 de Diciembre de 2002 y que en el caso de nuestro(a) hijo(a) o acudido(a) tiene un valor de <strong id=\"docs-internal-guid-f85d399a-7fff-a030-cdea-ed3dd239c6f8\">{{valor_matricula_letras}}</strong> Mcte. ($<strong id=\"docs-internal-guid-f85d399a-7fff-a030-cdea-ed3dd239c6f8\">{{valor_matricula}}</strong>), suma que los PADRES DE FAMILIA O ACUDIENTE se comprometer&aacute;n a pagar puntualmente, de manera solidaria e incondicionalmente al Colegio a su orden o a quien represente sus derechos as&iacute;:</strong></span></p>\n<p style=\"text-align: justify; line-height: 1;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>&bull; <strong id=\"docs-internal-guid-f85d399a-7fff-a030-cdea-ed3dd239c6f8\">Matricula: ____________________________________________________ Pesos Mcte ($___________&deg;&deg;) a la firma del presente contrato. {{total_pensiones_letras}} ({{total_pensiones}}) pensiones mensuales de {{mensualidad_letras}}&nbsp;PESOS (${{mensualidad}}&deg;&deg;) pagaderos dentro de los primeros cinco d&iacute;as de cada mes hasta la terminaci&oacute;n del presente contrato.</strong></strong></span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA SEXTA:&nbsp;</strong>El COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER pone a disposici&oacute;n de los PADRES DE FAMILIA los siguientes medios de pagos: pago en l&iacute;nea a trav&eacute;s de la plataforma web del Colegio Cat&oacute;lico Rosalba Santander https://pasareladepagos.colegiocatolicocali.edu.co/, consignaci&oacute;n en cuenta bancaria definida por el colegio o por datafono con tarjeta d&eacute;bito o cr&eacute;dito directamente en el colegio.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA S&Eacute;PTIMA:&nbsp;</strong>Los PADRES DE FAMILIA o ACUDIENTE aceptan y reconocen que incurren en una acumulaci&oacute;n de pensiones cuando se ha dejado de cancelar la misma despu&eacute;s de un (1) mes.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><strong>CL&Aacute;USULA OCTAVA:&nbsp;</strong>En caso de mora en el pago de una (1) o varias cuotas o de pago con cheques no corrientes, los PADRES DE FAMILIA o ACUDIENTE, pagar&aacute;n intereses moratorios a la tasa m&aacute;xima legal permitida, liquidados sobre las cuotas pactadas y adeudadas sin perjuicio de las acciones legales que el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER pueda adelantar para el cobro judicial o extrajudicial de la obligaci&oacute;n, caso en el cual ser&aacute; de cargo exclusivo de los PADRES DE FAMILIA seg&uacute;n lo dispuesto en el art&iacute;culo 731 del C&oacute;digo de Comercio, incurriendo en el pago de la sanci&oacute;n del 20% establecida en el C&oacute;digo de Comercio.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Los gastos y los costos de la cobranza incluyendo los honorarios del Abogado a quien se conf&iacute;en las gestiones del cobro, que en la etapa pre-jur&iacute;dica ser&aacute;n los establecidos en la tarifa de honorarios profesionales del Colegio Nacional de Abogados (CONALBOS) y en la etapa de cobro jur&iacute;dico ser&aacute;n los liquidados por el respectivo juzgado que conozca del proceso.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">PAR&Aacute;GRAFO: La acumulaci&oacute;n de dos o varias pensiones sin cancelar, dar&aacute; lugar a que el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER exija el pago del valor adeudado por v&iacute;a ejecutiva, sin necesidad de hacer los requerimientos y constituciones en mora previstos en la ley, a los cuales las partes contratantes renuncian seg&uacute;n esta cl&aacute;usula agotando antes la instancia de cobro pre jur&iacute;dico y con la sola firma del presente contrato.<br>Los PADRES DE FAMILIA autorizan al COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER o a quien &eacute;ste determine a consultar y a reportar su situaci&oacute;n crediticia a las Centrales de Riesgo existentes, oblig&aacute;ndose a mantener la confidencialidad de Ley.<br><strong>CL&Aacute;USULA NOVENA:</strong> Los PADRES DE FAMILIA aceptan que la no cancelaci&oacute;n de la totalidad de los pagos por concepto de la educaci&oacute;n de nuestro(a) hijo(a) o acudido(a), o el incumplimiento de las condiciones estipuladas en este contrato o en el manual o la falsedad de la informaci&oacute;n suministrada para perfeccionar este contrato, dar&aacute; derecho al COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER para no celebrar un nuevo contrato de prestaci&oacute;n de servicios educativos para el siguiente a&ntilde;o lectivo.<br><strong>CL&Aacute;USULA DECIMA: </strong>Los PADRES DE FAMILIA o ACUDIENTE reconociendo la libertad del COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER y de acuerdo a la misma, aceptan que la instituci&oacute;n podr&aacute; endosar o transferir el cobro del contrato de matr&iacute;cula y servicios educativos, despu&eacute;s de haber sido aceptada por los PADRES DE FAMILIA, ACUDIENTE o beneficiario del bien o servicio. PAR&Aacute;GRAFO: El COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER informar&aacute; tres (3) d&iacute;as antes de su vencimiento para el pago y el leg&iacute;timo tenedor del contrato de matr&iacute;cula y servicios educativos informar&aacute; de su tenencia a los PADRES DE FAMILIA, ACUDIENTE o beneficiario del bien o servicio.<br><strong>CL&Aacute;USULA DECIMO PRIMERA:</strong> El presente contrato podr&aacute; ser terminado de manera unilateral por parte de los PADRES DE FAMILIA o ACUDIENTES del/la alumno(a) previo aviso escrito al COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER con una antelaci&oacute;n no inferior a treinta d&iacute;as (30) y previa obtenci&oacute;n del paz y salvo correspondiente. El COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER por su parte lo podr&aacute; dar por terminado siempre y cuando medie justa causa en los t&eacute;rminos del MANUAL DE CONVIVENCIA que obra en la plataforma web del Colegio Cat&oacute;lico Rosalba Santander; de igual manera el contrato podr&aacute; terminarse por mutuo acuerdo entre las partes contratantes. En caso de terminaci&oacute;n del contrato, bajo ninguna circunstancia el colegio har&aacute; devoluci&oacute;n de pagos derivados del presente contrato.<br><strong>CL&Aacute;USULA DECIMO SEGUNDA:</strong> Para la permanencia de sus alumnos, el COLEGIO CAT&Oacute;LICO ROSALBA SANTANDER le exige a ellos y a sus padres o acudientes, actitud positiva y colaboradora. Buen rendimiento acad&eacute;mico y participaci&oacute;n obligatoria en toda actividad que el colegio programe, tales como: Entrega de boletines, Escuela de padres, Talleres de crecimiento personal, Noche de navidad, citas a padres o acudiente(s) y d&iacute;a de la familia.<br>ESTIPULACION ESPECIAL.- Los hijos son el compromiso primordial, afectivo, educativo, econ&oacute;mico, etc. por parte de los Padres o acudiente (s). Este compromiso no admite disculpas ni delegaciones.<br><strong>CL&Aacute;USULA DECIMO TERCERA:</strong> El presente documento presta merito ejecutivo para las partes a partir de su firma al tenor del art&iacute;culo 422 del C&oacute;digo General del Proceso y el art&iacute;culo 14 par. 6 del Decreto 2542 de 1991.<br>Para constancia se firma en la ciudad de Santiago de Cali a los {{fecha_actual_dia}} d&iacute;as del mes {{fecha_actual_mes}} del a&ntilde;o {{fecha_actual_anio}} .</span></p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">&nbsp;_________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;____________________________________<br></span><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">FIRMA DEL PADRE o MADRE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FIRMA DEL CODEUDOR</span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"> _________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ____________________________________ </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">C&eacute;dula de Ciudadan&iacute;a. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C&eacute;dula de Ciudadan&iacute;a.</span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">&nbsp;_________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;____________________________________ </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Dir. Residencia. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dir. Residencia. </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">_________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ____________________________________&nbsp;</span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Tel&eacute;fonos &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tel&eacute;fonos </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">_______________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">____________________________________ </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Dir. Trabajo. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dir. Trabajo.&nbsp;</span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">_________________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ____________________________________ </span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Tel&eacute;fonos. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tel&eacute;fonos.&nbsp;</span></p>\n<p><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>Correo Electr&oacute;nico _______________________________&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">Correo Electr&oacute;nico _______________________________</span></p>\n<p style=\"text-align: center;\"><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\"><br>&nbsp;____________________________________<br></span><span style=\"font-size: 9pt; font-family: helvetica, arial, sans-serif;\">&nbsp;Alba Ximena Guti&eacute;rrez Santander<br>Directora Colegio Cat&oacute;lico Rosalba Santander<br>C.C. No. 31&rsquo;854.318 de Cali.</span></p>\n</td>\n<td style=\"border-width: 0px;\">&nbsp;</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p>&nbsp;</p>', '2023-08-11 20:55:12', '2024-01-29 06:42:53'),
(8, 'Soporte de Pago', '<table style=\"border-collapse: collapse; width: 100%; border-width: 0px; height: 138.938px;\" border=\"1\"><colgroup><col style=\"width: 35.4885%;\"><col style=\"width: 33.1897%;\"><col style=\"width: 31.3218%;\"></colgroup>\n<tbody>\n<tr style=\"height: 138.938px;\">\n<td style=\"border-width: 0px; height: 138.938px;\">\n<p><strong style=\"font-size: 24px;\"><span style=\"color: rgb(13, 110, 253); font-family: \'times new roman\', times, serif;\">Recibo de pago</span></strong></p>\n<p style=\"line-height: 1;\"><span style=\"color: rgb(0, 0, 0); font-size: 14pt;\"><strong><span style=\"font-family: \'times new roman\', times, serif;\">Colegio Cat&oacute;lico Cali</span></strong></span></p>\n<p style=\"line-height: 1;\"><span style=\"color: rgb(0, 0, 0); font-size: 14pt;\"><strong><span style=\"font-family: \'times new roman\', times, serif;\">Nit. 31.854.318-4</span></strong></span></p>\n</td>\n<td style=\"border-width: 0px; height: 138.938px;\">&nbsp;</td>\n<td style=\"border-width: 0px; height: 138.938px;\">\n<p><span style=\"color: rgb(0, 0, 0); font-size: 14pt;\"><strong><span style=\"font-family: \'times new roman\', times, serif;\">Ref. Pago: {{paymentCode}}</span></strong></span></p>\n<p><span style=\"color: rgb(0, 0, 0); font-size: 14pt;\"><span style=\"font-family: \'times new roman\', times, serif;\"><span style=\"font-family: arial, helvetica, sans-serif;\">Fecha:{{fecha_actual}}&nbsp;</span></span></span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<table style=\"border-collapse: collapse; width: 100%; border-width: 0px;\" border=\"1\"><colgroup><col style=\"width: 35.3448%;\"><col style=\"width: 64.6552%;\"></colgroup>\n<tbody>\n<tr>\n<td style=\"border-width: 0px;\">\n<p>&nbsp;</p>\n<p><img src=\"https://colegiocatolicocali.edu.co/wp-content/uploads/2020/09/logo-2.png\" alt=\"\" width=\"170\" height=\"275\"></p>\n</td>\n<td style=\"border-width: 0px;\">\n<p><strong style=\"font-size: 24px;\"><span style=\"color: rgb(13, 110, 253); font-family: \'times new roman\', times, serif;\">Nombre: {{acudiente_nombre}}</span></strong></p>\n<p style=\"line-height: 1;\"><strong><span style=\"font-family: arial, helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">Grado:</span></strong></p>\n<p style=\"line-height: 1;\"><strong><span style=\"font-family: arial, helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">Email:</span></strong></p>\n<p style=\"line-height: 1;\"><strong><span style=\"font-family: arial, helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">Concepto: {{soporte_pago_concepto}}</span></strong></p>\n<p style=\"line-height: 1;\"><strong><span style=\"font-family: arial, helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">Total Pagado: {{soporte_pago_monto}}</span></strong></p>\n<p>&nbsp;</p>\n</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>', '2024-02-01 09:59:04', '2024-02-01 20:14:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentosMatriculas`
--

CREATE TABLE `documentosMatriculas` (
  `id` int NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `canViewType` varchar(255) DEFAULT NULL,
  `documentoid` int DEFAULT NULL,
  `canViewValue` varchar(255) DEFAULT NULL,
  `canViewTuitionType` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `documentosMatriculas`
--

INSERT INTO `documentosMatriculas` (`id`, `isActive`, `createdAt`, `updatedAt`, `title`, `canViewType`, `documentoid`, `canViewValue`, `canViewTuitionType`) VALUES
(1, 1, '2024-02-19 03:04:38', '2024-02-21 13:25:22', 'ACTA DE CORRESPONSABILIDAD', 'all', 1, NULL, 'all'),
(2, 1, '2024-02-19 03:25:20', '2024-03-08 14:04:00', 'PAGARÉ GR 1°', 'grade', 2, '1', 'extraordinaria'),
(3, 1, '2024-02-19 03:42:41', '2024-02-29 15:21:45', 'CONTRATO EDUCATIVO', 'grade', 3, '3', 'ordinaria'),
(4, 1, '2024-03-08 14:04:31', '2024-03-08 16:35:38', 'PAGARÉ GR 2° MATRICULA ANTICIPADA', 'grade', 2, '2', 'extraordinaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `grado` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `expedicion` varchar(255) DEFAULT NULL,
  `lugarNacimiento` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `edad` double DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `tipoDireccion` varchar(255) DEFAULT NULL,
  `barrio` varchar(255) DEFAULT NULL,
  `estrato` double DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `tipoCupo` varchar(255) DEFAULT NULL,
  `viveCon` varchar(255) DEFAULT NULL,
  `estadoEstudiante` varchar(255) DEFAULT 'Aspirante',
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idGrade` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `codigo`, `grado`, `nombres`, `apellidos`, `tipoDocumento`, `identificacion`, `expedicion`, `lugarNacimiento`, `fechaNacimiento`, `edad`, `direccion`, `tipoDireccion`, `barrio`, `estrato`, `telefono`, `correo`, `tipoCupo`, `viveCon`, `estadoEstudiante`, `isActive`, `createdAt`, `updatedAt`, `idGrade`) VALUES
(1, '23001', '7', 'Julian', 'Cruz', 'TI', '100077777', '10-05-2010', 'bogtá', '2015-05-10 00:00:00', 13, 'Carrera 123', 'dfasfaf', 'Cedritos', 5, '3214180122', 'julian@gmail.com', '1', 'Papa', 'Inscrito', 0, '2023-05-10 20:00:00', '2023-10-10 19:04:04', 3),
(2, '23002', '3', 'Andres', 'Santiago', 'TI', '100033333', '10-08-2017', 'Bogotá', '2015-05-10 20:00:00', 6, 'Carrera 123', NULL, 'Cedritos', 5, '3000123123', 'andres@gmail.com', '1', 'Padres', 'Matriculado', 1, '2023-06-10 20:00:00', '2023-06-10 20:00:00', 4),
(3, '23003', '3', 'Sergio', 'Romero', 'TI', '122220000', '10-08-2017', 'Bogotá', '2015-05-10 20:00:00', 6, 'Carrera 123', NULL, 'Cedritos', 5, '3000123122', 'sergiogod21@gmail.com', '1', 'Padres', 'Graduado', 1, '2023-06-10 20:00:00', '2023-06-10 20:00:00', 4),
(4, '23004', '7', 'MARIA ', 'MARIN', 'CEDULA', '31313131', 'CALI', 'CALI', '2023-12-23 00:00:00', 15, 'cra 49 9b 42', 'A', 'A', 1, '3012395621', 'DIDID@colegiocatolicocali.edu.co', 'CUARTO', NULL, 'Graduado', 1, '2023-10-10 21:13:02', '2023-10-12 21:32:28', 3),
(5, '23005', '7', 'ISABEL', 'RIVERA', 'CEDULA', '111111111', 'CALI', 'DFSDFSF', '2012-01-01 00:00:00', 11, 'CR 5', '1', 'C', 3, '222222222', 'M@GMAIL.COM', '6', NULL, 'Inscrito', 1, '2023-10-11 21:25:44', '2023-10-11 21:44:55', 3),
(6, '23006', '7', 'adasda', 'adsasdasd', 'RC', 'adsadad', '2023-10-16', 'adada', '2023-10-16 00:00:00', 2, 'asdasd', 'asdasdasd', 'asdasd', 2, '1231312313', 'adadadasda', 'adasdasd', NULL, 'Inscrito', 1, '2023-10-17 04:24:38', '2024-03-09 16:42:55', 3),
(7, '23007', '7', 'owcandojcwnas', 'qlcbouwc', 'TI', '1005479634', '2021-06-10', 'San Gil', '2023-11-01 00:00:00', 4, 'calle 2b#12b-24', 'CASA 1', 'SIONCWIN', 3, '31315136747', 'kbWSLKNELN', 'CUARTO', NULL, 'Inscrito', 1, '2023-11-16 15:04:19', '2024-05-24 00:57:17', 3),
(8, '23008', '7', '', '', '', '', '', '', '0000-00-00 00:00:00', 0, '', '', '', 0, '', '', '', NULL, 'Aspirante', 1, '2024-01-13 01:36:47', '2024-01-13 01:36:47', 3),
(9, '23009', '7', 'adasd', 'asdasd', 'RC', 'adasd', '2024-01-05', 'adsad', '2024-01-12 00:00:00', 13123, 'dassda', 'adasdas', 'dad', 123, '1313', 'adadad@gmail.com', 'adasdasd', NULL, 'Inscrito', 1, '2024-01-25 08:52:19', '2024-03-09 16:42:47', 3),
(10, '24010', '7', 'asdasda', 'dasdsad', 'RC', 'adsas', '2024-01-19', 'asdasd', '2024-01-11 00:00:00', 123, 'asdasda', 'adssad', 'asdasda', 23, '121312', 'asdadads@hgmadas', 'dasada', NULL, 'Aspirante', 1, '2024-01-27 03:32:45', '2024-01-27 03:32:45', 3),
(11, '24011', '7', 'Samuel Andres', 'Rodriguez Acosta', 'CC', '1005479634', '2019-02-07', 'Sangil', '2012-02-03 00:00:00', 45, 'calle 2b#12b-24', 'casa 3', 'ojcnwoun', 4, '3112363374', 'samuel@tecnopac.com.co', 'Sexto', NULL, 'Aspirante', 1, '2024-02-01 21:38:26', '2024-02-01 21:38:26', 3),
(12, '24012', '7', 'Andres ', 'Sexto', 'TI', '100003000', '2024-02-20', 'ssfd', '2016-01-06 00:00:00', 9, 'asdasd', 'ada', 'adasd', 2, '12313', 'asdadasd@gmail.com', 'Sexto', NULL, 'Aspirante', 1, '2024-02-20 10:33:11', '2024-02-20 10:33:11', 3),
(13, '24013', NULL, 'Andres', 'Test Final', 'RC', '1000390359', '2024-02-07', 'Bogota', '2000-04-07 00:00:00', 24, 'Carrera 123', 'Cada', 'Bosa', 2, '3214180122', 'andresfelipebs@outlook.com', 'Admision', NULL, 'Aspirante', 1, '2024-02-20 11:09:50', '2024-02-20 11:09:50', NULL),
(14, '24014', NULL, 'Andres', 'Test Final', 'RC', '1000390359', '2024-02-07', 'Bogota', '2000-04-07 00:00:00', 24, 'Carrera 123', 'Cada', 'Bosa', 2, '3214180122', 'andresfelipebs@outlook.com', 'Admision', NULL, 'Inscrito', 1, '2024-02-20 11:10:30', '2024-05-21 16:53:23', NULL),
(15, '240015', NULL, 'Andres ', 'PRUEBA martes', 'RC', '1000000', '2024-02-22', 'Bogota', '2024-02-22 00:00:00', 12, 'Carrera 123', 'Casa', 'Bosconia', 2, '1231231', 'andres@gmail.com', '2', NULL, 'Rechazado', 1, '2024-02-21 05:27:23', '2024-02-22 14:35:13', NULL),
(16, '240016', NULL, 'ISABEL', 'GOMEZ', 'TI', '1111111111', '2019-08-23', 'CALI', '2012-08-23 00:00:00', 11, 'CL 18A 56 20', '218 E', 'CAÑAVERALES', 3, '11111111', '11111@GMAIL.COM', '7', NULL, 'Inscrito', 1, '2024-02-22 15:08:41', '2024-02-22 15:22:06', NULL),
(17, '24017', '', 'Jesus', 'Prueba', 'RC', '10aaaa', '2024-05-22', 'Area 51', '2024-05-23 00:00:00', 12, 'Aa', 'jjj', 'Acaca', 1000, '3', 'lkllk@a.com', 'sasasa', NULL, 'Inscrito', 1, '2024-05-10 16:36:17', '2024-05-10 19:36:35', NULL),
(18, '24018', '', 'Jesus', 'De Avila', 'TI', '1002003040', '2018-07-20', 'Cartagena', '2008-06-20 00:00:00', 15, 'Mi Casa', 'Casa 1', 'Urbanización mi Casa', 3, '3004005060', 'mail@mail.com', '11', NULL, 'Inscrito', 1, '2024-05-14 01:53:05', '2024-05-21 16:40:42', NULL),
(19, '24018', '', 'Jesus', 'De Avila', 'TI', '1002003040', '2018-07-20', 'Cartagena', '2008-06-20 00:00:00', 15, 'Mi Casa', 'Casa 1', 'Urbanización mi Casa', 3, '3004005060', 'mail@mail.com', '11', NULL, 'Inscrito', 1, '2024-05-14 02:00:31', '2024-05-21 16:48:51', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `extracurricularInscriptions`
--

CREATE TABLE `extracurricularInscriptions` (
  `id` int NOT NULL,
  `monto` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `idEstudiante` int DEFAULT NULL,
  `idExtracurricular` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `extracurricularInscriptions`
--

INSERT INTO `extracurricularInscriptions` (`id`, `monto`, `metodoPago`, `createdAt`, `updatedAt`, `isActive`, `idEstudiante`, `idExtracurricular`) VALUES
(1, '5656', 'Avalpay', '2023-06-08 05:29:27', '2024-01-29 09:53:19', 0, 1, NULL),
(2, '120000', 'Bolsillo', '2023-06-08 05:29:27', '2024-01-29 09:53:19', 0, 1, NULL),
(3, '120000', 'Avalpay', '2024-01-29 09:31:34', '2024-01-29 10:08:57', 0, 1, NULL),
(4, '120000', 'Avalpay', '2024-01-29 09:31:51', '2024-01-29 10:09:03', 0, 1, NULL),
(5, '120000', 'Avalpay', '2024-01-29 09:33:53', '2024-01-29 10:09:16', 0, 1, NULL),
(6, '120000', 'Bolsillo', '2024-01-29 09:35:45', '2024-01-29 09:47:35', 0, 1, NULL),
(7, '120000', 'Bolsillo', '2024-01-29 09:36:06', '2024-01-29 09:47:35', 0, 1, NULL),
(8, '120000', 'bolsillo', '2024-01-29 09:36:28', '2024-01-29 09:47:35', 0, 1, NULL),
(9, '120000', 'bolsillo', '2024-01-29 09:43:26', '2024-01-29 09:47:35', 0, 1, NULL),
(10, '120000', 'bolsillo', '2024-01-29 09:45:30', '2024-01-29 09:47:35', 0, 1, NULL),
(11, '5656', 'bolsillo', '2024-01-29 10:02:01', '2024-01-29 10:11:49', 0, 1, NULL),
(12, '120000', 'bolsillo', '2024-01-29 10:12:06', '2024-01-29 10:12:17', 0, 1, NULL),
(13, '120000', 'bolsillo', '2024-01-31 03:41:47', '2024-01-31 03:42:47', 0, 1, NULL),
(14, '5656', 'bolsillo', '2024-01-31 03:42:14', '2024-01-31 03:43:18', 0, 1, NULL),
(15, '120000', 'bolsillo', '2024-01-31 03:43:01', '2024-01-31 03:43:18', 0, 1, NULL),
(16, '120000', 'bolsillo', '2024-01-31 03:43:32', '2024-02-02 13:58:12', 0, 1, NULL),
(17, '5656', 'bolsillo', '2024-02-02 13:57:44', '2024-02-02 13:58:12', 0, 1, NULL),
(18, '120000', 'bolsillo', '2024-02-02 13:58:31', '2024-02-02 13:58:36', 0, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `extraCurriculars`
--

CREATE TABLE `extraCurriculars` (
  `id` int NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `finalDate` datetime DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `information` varchar(255) DEFAULT NULL,
  `schedule` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idTeacher` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `extraCurriculars`
--

INSERT INTO `extraCurriculars` (`id`, `imagen`, `activity`, `startDate`, `finalDate`, `price`, `information`, `schedule`, `isActive`, `createdAt`, `updatedAt`, `idTeacher`) VALUES
(1, 'https://cdn.gohenry.com/blog/articles/1659600444139@extracurricularcosts.png', 'Mi actividad', '2024-02-19 00:00:00', '2024-02-11 00:00:00', 70000, 'Actividad', 'Actividad', 1, '2024-02-20 02:42:47', '2024-02-20 03:04:20', 2),
(2, 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png', 'Mi actividad', '2024-02-19 00:00:00', '2024-02-19 00:00:00', 20000, 'Actividad', 'Actividad', 1, '2024-02-20 02:43:37', '2024-02-20 02:43:37', 2),
(3, 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png', 'Curso de Astronomía', '2024-02-19 00:00:00', '2024-02-22 00:00:00', 7777, 'Actividad', 'Actividad', 1, '2024-02-20 02:57:45', '2024-02-20 02:58:36', 3),
(4, 'https://helpfulprofessor.com/wp-content/uploads/2022/11/cocurricular-activities-examples-definition-1024x724.jpg', 'Mi actividad', '2024-02-20 00:00:00', '2024-02-21 00:00:00', 200000, 'Actividad', 'Actividad', 1, '2024-02-21 04:58:03', '2024-02-21 04:58:42', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grades`
--

CREATE TABLE `grades` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grades`
--

INSERT INTO `grades` (`id`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, '1', 1, '2022-11-01 09:21:19', '2022-11-01 09:21:22'),
(2, '2', 1, '2022-11-01 09:21:33', '2022-11-01 09:21:36'),
(3, '7', 1, '2022-11-01 09:21:33', '2022-11-01 09:21:33'),
(4, '3', 1, '2022-11-01 09:21:33', '2022-11-01 09:21:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hermanos`
--

CREATE TABLE `hermanos` (
  `id` int NOT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `nivelEstudio` varchar(255) DEFAULT NULL,
  `institucion` varchar(255) DEFAULT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hermanos`
--

INSERT INTO `hermanos` (`id`, `nombres`, `isActive`, `createdAt`, `updatedAt`, `apellidos`, `nivelEstudio`, `institucion`, `idEstudiante`) VALUES
(1, 'dfgdfgd', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', '', '', '', 4),
(2, 'ISA', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', '', 'BCHILL', 'COL CAT', 5),
(3, 'wosvnsowendoie', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', '', 'wdlkcnwoein', 'kjcwbcebc', 7),
(4, 'WPIENPIW', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', '', 'WEPIWNEIOP', 'WENWPICN', 11),
(5, 'WPNCWPIN', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 'EWLJNEWOI', 'WOICNWOI', 'WLJOCBOUE', 11),
(6, '40506080', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', '90807060', 'La escuela de la vida', 'La universidad de la calle', 18),
(7, '40506080', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', '90807060', 'La escuela de la vida', 'La universidad de la calle', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `histBachilleratos`
--

CREATE TABLE `histBachilleratos` (
  `id` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `gradoCursadoBachillerato6` tinyint(1) DEFAULT NULL,
  `gradoCursadoBachillerato7` tinyint(1) DEFAULT NULL,
  `gradoCursadoBachillerato8` tinyint(1) DEFAULT NULL,
  `idEstudiante` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `histBachilleratos`
--

INSERT INTO `histBachilleratos` (`id`, `nombre`, `gradoCursadoBachillerato6`, `gradoCursadoBachillerato7`, `gradoCursadoBachillerato8`, `idEstudiante`, `createdAt`, `updatedAt`) VALUES
(1, ' ', 0, 0, 0, NULL, '2024-02-21 05:27:23', '2024-02-21 05:27:23'),
(2, 'COLEGIO LACORDAIRE', 1, 0, 0, NULL, '2024-02-22 15:08:41', '2024-02-22 15:08:41'),
(3, 's', 0, 0, 0, NULL, '2024-05-10 16:36:17', '2024-05-10 16:36:17'),
(4, 'Institución Educativa Mi Bachillerato ', 1, 1, 1, NULL, '2024-05-14 01:53:05', '2024-05-14 01:53:05'),
(5, 'Institución Educativa Mi Bachillerato ', 1, 1, 1, NULL, '2024-05-14 02:00:31', '2024-05-14 02:00:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historialAcademicos`
--

CREATE TABLE `historialAcademicos` (
  `id` int NOT NULL,
  `anioAnterior` varchar(255) DEFAULT NULL,
  `motivoRetiro` varchar(255) DEFAULT NULL,
  `repeticionAnio` varchar(255) DEFAULT NULL,
  `distincionAcademica` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historialAcademicos`
--

INSERT INTO `historialAcademicos` (`id`, `anioAnterior`, `motivoRetiro`, `repeticionAnio`, `distincionAcademica`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, 'SEXTO', 'VIAJE', 'NO', 'NO', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 11),
(2, ' ', ' ', ' ', ' ', 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 15),
(3, 'COLEGIO LACORDAIRE', 'COSTOS', 'NO', 'EXCELENCIA', 1, '2024-02-22 15:08:41', '2024-02-22 15:08:41', 16),
(4, 'ss', 'ss', 'ss', 'ss4', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 17),
(5, 'Institución Educativa Mi Bachillerato', 'Cambiamos de ciudad', 'Noooo', 'Nooooo', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 18),
(6, 'Institución Educativa Mi Bachillerato', 'Cambiamos de ciudad', 'Noooo', 'Nooooo', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `histPreescolars`
--

CREATE TABLE `histPreescolars` (
  `id` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `gradoCursadoPreescolar` tinyint(1) DEFAULT NULL,
  `gradoCursadoJardin` tinyint(1) DEFAULT NULL,
  `gradoCursadoTransicion` tinyint(1) DEFAULT NULL,
  `idEstudiante` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `histPreescolars`
--

INSERT INTO `histPreescolars` (`id`, `nombre`, `gradoCursadoPreescolar`, `gradoCursadoJardin`, `gradoCursadoTransicion`, `idEstudiante`, `createdAt`, `updatedAt`) VALUES
(1, ' ', 0, 0, 0, NULL, '2024-02-21 05:27:23', '2024-02-21 05:27:23'),
(2, 'COLEGIO MONTFERRI', 1, 1, 0, NULL, '2024-02-22 15:08:41', '2024-02-22 15:08:41'),
(3, 'w', 0, 0, 0, NULL, '2024-05-10 16:36:17', '2024-05-10 16:36:17'),
(4, 'ddda', 0, 0, 0, NULL, '2024-05-10 16:36:17', '2024-05-10 16:36:17'),
(5, 'Instituto Mi Primera Escuela', 1, 1, 1, NULL, '2024-05-14 01:53:05', '2024-05-14 01:53:05'),
(6, 'Instituto Mi Primera Escuela', 1, 1, 1, NULL, '2024-05-14 02:00:31', '2024-05-14 02:00:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `histPrimaria`
--

CREATE TABLE `histPrimaria` (
  `id` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `gradoCursadoPrimaria1` tinyint(1) DEFAULT NULL,
  `gradoCursadoPrimaria2` tinyint(1) DEFAULT NULL,
  `gradoCursadoPrimaria3` tinyint(1) DEFAULT NULL,
  `gradoCursadoPrimaria4` tinyint(1) DEFAULT NULL,
  `gradoCursadoPrimaria5` tinyint(1) DEFAULT NULL,
  `idEstudiante` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `histPrimaria`
--

INSERT INTO `histPrimaria` (`id`, `nombre`, `gradoCursadoPrimaria1`, `gradoCursadoPrimaria2`, `gradoCursadoPrimaria3`, `gradoCursadoPrimaria4`, `gradoCursadoPrimaria5`, `idEstudiante`, `createdAt`, `updatedAt`) VALUES
(1, ' ', 0, 0, 0, 0, 0, NULL, '2024-02-21 05:27:23', '2024-02-21 05:27:23'),
(2, 'COLEGIO CATOLICO', 0, 1, 1, 1, 1, NULL, '2024-02-22 15:08:41', '2024-02-22 15:08:41'),
(3, 'COLEGIO LA PRESENTACION', 1, 0, 0, 0, 0, NULL, '2024-02-22 15:08:41', '2024-02-22 15:08:41'),
(4, 's', 0, 0, 0, 0, 0, NULL, '2024-05-10 16:36:17', '2024-05-10 16:36:17'),
(5, 'Institución Educativa Mi primer Colegio', 1, 1, 1, 1, 1, NULL, '2024-05-14 01:53:05', '2024-05-14 01:53:05'),
(6, 'Institución Educativa Mi primer Colegio', 1, 1, 1, 1, 1, NULL, '2024-05-14 02:00:31', '2024-05-14 02:00:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscriptions`
--

CREATE TABLE `inscriptions` (
  `id` int NOT NULL,
  `price` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUser` int DEFAULT NULL,
  `idPeriod` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `levelings`
--

CREATE TABLE `levelings` (
  `id` int NOT NULL,
  `modalidadCurso` varchar(255) DEFAULT NULL,
  `asignatura` varchar(255) DEFAULT NULL,
  `grado` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `estadoAprobado` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matriculasPagos`
--

CREATE TABLE `matriculasPagos` (
  `id` int NOT NULL,
  `monto` double DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `fechaPago` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAcudiente` int DEFAULT NULL,
  `jornada` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `matriculasPagos`
--

INSERT INTO `matriculasPagos` (`id`, `monto`, `metodoPago`, `fechaPago`, `createdAt`, `updatedAt`, `idAcudiente`, `jornada`) VALUES
(3, 927080, 'AvalPay', '2024-02-28', '2024-02-28 09:32:04', '2024-02-28 09:32:04', 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `padreFamilia`
--

CREATE TABLE `padreFamilia` (
  `id` int NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `vive` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `profesion` varchar(255) DEFAULT NULL,
  `dondeTrabaja` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `ingresoMensual` double DEFAULT NULL,
  `correoElectronico` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `parentesco` varchar(255) DEFAULT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `padreFamilia`
--

INSERT INTO `padreFamilia` (`id`, `estado`, `vive`, `tipoDocumento`, `identificacion`, `nombres`, `apellidos`, `profesion`, `dondeTrabaja`, `cargo`, `ingresoMensual`, `correoElectronico`, `direccion`, `telefono`, `celular`, `isActive`, `createdAt`, `updatedAt`, `parentesco`, `idEstudiante`) VALUES
(1, '6', '1', 'CEDULA', '6', '6', '6', '6', '6', '6', 6, '6', '6', '6', '6', 1, '2022-12-15 19:22:42', '2022-12-15 19:22:42', NULL, NULL),
(2, '6', '1', 'CEDULA', '6', '6', '6', '6', '6', '6', 6, '6', '6', '6', '6', 1, '2022-12-15 19:22:42', '2022-12-15 19:22:42', NULL, NULL),
(3, '6', '1', 'CEDULA', '6', '6', '6', '6', '6', '6', 6, '6', '6', '6', '6', 1, '2022-12-15 19:22:50', '2022-12-15 19:22:50', NULL, NULL),
(4, '6', '1', 'CEDULA', '6', '6', '6', '6', '6', '6', 6, '6', '6', '6', '6', 1, '2022-12-15 19:22:50', '2022-12-15 19:22:50', NULL, NULL),
(5, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '', 1, '2022-12-15 19:57:45', '2022-12-15 19:57:45', NULL, NULL),
(6, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '4', 1, '2022-12-15 19:57:45', '2022-12-15 19:57:45', NULL, NULL),
(7, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '', 1, '2022-12-15 19:57:45', '2022-12-15 19:57:45', NULL, NULL),
(8, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '4', 1, '2022-12-15 19:57:45', '2022-12-15 19:57:45', NULL, NULL),
(9, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '4', 1, '2022-12-15 19:58:00', '2022-12-15 19:58:00', NULL, NULL),
(10, '4', '1', 'CEDULA', '4', '4', '4', '4', '4', '4', 4, '4', '4', '4', '4', 1, '2022-12-15 19:58:00', '2022-12-15 19:58:00', NULL, NULL),
(11, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'N/A', 'N/A', '1', '1', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 'Padre', 4),
(12, '1', '1', 'CEDULA', 'sdffsf', 'gsdff', 'sdfsdf', 'sdfsf', 'sdfsdf', 'sdfsdf', 12311, 'fdff@fasd.com', 'sdfsdfsdfsdf', '1313121212', '3333333333', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 'Madre', 4),
(13, '1', '1', 'CEDULA', '22222222', 'PAPA', 'PP', 'ING', 'IND', 'ADMON', 2000000, 'F@GMAIL.COM', 'CR 5', '3111111111', '311111111', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', 'Padre', 5),
(14, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'N/A', 'N/A', '1', '1', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', 'Madre', 5),
(15, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'N/A', 'N/A', '1', '1', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 'Madre', 7),
(16, '1', '1', 'CEDULA', 'kwjdsa ojsd', 'ds.msdlj ', 'wdalkowsde', ' dlondswob nsw', 'sdl nsodwno', 'wdlojcouswne', 5000000, 'samuel@tecnopac.com.co', 'o2einwoneifnweip', '3112364545', '3112363374', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 'Padre', 7),
(17, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-01-25 08:52:20', '2024-01-25 08:52:20', 'Padre', 9),
(18, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-01-25 08:52:20', '2024-01-25 08:52:20', 'Madre', 9),
(19, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 'Padre', 11),
(20, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 'Madre', 11),
(21, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 'Padre', 15),
(22, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 'Madre', 15),
(23, '0', '2', 'NO', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-02-22 15:08:41', '2024-02-22 15:08:41', 'Padre', 16),
(24, '1', '1', 'CEDULA', '383838383', 'ALEJANDRA', 'GUZMAN', 'INDEPENDIENTE', 'INDEPENDIENTE', 'PROPIETARIA', 4000000, '1111@gmail.com', 'cr 23 No 5 - 5', '33333333', '315555555', 1, '2024-02-22 15:08:41', '2024-02-22 15:08:41', 'Madre', 16),
(25, '1', '0', 'CEDULA', 'asass', 'sasas', 'asasas', 'asasa', 'asasas', 'sasas', 10000, 'mail@mail.com', 'aaaaa', '600000', '3000000', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 'Padre', 17),
(26, '0', '2', 'CEDULA', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1, 'email@mail.com', 'N/A', '1', '1', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 'Madre', 17),
(27, '1', '1', 'CEDULA', 'Esto no es una cedula', '4005006070', '4005006070', 'Carpintero', 'Carpintería Gonzales', 'Jefe Carpintero', 1500000, 'mail@mail.com', 'Cali, Mi Barrio', '3004005060', '3004005060', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 'Padre', 18),
(28, '1', '0', 'CEDULA', 'Esto no es una cedula', '4005006070', '4005007060', 'Carpintera', 'Carpintería Gonzales', 'Auxiliar de carpintería', 1300000, 'mail@mail.com', 'Cali, Mi Barrio', '3004005060', '3004005060', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 'Madre', 18),
(29, '1', '1', 'CEDULA', 'Esto no es una cedula', '4005006070', '4005006070', 'Carpintero', 'Carpintería Gonzales', 'Jefe Carpintero', 1500000, 'mail@mail.com', 'Cali, Mi Barrio', '3004005060', '3004005060', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 'Padre', 19),
(30, '1', '0', 'CEDULA', 'Esto no es una cedula', '4005006070', '4005007060', 'Carpintera', 'Carpintería Gonzales', 'Auxiliar de carpintería', 1300000, 'mail@mail.com', 'Cali, Mi Barrio', '3004005060', '3004005060', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 'Madre', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PagosPresenciales`
--

CREATE TABLE `PagosPresenciales` (
  `id` int NOT NULL,
  `servicio` varchar(255) DEFAULT NULL,
  `observacion` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paymentCode` varchar(255) DEFAULT NULL,
  `monto` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `PagosPresenciales`
--

INSERT INTO `PagosPresenciales` (`id`, `servicio`, `observacion`, `fecha`, `estado`, `createdAt`, `updatedAt`, `paymentCode`, `monto`) VALUES
(1, 'Certificado', 'Solicitud porque se necesita para la matricula de mi hijo en el próximo año', '2024-02-29 10:37:44', 1, '2024-02-29 10:37:44', '2024-02-29 11:24:05', '60t1zrg8', 20000),
(2, 'Certificado', 'Test', '2024-02-29 11:20:14', 1, '2024-02-29 11:20:14', '2024-02-29 11:24:57', 'hbu4arxa', 20000),
(3, 'Certificado', 'Test', '2024-02-29 11:34:25', 1, '2024-02-29 11:34:25', '2024-05-13 17:15:21', 'jiu08j2m', 20000),
(4, 'Certificado', 'test', '2024-02-29 11:35:54', NULL, '2024-02-29 11:35:54', '2024-02-29 11:35:54', 'i9pjr1wi', 20000),
(5, 'Certificado', 'Prueba', '2024-05-13 18:14:42', NULL, '2024-05-13 18:14:42', '2024-05-13 18:14:42', 'g9t8jfsb', 20000),
(6, 'Certificado', 'Urgente', '2024-05-13 18:20:33', NULL, '2024-05-13 18:20:33', '2024-05-13 18:20:33', 'u63lam0x', 45000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pensionesMeses`
--

CREATE TABLE `pensionesMeses` (
  `id` int NOT NULL,
  `fechaPago` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `mora` tinyint(1) DEFAULT '0',
  `estatus` varchar(255) DEFAULT NULL,
  `valorConDescuento` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAcudiente` int DEFAULT NULL,
  `idPension` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pensionesMeses`
--

INSERT INTO `pensionesMeses` (`id`, `fechaPago`, `valor`, `mora`, `estatus`, `valorConDescuento`, `metodoPago`, `createdAt`, `updatedAt`, `idAcudiente`, `idPension`) VALUES
(21, '2024-09-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:04', '2024-02-28 09:32:04', 1, 4),
(22, '2024-10-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(23, '2024-11-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(24, '2024-12-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(25, '2025-01-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(26, '2025-02-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(27, '2025-03-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(28, '2025-04-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(29, '2025-05-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4),
(30, '2025-06-05', 19400, 0, 'Pendiente', NULL, NULL, '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pensions`
--

CREATE TABLE `pensions` (
  `id` int NOT NULL,
  `price` bigint DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `use` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idGrade` varchar(255) DEFAULT NULL,
  `interes` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pensions`
--

INSERT INTO `pensions` (`id`, `price`, `discount`, `use`, `isActive`, `createdAt`, `updatedAt`, `idGrade`, `interes`) VALUES
(4, 200000, 7, '', 1, '2024-02-28 05:55:29', '2024-02-28 09:46:06', '3', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periods`
--

CREATE TABLE `periods` (
  `id` int NOT NULL,
  `age` datetime DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `identifier` varchar(255) DEFAULT NULL,
  `consecutive` int DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recoverPasswords`
--

CREATE TABLE `recoverPasswords` (
  `id` int NOT NULL,
  `dateRecovery` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUser` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsables`
--

CREATE TABLE `responsables` (
  `id` int NOT NULL,
  `tipoPersona` varchar(255) DEFAULT NULL,
  `razonSocial` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `correoElectronico` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `responsables`
--

INSERT INTO `responsables` (`id`, `tipoPersona`, `razonSocial`, `tipoDocumento`, `identificacion`, `direccion`, `pais`, `ciudad`, `departamento`, `correoElectronico`, `celular`, `responsable`, `isActive`, `createdAt`, `updatedAt`, `idEstudiante`) VALUES
(1, 'fdgdfgdg', 'fdgfg', 'CEDULA', 'sdffsf', 'sdfsdfsdfsdf', 'fggdsg', 'dfgg', 'fgsgsg', 'fdff@fasd.com', '3333333333', '2', 1, '2023-10-10 21:13:02', '2023-10-10 21:13:02', 4),
(2, 'NATURAL', 'PAPA ', 'CEDULA', '22222222', 'CR 5', 'COLOMBIA', 'CALI', 'VALLE', 'F@GMAIL.COM', '311111111', '1', 1, '2023-10-11 21:25:45', '2023-10-11 21:25:45', 5),
(3, 'Natural', 'wepocoicneoi', 'CEDULA', 'kwjdsa ojsd', 'o2einwoneifnweip', 'wjoouenc', 'wojcoe', 'wocnonewo', 'samuel@tecnopac.com.co', '3112363374', '1', 1, '2023-11-16 15:04:20', '2023-11-16 15:04:20', 7),
(4, 'adsasd', 'adsasd', 'NO', 'N/A', 'N/A', 'adasd', 'adad', 'adasd', 'email@mail.com', '1', '1', 1, '2024-01-25 08:52:20', '2024-01-25 08:52:20', 9),
(5, 'KWNPIWN', 'CEWPINIOWE', 'NO', 'N/A', 'N/A', 'WOICNIW', 'WCNWIPE', 'WPINCPIE', 'email@mail.com', '1', '1', 1, '2024-02-01 21:38:27', '2024-02-01 21:38:27', 11),
(6, ' ', ' ', 'NO', 'N/A', 'N/A', ' ', ' ', ' ', 'email@mail.com', '1', '1', 1, '2024-02-21 05:27:23', '2024-02-21 05:27:23', 15),
(7, 'Natural', 'Impresiones Digitales', 'CEDULA', '383838383', 'cr 23 No 5 - 5', 'Colombia', 'Cali', 'Valle', '1111@gmail.com', '315555555', '2', 1, '2024-02-22 15:08:41', '2024-02-22 15:08:41', 16),
(8, 'asasas', 'asasasa', 'CEDULA', 'asass', 'aaaaa', 'csacsa', 'cascaca', 'cacasac', 'mail@mail.com', '3000000', '1', 1, '2024-05-10 16:36:17', '2024-05-10 16:36:17', 17),
(9, 'Natural', 'Jesus De Avila', 'CC', 'Esto no es número de identificación', 'Mi Barrio', 'Colombia', 'Cartagena', 'Bolivar', 'Esto no es un correo', 'Esto no es un número de telefono', '3', 1, '2024-05-14 01:53:05', '2024-05-14 01:53:05', 18),
(10, 'Natural', 'Jesus De Avila', 'CC', 'Esto no es número de identificación', 'Mi Barrio', 'Colombia', 'Cartagena', 'Bolivar', 'Esto no es un correo', 'Esto no es un número de telefono', '3', 1, '2024-05-14 02:00:31', '2024-05-14 02:00:31', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 1, '2022-10-20 19:26:14', NULL),
(2, 'acudiente', 1, '2022-10-20 19:26:14', NULL),
(3, 'estudiante', 1, '2022-10-20 19:26:14', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schoolYears`
--

CREATE TABLE `schoolYears` (
  `id` int NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soportesPagos`
--

CREATE TABLE `soportesPagos` (
  `id` int NOT NULL,
  `tipoPago` varchar(255) DEFAULT NULL,
  `viaPago` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAcudiente` int DEFAULT NULL,
  `monto` double DEFAULT NULL,
  `paymentCode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `soportesPagos`
--

INSERT INTO `soportesPagos` (`id`, `tipoPago`, `viaPago`, `fecha`, `createdAt`, `updatedAt`, `idAcudiente`, `monto`, `paymentCode`) VALUES
(22, 'Matrícula', 'Bolsillo', '2024-02-01 05:00:00', '2024-02-02 05:32:48', '2024-02-02 05:32:48', 1, 500000, '0vtcvp3g'),
(23, 'Matrícula', 'Bolsillo', '2024-02-02 05:34:21', '2024-02-02 05:34:21', '2024-02-02 05:34:21', 1, 500000, 'jmx7fn0e'),
(24, 'Matrícula', 'Bolsillo', '2024-02-02 05:36:39', '2024-02-02 05:36:39', '2024-02-02 05:36:39', 1, 500000, 'lxkwe1pe'),
(25, 'Matrícula', 'Bolsillo', '2024-02-02 13:13:47', '2024-02-02 13:13:47', '2024-02-02 13:13:47', 1, 500000, '2ur110x0'),
(26, 'Pensión', 'Bolsillo', '2024-02-02 13:42:44', '2024-02-02 13:42:44', '2024-02-02 13:42:44', 1, 276000, 's0ry51st'),
(27, 'Pensión', 'Bolsillo', '2024-02-02 13:45:38', '2024-02-02 13:45:38', '2024-02-02 13:45:38', 1, 803160, 'xhb46meu'),
(28, 'Pensión', 'Bolsillo', '2024-02-02 13:50:25', '2024-02-02 13:50:25', '2024-02-02 13:50:25', 1, 276000, 't448tqzs'),
(29, 'Certificado', 'Bolsillo', '2024-02-02 13:52:51', '2024-02-02 13:52:51', '2024-02-02 13:52:51', 1, 200000, '6dns08y2'),
(30, 'Certificado', 'Bolsillo', '2024-02-02 13:55:22', '2024-02-02 13:55:22', '2024-02-02 13:55:22', 1, 200000, 'zoqqg00v'),
(31, 'Extracurricular', 'Bolsillo', '2024-02-02 13:56:45', '2024-02-02 13:56:45', '2024-02-02 13:56:45', 1, 120000, '9bvq864n'),
(32, 'Extracurricular', 'Bolsillo', '2024-02-02 13:57:44', '2024-02-02 13:57:44', '2024-02-02 13:57:44', 1, 5656, '5t3t169t'),
(33, 'Extracurricular', 'Bolsillo', '2024-02-02 13:58:31', '2024-02-02 13:58:31', '2024-02-02 13:58:31', 1, 120000, 'nfn01362'),
(34, 'Certificado', 'Bolsillo', '2024-02-03 14:20:30', '2024-02-03 14:20:30', '2024-02-03 14:20:30', 1, 200000, '3xn8njae'),
(35, 'Matrícula', 'Bolsillo', '2024-02-19 07:46:18', '2024-02-19 07:46:18', '2024-02-19 07:46:18', 1, 600000, 'nhgq2fpz'),
(36, 'Matrícula', 'Bolsillo', '2024-02-19 07:52:01', '2024-02-19 07:52:01', '2024-02-19 07:52:01', 1, 600000, '2h5a4gp9'),
(37, 'Matrícula', 'Bolsillo', '2024-02-28 09:32:05', '2024-02-28 09:32:05', '2024-02-28 09:32:05', 1, 927080, 'rz73egbk'),
(38, 'Certificado', 'Bolsillo', '2024-02-28 10:45:47', '2024-02-28 10:45:47', '2024-02-28 10:45:47', 1, 200000, 'm16ykjnh'),
(39, 'Certificado', 'Bolsillo', '2024-02-28 11:04:36', '2024-02-28 11:04:36', '2024-02-28 11:04:36', 1, 20000, 'jfa3dr1q'),
(40, 'Certificado', 'Pago Presencial', '2024-02-28 11:23:23', '2024-02-28 11:23:23', '2024-02-28 11:23:23', 1, 20000, '7r3vlawv'),
(41, 'Certificado', 'Bolsillo', '2024-02-28 11:38:27', '2024-02-28 11:38:27', '2024-02-28 11:38:27', 1, 20000, 'owhqtitw'),
(42, 'Certificado', 'Pago Presencial', '2024-02-28 11:42:34', '2024-02-28 11:42:34', '2024-02-28 11:42:34', 1, 20000, 'xixd9f9r'),
(43, 'Certificado', 'Pago Presencial', '2024-02-28 11:43:26', '2024-02-28 11:43:26', '2024-02-28 11:43:26', 1, 20000, '3y8iz6oy'),
(44, 'Certificado', 'Pago Presencial', '2024-02-28 11:45:33', '2024-02-28 11:45:33', '2024-02-28 11:45:33', 1, 20000, '10i9uup9'),
(45, 'Certificado', 'Pago Presencial', '2024-02-28 11:47:21', '2024-02-28 11:47:21', '2024-02-28 11:47:21', 1, 20000, 'pm17pfat'),
(46, 'Certificado', 'Pago Presencial', '2024-02-28 11:56:04', '2024-02-28 11:56:04', '2024-02-28 11:56:04', 1, 20000, '78az3u8t'),
(47, 'Certificado', 'Pago Presencial', '2024-02-28 11:58:09', '2024-02-28 11:58:09', '2024-02-28 11:58:09', 1, 20000, 'zcu2yd91'),
(48, 'Certificado', 'Pago Presencial', '2024-02-28 12:23:11', '2024-02-28 12:23:11', '2024-02-28 12:23:11', 1, 20000, 'svgotq8p'),
(49, 'Certificado', 'Bolsillo', '2024-02-28 12:23:36', '2024-02-28 12:23:36', '2024-02-28 12:23:36', 1, 20000, 'km0u2j01'),
(50, 'Certificado', 'Bolsillo', '2024-02-28 12:24:23', '2024-02-28 12:24:23', '2024-02-28 12:24:23', 1, 20000, 'vzwvt48i'),
(51, 'Certificado', 'Bolsillo', '2024-02-28 12:25:58', '2024-02-28 12:25:58', '2024-02-28 12:25:58', 1, 20000, 'phhbz66l'),
(52, 'Certificado', 'Bolsillo', '2024-02-28 12:29:11', '2024-02-28 12:29:11', '2024-02-28 12:29:11', 1, 20000, '37r7z6nl'),
(53, 'Certificado', 'Bolsillo', '2024-02-28 12:48:33', '2024-02-28 12:48:33', '2024-02-28 12:48:33', 1, 20000, 'csrhwh4f'),
(54, 'Certificado', 'Bolsillo', '2024-02-28 12:50:36', '2024-02-28 12:50:36', '2024-02-28 12:50:36', 1, 20000, '62gigt3g'),
(55, 'Certificado', 'Bolsillo', '2024-02-28 12:51:00', '2024-02-28 12:51:00', '2024-02-28 12:51:00', 1, 20000, 'ieypwufp'),
(56, 'Certificado', 'Bolsillo', '2024-02-28 12:53:10', '2024-02-28 12:53:10', '2024-02-28 12:53:10', 1, 20000, '4fo8z9od'),
(57, 'Certificado', 'Pago Presencial', '2024-02-28 13:06:32', '2024-02-28 13:06:32', '2024-02-28 13:06:32', 1, 20000, 'lwsdy9e4'),
(58, 'Certificado', 'Bolsillo', '2024-02-28 13:06:44', '2024-02-28 13:06:44', '2024-02-28 13:06:44', 1, 20000, 'v6vhl19n'),
(59, 'Certificado', 'Pago Presencial', '2024-02-29 09:02:35', '2024-02-29 09:02:35', '2024-02-29 09:02:35', 1, 20000, 'o4k2gydt'),
(60, 'Certificado', 'Bolsillo', '2024-02-29 09:20:14', '2024-02-29 09:20:14', '2024-02-29 09:20:14', 1, 20000, 'dsghb24a'),
(61, 'Certificado', 'Pago Presencial', '2024-02-29 09:20:22', '2024-02-29 09:20:22', '2024-02-29 09:20:22', 1, 20000, '8tevrfml'),
(62, 'Certificado', 'Pago Presencial', '2024-02-29 09:58:40', '2024-02-29 09:58:40', '2024-02-29 09:58:40', 1, 20000, 'sz524vys'),
(63, 'Certificado', 'Pago Presencial', '2024-02-29 09:59:13', '2024-02-29 09:59:13', '2024-02-29 09:59:13', 1, 20000, '17plntzw'),
(64, 'Certificado', 'Pago Presencial', '2024-02-29 09:59:50', '2024-02-29 09:59:50', '2024-02-29 09:59:50', 1, 20000, 'wqhbleb8'),
(65, 'Certificado', 'Pago Presencial', '2024-02-29 10:01:03', '2024-02-29 10:01:03', '2024-02-29 10:01:03', 1, 20000, 'j6k9gfui'),
(66, 'Certificado', 'Pago Presencial', '2024-02-29 10:37:44', '2024-02-29 10:37:44', '2024-02-29 10:37:44', 1, 20000, '60t1zrg8'),
(67, 'Certificado', 'Pago Presencial', '2024-02-29 11:20:14', '2024-02-29 11:20:14', '2024-02-29 11:20:14', 1, 20000, 'hbu4arxa'),
(68, 'Certificado', 'Pago Presencial', '2024-02-29 11:34:25', '2024-02-29 11:34:25', '2024-02-29 11:34:25', 1, 20000, 'jiu08j2m'),
(69, 'Certificado', 'Pago Presencial', '2024-02-29 11:35:54', '2024-02-29 11:35:54', '2024-02-29 11:35:54', 1, 20000, 'i9pjr1wi'),
(70, 'Certificado', 'Bolsillo', '2024-02-29 11:41:33', '2024-02-29 11:41:33', '2024-02-29 11:41:33', 1, 20000, 'epw7p9cb'),
(71, 'Certificado', 'Pago Presencial', '2024-05-13 18:14:42', '2024-05-13 18:14:42', '2024-05-13 18:14:42', 1, 20000, 'g9t8jfsb'),
(72, 'Certificado', 'Pago Presencial', '2024-05-13 18:20:33', '2024-05-13 18:20:33', '2024-05-13 18:20:33', 1, 45000, 'u63lam0x');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studentDatabases`
--

CREATE TABLE `studentDatabases` (
  `id` int NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `expedicion` varchar(255) DEFAULT NULL,
  `lugarNacimiento` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `edad` double DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `tipoDireccion` varchar(255) DEFAULT NULL,
  `barrio` varchar(255) DEFAULT NULL,
  `estrato` double DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `tipoCupo` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `estadoEstudiante` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `studentDatabases`
--

INSERT INTO `studentDatabases` (`id`, `codigo`, `nombres`, `apellidos`, `tipoDocumento`, `identificacion`, `expedicion`, `lugarNacimiento`, `fechaNacimiento`, `edad`, `direccion`, `tipoDireccion`, `barrio`, `estrato`, `telefono`, `correo`, `tipoCupo`, `isActive`, `createdAt`, `updatedAt`, `estadoEstudiante`) VALUES
(1, '', 'd', 'd', 'CEDULA', '5', '5', '5', '2022-12-09 00:00:00', 5, '5', '5', '5', 5, '5', '5', '5', 1, '2022-12-15 18:52:43', '2022-12-15 18:52:43', ''),
(2, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2022-12-15 18:53:49', '2022-12-15 18:53:49', ''),
(3, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2022-12-15 18:53:54', '2022-12-15 18:53:54', ''),
(4, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2022-12-15 18:54:11', '2022-12-15 18:54:11', ''),
(5, '', 'y', 'y', 'CEDULA', 'y', 'y', 'y', '2022-12-14 00:00:00', 5, '5', 'y', '5', 5, '5', '5', '5', 1, '2022-12-15 18:54:42', '2022-12-15 18:54:42', 'Inscrito'),
(6, '', 't', 't', 'CEDULA', '5', 't', '5', '2022-11-28 00:00:00', 5, '5', '5', '5', 5, '5', '5', '5', 1, '2022-12-15 18:56:23', '2022-12-15 18:56:23', 'Graduado'),
(7, '', 'g', 'g', 'CEDULA', 'g', 'g', 'g', '2022-11-29 00:00:00', 5, 'g', '5', '5', 5, '5', '5', '5', 1, '2022-12-15 19:18:00', '2022-12-15 19:18:00', ''),
(8, '', '6', '6', 'CEDULA', '6', '6', '6', '2022-12-14 00:00:00', 6, '6', '6', '6', 6, '6', '6', '6', 1, '2022-12-15 19:21:57', '2022-12-15 19:21:57', ''),
(9, '', 'a', 'h', 'CEDULA', '6', '6', '6', '2022-12-07 00:00:00', 6, '6', '6', '6', 6, '6', '6', '6', 1, '2022-12-15 19:55:53', '2022-12-15 19:55:53', ''),
(10, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2022-12-15 19:56:02', '2022-12-15 19:56:02', ''),
(11, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2022-12-15 19:56:06', '2022-12-15 19:56:06', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers`
--

CREATE TABLE `teachers` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `number` double DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `course`, `email`, `number`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'ALVARO SANTACRUZ', 'ESPAÑOL', 'alvarozi89@gmail.com', 3116605947, 1, '2022-11-30 18:49:14', '2022-11-30 20:05:36'),
(2, 'Paquito Mendienta', 'Matematicas', 'paquito@gmail.com', 31555555, 1, '2022-11-30 20:05:01', '2022-11-30 20:05:01'),
(3, 'Andres', 'Matematicas', 'andres@gmail.com', 3214180122, 1, '2023-05-12 01:34:32', '2024-05-13 19:30:04'),
(4, 'Jesus Tester', 'Microbiología', 'Esto no es un correo', 3045559060, 1, '2024-05-13 19:30:44', '2024-05-13 19:30:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TechnicalInscriptions`
--

CREATE TABLE `TechnicalInscriptions` (
  `id` int NOT NULL,
  `monto` varchar(255) DEFAULT NULL,
  `metodoPago` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idEstudiante` int DEFAULT NULL,
  `idTechnical` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `TechnicalInscriptions`
--

INSERT INTO `TechnicalInscriptions` (`id`, `monto`, `metodoPago`, `createdAt`, `updatedAt`, `idEstudiante`, `idTechnical`) VALUES
(1, '600000', 'bolsillo', '2023-08-15 17:51:32', '2023-08-15 17:51:32', 1, 1),
(2, '800000', 'bolsillo', '2023-10-10 20:48:40', '2023-10-10 20:48:40', 1, 3),
(3, '250000', 'bolsillo', '2023-10-11 18:37:28', '2023-10-11 18:37:28', 1, 5),
(4, '50000', 'bolsillo', '2023-12-29 03:32:27', '2023-12-29 03:32:27', 1, 2),
(5, '600000', 'bolsillo', '2023-12-29 03:32:43', '2023-12-29 03:32:43', 1, 1),
(6, '50000', 'bolsillo', '2023-12-29 03:33:01', '2023-12-29 03:33:01', 1, 2),
(7, '5656', 'Avalpay', '2024-01-27 01:49:17', '2024-01-27 01:49:17', 1, NULL),
(8, '120000', 'Avalpay', '2024-01-27 04:00:59', '2024-01-27 04:00:59', 1, NULL),
(9, '120000', 'Avalpay', '2024-01-29 07:00:48', '2024-01-29 07:00:48', 1, NULL),
(10, '120000', 'bolsillo', '2024-01-29 09:56:05', '2024-01-29 09:56:05', 1, NULL),
(11, '120000', 'bolsillo', '2024-01-29 09:56:18', '2024-01-29 09:56:18', 1, NULL),
(12, '120000', 'bolsillo', '2024-01-29 09:58:16', '2024-01-29 09:58:16', 1, NULL),
(13, '120000', 'bolsillo', '2024-01-29 09:58:33', '2024-01-29 09:58:33', 1, NULL),
(14, '120000', 'bolsillo', '2024-01-29 09:59:49', '2024-01-29 09:59:49', 1, NULL),
(15, '120000', 'bolsillo', '2024-01-29 10:00:08', '2024-01-29 10:00:08', 1, NULL),
(16, '120000', 'bolsillo', '2024-01-29 10:02:12', '2024-01-29 10:02:12', 1, NULL),
(17, '120000', 'bolsillo', '2024-02-01 11:25:40', '2024-02-01 11:25:40', 1, NULL),
(18, '120000', 'bolsillo', '2024-02-01 20:12:04', '2024-02-01 20:12:04', 1, NULL),
(19, '120000', 'bolsillo', '2024-02-02 13:56:44', '2024-02-02 13:56:44', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `technicals`
--

CREATE TABLE `technicals` (
  `id` int NOT NULL,
  `course` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `finalDate` datetime DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idTeacher` int DEFAULT NULL,
  `starHour` varchar(255) DEFAULT NULL,
  `finalHour` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `technicals`
--

INSERT INTO `technicals` (`id`, `course`, `startDate`, `finalDate`, `price`, `isActive`, `createdAt`, `updatedAt`, `idTeacher`, `starHour`, `finalHour`, `description`) VALUES
(1, 'Matematicas', '2022-11-16 00:00:00', '2022-11-15 00:00:00', 600000, 0, '2022-11-18 20:53:49', '2023-10-11 18:33:59', 1, NULL, NULL, NULL),
(2, 'libre', '2022-11-15 00:00:00', '2022-11-17 00:00:00', 50000, 1, '2022-11-21 19:56:35', '2022-11-21 19:56:35', 1, NULL, NULL, NULL),
(3, 'Costos - Técnico en Auxiliar Contable', '2022-02-12 00:00:00', '2020-02-12 00:00:00', 800000, 1, '2022-11-26 21:49:27', '2022-11-26 22:04:59', 1, NULL, NULL, NULL),
(4, 'EDCFSDEFV', '2024-02-01 00:00:00', '2024-02-01 00:00:00', 87, 1, '2022-11-26 22:13:04', '2024-02-01 11:30:21', 1, NULL, NULL, NULL),
(5, 'Lenguaje de Programación ', '2023-07-01 00:00:00', '2024-06-30 00:00:00', 250000, 1, '2023-10-11 18:36:49', '2023-10-11 18:36:49', 2, '2:00 pm', '4:00 pm', 'curso ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transportation`
--

CREATE TABLE `transportation` (
  `id` int NOT NULL,
  `routeName` varchar(255) DEFAULT NULL,
  `routeNumber` varchar(255) DEFAULT NULL,
  `responsible` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `routeType` varchar(255) DEFAULT NULL,
  `cupo` int DEFAULT NULL,
  `cupo_disponible` int DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `transportation`
--

INSERT INTO `transportation` (`id`, `routeName`, `routeNumber`, `responsible`, `price`, `isActive`, `createdAt`, `updatedAt`, `routeType`, `cupo`, `cupo_disponible`, `descripcion`) VALUES
(1, 'Ruta Norte', '54353443', 'Andres Fernandez', 2000000, 1, '2022-11-26 22:10:18', '2023-10-16 01:49:18', 'Completa', 20, 18, 'Esta ruta pasa por la esquina del parque san clemente punto estrategico test'),
(2, 'Rutas Sur', '12332145', 'Julio', 200000, 1, '2023-08-02 15:42:57', '2023-08-02 15:42:57', 'Completa', 20, 20, 'Esta ruta no tiene puntos estategicos, cerca a la carrera 15'),
(3, 'Media Ruta', '24242334', 'Andres Bojaca', 60000, 1, '2023-08-03 21:09:39', '2024-02-01 20:17:54', 'Media', 20, 16, 'Esta ruta pasa por la esquina del parque san clemente punto estrategico'),
(8, 'pepe', '12312312312', 'andres', 12131, 1, '2023-10-16 01:58:16', '2023-10-16 03:58:48', 'Complete', 20, 20, 'asdasdasdsadasdasdasdad'),
(9, 'Ruta de Prueba - Edición', '10052024', 'Pepe Anca', 2000000, 1, '2024-05-10 15:58:27', '2024-05-13 01:20:08', 'Academica ', 20, 20, 'Esta ruta es de prueba ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transportation_requests`
--

CREATE TABLE `transportation_requests` (
  `id` int NOT NULL,
  `routeid` int DEFAULT NULL,
  `acudienteid` int DEFAULT NULL,
  `estudianteid` int DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `routeType` int DEFAULT NULL,
  `datosResponsable` varchar(255) DEFAULT NULL,
  `direccion_recogida` varchar(255) DEFAULT NULL,
  `direccion_entrega` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `transportation_requests`
--

INSERT INTO `transportation_requests` (`id`, `routeid`, `acudienteid`, `estudianteid`, `estado`, `createdAt`, `updatedAt`, `routeType`, `datosResponsable`, `direccion_recogida`, `direccion_entrega`) VALUES
(1, 9, 1, 1, '', '2024-05-13 02:04:29', '2024-05-13 02:06:41', 1, 'Jesus De Avila', 'En Mi casa', 'Colegio Catolico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tuitions`
--

CREATE TABLE `tuitions` (
  `id` int NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tuitions`
--

INSERT INTO `tuitions` (`id`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2024-11-01 14:22:16', '2022-11-01 14:22:16'),
(2, 1, '2024-11-01 14:27:07', '2022-11-01 14:27:07'),
(3, 1, '2024-11-01 14:57:07', '2022-11-01 14:57:07'),
(4, 1, '2024-11-18 20:49:44', '2022-11-18 20:49:44'),
(5, 1, '2024-11-21 17:58:01', '2022-11-21 17:58:01'),
(6, 1, '2024-11-21 17:58:29', '2022-11-21 17:58:29'),
(7, 1, '2024-11-25 02:11:04', '2022-11-25 02:11:04'),
(8, 1, '2024-11-25 02:11:28', '2022-11-25 02:11:28'),
(9, 1, '2024-11-30 18:47:15', '2022-11-30 18:47:15'),
(10, 1, '2024-11-30 19:51:50', '2022-11-30 19:51:50'),
(11, 1, '2024-10-11 14:54:31', '2023-10-11 14:54:31'),
(12, 1, '2024-10-11 15:21:07', '2023-10-11 15:21:07'),
(13, 1, '2024-01-13 01:53:24', '2024-01-13 01:53:24'),
(14, 1, '2024-02-03 14:53:06', '2024-02-03 14:53:06'),
(15, 1, '2024-02-03 16:13:28', '2024-02-03 16:13:28'),
(16, 1, '2024-02-03 16:15:51', '2024-02-03 16:15:51'),
(17, 1, '2024-02-06 06:38:30', '2024-02-06 06:38:30'),
(18, 1, '2024-02-21 13:22:53', '2024-02-21 13:22:53'),
(19, 1, '2024-02-21 13:24:14', '2024-02-21 13:24:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tuitionTypes`
--

CREATE TABLE `tuitionTypes` (
  `id` int NOT NULL,
  `startDate` datetime DEFAULT NULL,
  `finalDate` datetime DEFAULT NULL,
  `surcharge` bigint DEFAULT NULL,
  `ordinary_price` bigint DEFAULT NULL,
  `extraordinary_price` bigint DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `idGrade` int DEFAULT NULL,
  `extraordinary_startDate` datetime DEFAULT NULL,
  `extraordinary_finalDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tuitionTypes`
--

INSERT INTO `tuitionTypes` (`id`, `startDate`, `finalDate`, `surcharge`, `ordinary_price`, `extraordinary_price`, `isActive`, `createdAt`, `updatedAt`, `grade`, `idGrade`, `extraordinary_startDate`, `extraordinary_finalDate`) VALUES
(1, '2024-01-02 00:00:00', '2024-02-06 00:00:00', 0, 842800, 927080, 1, '2022-11-30 18:47:15', '2024-03-08 13:22:56', '7', 3, '2024-02-26 00:00:00', '2027-07-06 00:00:00'),
(17, '2024-01-31 00:00:00', '2024-02-15 00:00:00', NULL, 848500, 933350, 1, '2024-02-06 06:38:30', '2024-02-21 13:23:41', '2', NULL, '2024-02-16 00:00:00', '2024-02-29 00:00:00'),
(18, '2024-01-31 00:00:00', '2024-02-15 00:00:00', NULL, 848500, 933350, 1, '2024-02-21 13:22:53', '2024-02-21 13:22:53', '1', NULL, '2024-02-16 00:00:00', '2024-02-29 00:00:00'),
(19, '2024-01-31 00:00:00', '2024-02-15 00:00:00', NULL, 848500, 933350, 1, '2024-02-21 13:24:14', '2024-02-21 13:24:14', '3', NULL, '2024-02-16 00:00:00', '2024-02-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idRole` int DEFAULT NULL,
  `idAcudiente` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `idRole`, `idAcudiente`) VALUES
(1, 'administrador', 'admin@tecnopac.com.co', '$2a$2a$12$SxT.B5K/XJWd8yZO/jyZbubr4h4DhZ.oqIg..QizrxvmfqGRYyEXS', 1, '2022-10-20 19:26:14', '2022-10-20 19:26:14', 1, 1),
(2, 'Eber Reta', 'eber.retabaeza@gmail.com', '$2a$10$90dRBCoO4IvsAcBXzGd1V.8t0WwjmsoWXNVC6vKV1fCrdYiOKtjUm', 1, '2022-10-20 19:30:50', '2022-10-20 19:30:50', 1, 1),
(3, 'Alejandro Saganome', 'aux.contable@colegiocatolicocali.edu.co', '$2a$10$gbtMvHyolwGoAyATPUMXV.alAFwznRrMhoK.4WyuHDyX3bYtetfdu', 1, '2022-11-25 02:05:08', '2024-02-22 14:34:15', 1, 1),
(4, 'Tester', 'qatest@gmail.com', '$2a$10$Ef3uKMKaXEERTyA91e/1TuM7TxzCnRmVVy.GUT2MHaNui/tr/WFnW', 1, '2023-05-10 20:00:00', '2023-05-19 21:17:24', 2, 1),
(5, 'Admin', 'admintecnopac@gmail.com', '$2a$10$Ef3uKMKaXEERTyA91e/1TuM7TxzCnRmVVy.GUT2MHaNui/tr/WFnW', 1, '2023-05-10 20:00:00', '2023-05-19 21:17:24', 1, 1),
(6, 'Tester', 'tester@', '$2b$10$xJ0JTRgIStT0kJ9ymfPuIO58lkI1GS3rx1r66K7D08/kiiSKtUnQu', 0, '2024-05-13 18:45:49', '2024-05-13 19:01:33', 1, NULL),
(7, 'Tester', 'Esto no es un correo', '$2b$10$SL9jTF/mXnzCXO3S13AqlebCRWEvuIFl3OmorAbhTLo1opu0Y6pi2', 1, '2024-05-13 19:09:58', '2024-05-13 19:09:58', 1, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acudientes`
--
ALTER TABLE `acudientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `aptitudesEstadoFisicos`
--
ALTER TABLE `aptitudesEstadoFisicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `attendingManagements`
--
ALTER TABLE `attendingManagements`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cafeteria`
--
ALTER TABLE `cafeteria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cafeteriaPagos`
--
ALTER TABLE `cafeteriaPagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `CanalReferencia`
--
ALTER TABLE `CanalReferencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `certificateInscriptions`
--
ALTER TABLE `certificateInscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCertificate` (`idCertificate`),
  ADD KEY `idGrade` (`idGrade`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTeacher` (`idTeacher`);

--
-- Indices de la tabla `coursesInscriptions`
--
ALTER TABLE `coursesInscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`),
  ADD KEY `idCourse` (`idCourse`);

--
-- Indices de la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documentosMatriculas`
--
ALTER TABLE `documentosMatriculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGrade` (`idGrade`);

--
-- Indices de la tabla `extracurricularInscriptions`
--
ALTER TABLE `extracurricularInscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`),
  ADD KEY `idExtracurricular` (`idExtracurricular`);

--
-- Indices de la tabla `extraCurriculars`
--
ALTER TABLE `extraCurriculars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTeacher` (`idTeacher`);

--
-- Indices de la tabla `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hermanos`
--
ALTER TABLE `hermanos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `histBachilleratos`
--
ALTER TABLE `histBachilleratos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historialAcademicos`
--
ALTER TABLE `historialAcademicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `histPreescolars`
--
ALTER TABLE `histPreescolars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `histPrimaria`
--
ALTER TABLE `histPrimaria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `inscriptions`
--
ALTER TABLE `inscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idPeriod` (`idPeriod`);

--
-- Indices de la tabla `levelings`
--
ALTER TABLE `levelings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `matriculasPagos`
--
ALTER TABLE `matriculasPagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAcudiente` (`idAcudiente`);

--
-- Indices de la tabla `padreFamilia`
--
ALTER TABLE `padreFamilia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `PagosPresenciales`
--
ALTER TABLE `PagosPresenciales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pensionesMeses`
--
ALTER TABLE `pensionesMeses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAcudiente` (`idAcudiente`),
  ADD KEY `idPension` (`idPension`);

--
-- Indices de la tabla `pensions`
--
ALTER TABLE `pensions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGrade` (`idGrade`),
  ADD KEY `discount` (`discount`);

--
-- Indices de la tabla `periods`
--
ALTER TABLE `periods`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recoverPasswords`
--
ALTER TABLE `recoverPasswords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `responsables`
--
ALTER TABLE `responsables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `schoolYears`
--
ALTER TABLE `schoolYears`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `soportesPagos`
--
ALTER TABLE `soportesPagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAcudiente_idx` (`idAcudiente`);

--
-- Indices de la tabla `studentDatabases`
--
ALTER TABLE `studentDatabases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `TechnicalInscriptions`
--
ALTER TABLE `TechnicalInscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEstudiante` (`idEstudiante`),
  ADD KEY `idTechnical` (`idTechnical`);

--
-- Indices de la tabla `technicals`
--
ALTER TABLE `technicals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTeacher` (`idTeacher`);

--
-- Indices de la tabla `transportation`
--
ALTER TABLE `transportation`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transportation_requests`
--
ALTER TABLE `transportation_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `routeid` (`routeid`);

--
-- Indices de la tabla `tuitions`
--
ALTER TABLE `tuitions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tuitionTypes`
--
ALTER TABLE `tuitionTypes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGrade` (`idGrade`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idRole` (`idRole`),
  ADD KEY `idAcudiente` (`idAcudiente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acudientes`
--
ALTER TABLE `acudientes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `aptitudesEstadoFisicos`
--
ALTER TABLE `aptitudesEstadoFisicos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `attendingManagements`
--
ALTER TABLE `attendingManagements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cafeteria`
--
ALTER TABLE `cafeteria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cafeteriaPagos`
--
ALTER TABLE `cafeteriaPagos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `CanalReferencia`
--
ALTER TABLE `CanalReferencia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `certificateInscriptions`
--
ALTER TABLE `certificateInscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `certificates`
--
ALTER TABLE `certificates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `coursesInscriptions`
--
ALTER TABLE `coursesInscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `deudas`
--
ALTER TABLE `deudas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `documentos`
--
ALTER TABLE `documentos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `documentosMatriculas`
--
ALTER TABLE `documentosMatriculas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `extracurricularInscriptions`
--
ALTER TABLE `extracurricularInscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `extraCurriculars`
--
ALTER TABLE `extraCurriculars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `hermanos`
--
ALTER TABLE `hermanos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `histBachilleratos`
--
ALTER TABLE `histBachilleratos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `historialAcademicos`
--
ALTER TABLE `historialAcademicos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `histPreescolars`
--
ALTER TABLE `histPreescolars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `histPrimaria`
--
ALTER TABLE `histPrimaria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `inscriptions`
--
ALTER TABLE `inscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `levelings`
--
ALTER TABLE `levelings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `matriculasPagos`
--
ALTER TABLE `matriculasPagos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `padreFamilia`
--
ALTER TABLE `padreFamilia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `PagosPresenciales`
--
ALTER TABLE `PagosPresenciales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pensionesMeses`
--
ALTER TABLE `pensionesMeses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `pensions`
--
ALTER TABLE `pensions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `periods`
--
ALTER TABLE `periods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recoverPasswords`
--
ALTER TABLE `recoverPasswords`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `responsables`
--
ALTER TABLE `responsables`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `schoolYears`
--
ALTER TABLE `schoolYears`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `soportesPagos`
--
ALTER TABLE `soportesPagos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `studentDatabases`
--
ALTER TABLE `studentDatabases`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `TechnicalInscriptions`
--
ALTER TABLE `TechnicalInscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `technicals`
--
ALTER TABLE `technicals`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `transportation`
--
ALTER TABLE `transportation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `transportation_requests`
--
ALTER TABLE `transportation_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tuitions`
--
ALTER TABLE `tuitions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `tuitionTypes`
--
ALTER TABLE `tuitionTypes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acudientes`
--
ALTER TABLE `acudientes`
  ADD CONSTRAINT `acudientes_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `aptitudesEstadoFisicos`
--
ALTER TABLE `aptitudesEstadoFisicos`
  ADD CONSTRAINT `aptitudesEstadoFisicos_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `cafeteriaPagos`
--
ALTER TABLE `cafeteriaPagos`
  ADD CONSTRAINT `cafeteriaPagos_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `CanalReferencia`
--
ALTER TABLE `CanalReferencia`
  ADD CONSTRAINT `CanalReferencia_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `certificateInscriptions`
--
ALTER TABLE `certificateInscriptions`
  ADD CONSTRAINT `certificateInscriptions_ibfk_2453` FOREIGN KEY (`idCertificate`) REFERENCES `certificates` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `certificateInscriptions_ibfk_2454` FOREIGN KEY (`idGrade`) REFERENCES `grades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `certificateInscriptions_ibfk_2455` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`idTeacher`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `coursesInscriptions`
--
ALTER TABLE `coursesInscriptions`
  ADD CONSTRAINT `coursesInscriptions_ibfk_453` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `coursesInscriptions_ibfk_454` FOREIGN KEY (`idCourse`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD CONSTRAINT `deudas_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`idGrade`) REFERENCES `grades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `extracurricularInscriptions`
--
ALTER TABLE `extracurricularInscriptions`
  ADD CONSTRAINT `extracurricularInscriptions_ibfk_273` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `extracurricularInscriptions_ibfk_274` FOREIGN KEY (`idExtracurricular`) REFERENCES `extraCurriculars` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `extraCurriculars`
--
ALTER TABLE `extraCurriculars`
  ADD CONSTRAINT `extraCurriculars_ibfk_1` FOREIGN KEY (`idTeacher`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `hermanos`
--
ALTER TABLE `hermanos`
  ADD CONSTRAINT `hermanos_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `historialAcademicos`
--
ALTER TABLE `historialAcademicos`
  ADD CONSTRAINT `historialAcademicos_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `inscriptions`
--
ALTER TABLE `inscriptions`
  ADD CONSTRAINT `inscriptions_ibfk_45` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `inscriptions_ibfk_46` FOREIGN KEY (`idPeriod`) REFERENCES `periods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `levelings`
--
ALTER TABLE `levelings`
  ADD CONSTRAINT `levelings_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `matriculasPagos`
--
ALTER TABLE `matriculasPagos`
  ADD CONSTRAINT `matriculasPagos_ibfk_1` FOREIGN KEY (`idAcudiente`) REFERENCES `acudientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `padreFamilia`
--
ALTER TABLE `padreFamilia`
  ADD CONSTRAINT `padreFamilia_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `PagosPresenciales`
--
ALTER TABLE `PagosPresenciales`
  ADD CONSTRAINT `id_acudiente` FOREIGN KEY (`id`) REFERENCES `acudientes` (`id`),
  ADD CONSTRAINT `id_estudiante` FOREIGN KEY (`id`) REFERENCES `estudiantes` (`id`);

--
-- Filtros para la tabla `pensionesMeses`
--
ALTER TABLE `pensionesMeses`
  ADD CONSTRAINT `pensionesMeses_ibfk_261` FOREIGN KEY (`idAcudiente`) REFERENCES `acudientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pensionesMeses_ibfk_262` FOREIGN KEY (`idPension`) REFERENCES `pensions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pensions`
--
ALTER TABLE `pensions`
  ADD CONSTRAINT `pensions_ibfk_1` FOREIGN KEY (`discount`) REFERENCES `discounts` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `recoverPasswords`
--
ALTER TABLE `recoverPasswords`
  ADD CONSTRAINT `recoverPasswords_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `responsables`
--
ALTER TABLE `responsables`
  ADD CONSTRAINT `responsables_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `soportesPagos`
--
ALTER TABLE `soportesPagos`
  ADD CONSTRAINT `soportesPagos_ibfk_1` FOREIGN KEY (`idAcudiente`) REFERENCES `acudientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `TechnicalInscriptions`
--
ALTER TABLE `TechnicalInscriptions`
  ADD CONSTRAINT `TechnicalInscriptions_ibfk_45` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiantes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `TechnicalInscriptions_ibfk_46` FOREIGN KEY (`idTechnical`) REFERENCES `technicals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `technicals`
--
ALTER TABLE `technicals`
  ADD CONSTRAINT `technicals_ibfk_1` FOREIGN KEY (`idTeacher`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `transportation_requests`
--
ALTER TABLE `transportation_requests`
  ADD CONSTRAINT `transportation_requests_ibfk_1` FOREIGN KEY (`routeid`) REFERENCES `transportation` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tuitionTypes`
--
ALTER TABLE `tuitionTypes`
  ADD CONSTRAINT `tuitionTypes_ibfk_1` FOREIGN KEY (`idGrade`) REFERENCES `grades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_629` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_630` FOREIGN KEY (`idAcudiente`) REFERENCES `acudientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

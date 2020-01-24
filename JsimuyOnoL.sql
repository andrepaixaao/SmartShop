-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 24-Jan-2020 √†s 20:38
-- Vers√£o do servidor: 8.0.13-4
-- vers√£o do PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JsimuyOnoL`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `CarrinhoQuantidade`
--

CREATE TABLE `CarrinhoQuantidade` (
  `quantidade` int(11) DEFAULT NULL,
  `emailUtilizador` varchar(45) DEFAULT NULL,
  `idProduto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `CarrinhoQuantidade`
--

INSERT INTO `CarrinhoQuantidade` (`quantidade`, `emailUtilizador`, `idProduto`) VALUES
(1, 'andre@gmail.com', 4),
(1, 'andre@gmail.com', 7),
(1, 'andre@gmail.com', 8),
(1, 'andre@gmail.com', 10),
(1, 'hugovarela98@gmail.com', 4),
(1, 'hugovarela98@gmail.com', 8),
(1, 'teste@gmail.com', 2),
(1, 'teste@gmail.com', 3),
(1, 'teste@gmail.com', 4),
(1, 'teste@gmail.com', 8),
(1, 'teste@gmail.com', 10),
(1, 'chiquita@gmail.com', 5),
(1, '1@1', 1),
(1, '1@1', 4),
(1, '1@1', 31),
(1, '1@1', 20),
(1, 'dpaixao@gmail.com', 8),
(1, 'dpaixao@gmail.com', 7),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 9),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 2),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 8),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 5),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'dpaixao@gmail.com', 3),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 5),
(1, 'miguel@gmail.com', 4),
(1, 'miguel@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'dpaixao@gmail.com', 4),
(1, 'video@gmail.com', 3),
(1, 'video@gmail.com', 2),
(1, 'video@gmail.com', 8),
(1, 'video@gmail.com', 7),
(1, 'video@gmail.com', 11),
(1, 'video@gmail.com', 18),
(1, 'video@gmail.com', 9),
(1, 'video@gmail.com', 9),
(1, 'video@gmail.com', 2),
(1, 'video@gmail.com', 8),
(1, 'video@gmail.com', 7),
(1, 'video@gmail.com', 11),
(1, 'video@gmail.com', 18),
(1, 'video@gmail.com', 10),
(1, 'video@gmail.com', 9),
(1, 'video@gmail.com', 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Lista`
--

CREATE TABLE `Lista` (
  `idLista` int(11) NOT NULL,
  `utilizadorOrigem` varchar(100) DEFAULT NULL,
  `nomeLista` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Lista`
--

INSERT INTO `Lista` (`idLista`, `utilizadorOrigem`, `nomeLista`) VALUES
(24, 'chiquita@gmail.com', 'Lista a Funcionar'),
(25, 'chiquita@gmail.com', 'Funciona mesmo?'),
(26, 'andre@gmail.com', 'MINHAL'),
(27, 'andre@gmail.com', 'Funciona?'),
(28, 'chiquita@gmail.com', 'Lista de Compras Teste'),
(29, 'andre@gmail.com', 'Lista de Teste p david'),
(30, 'chiquita@gmail.com', 'Test1'),
(31, 'chiquita@gmail.com', 'Teste1'),
(32, 'chiquita@gmail.com', 'Teste para o Hugo ver'),
(33, 'chiquita@gmail.com', 'teste123teste'),
(34, 'chiquita@gmail.com', 'testedpsdealteracoes'),
(35, 'dpaixao@gmail.com', 'Listas de Testes'),
(36, 'dpaixao@gmail.com', '123'),
(37, '1@1', 'd111'),
(38, 'dpaixao@gmail.com', 'Teste'),
(39, 'dpaixao@gmail.com', 'Teste'),
(40, 'manual@gmail.com', 'Manual de Utilizador'),
(41, 'dpaixao@gmail.com', 'Teste'),
(42, 'video@gmail.com', 'Carne'),
(43, 'video@gmail.com', 'Peixe'),
(44, 'video@gmail.com', 'Teste'),
(45, 'video@gmail.com', 'Teste'),
(46, 'video@gmail.com', 'Leite'),
(47, 'video@gmail.com', 'Leite'),
(48, 'video@gmail.com', 'Leite');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Lista_has_Produto`
--

CREATE TABLE `Lista_has_Produto` (
  `Lista_idLista` int(11) NOT NULL,
  `Produto_idProduto` int(11) NOT NULL,
  `quantidadeProduto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Lista_has_Produto`
--

INSERT INTO `Lista_has_Produto` (`Lista_idLista`, `Produto_idProduto`, `quantidadeProduto`) VALUES
(2, 4, 1),
(2, 8, 1),
(24, 4, 1),
(24, 8, 1),
(25, 4, 1),
(25, 8, 1),
(26, 4, 1),
(26, 8, 1),
(27, 3, 1),
(27, 4, 1),
(27, 5, 1),
(27, 8, 1),
(27, 9, 1),
(28, 4, 1),
(28, 8, 1),
(28, 9, 1),
(28, 11, 1),
(28, 12, 1),
(28, 13, 1),
(29, 2, 1),
(29, 4, 1),
(29, 5, 1),
(29, 7, 1),
(29, 8, 1),
(29, 10, 1),
(30, 2, 1),
(30, 3, 1),
(30, 4, 1),
(30, 5, 1),
(30, 7, 1),
(30, 8, 1),
(30, 10, 1),
(31, 4, 1),
(31, 8, 1),
(34, 2, 1),
(34, 3, 1),
(34, 3, 1),
(34, 3, 1),
(34, 3, 1),
(34, 2, 1),
(34, 2, 1),
(34, 3, 1),
(34, 4, 1),
(34, 5, 1),
(35, 2, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 2, 1),
(35, 2, 1),
(35, 3, 1),
(35, 4, 1),
(35, 5, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 5, 1),
(35, 5, 1),
(35, 4, 1),
(35, 5, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 4, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 9, 1),
(35, 5, 1),
(35, 5, 1),
(35, 5, 1),
(35, 5, 1),
(35, 5, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 2, 1),
(35, 2, 1),
(35, 2, 1),
(35, 4, 1),
(35, 8, 1),
(35, 5, 1),
(35, 4, 1),
(35, 3, 1),
(35, 5, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(35, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 3, 1),
(36, 4, 1),
(36, 5, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 4, 1),
(36, 5, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 2, 1),
(36, 2, 1),
(36, 4, 1),
(36, 8, 1),
(36, 5, 1),
(36, 4, 1),
(36, 3, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 2, 1),
(36, 3, 1),
(36, 4, 1),
(36, 5, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 4, 1),
(36, 5, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 2, 1),
(36, 2, 1),
(36, 4, 1),
(36, 8, 1),
(36, 5, 1),
(36, 4, 1),
(36, 3, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 2, 1),
(36, 3, 1),
(36, 4, 1),
(36, 5, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 4, 1),
(36, 5, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 4, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 9, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 2, 1),
(36, 2, 1),
(36, 2, 1),
(36, 4, 1),
(36, 8, 1),
(36, 5, 1),
(36, 4, 1),
(36, 3, 1),
(36, 5, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(36, 3, 1),
(37, 1, 1),
(37, 4, 1),
(37, 31, 1),
(38, 1, 1),
(38, 1, 1),
(38, 2, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 2, 1),
(38, 2, 1),
(38, 3, 1),
(38, 4, 1),
(38, 5, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 5, 1),
(38, 5, 1),
(38, 4, 1),
(38, 5, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 4, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 9, 1),
(38, 5, 1),
(38, 5, 1),
(38, 5, 1),
(38, 5, 1),
(38, 5, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 2, 1),
(38, 2, 1),
(38, 2, 1),
(38, 4, 1),
(38, 8, 1),
(38, 5, 1),
(38, 4, 1),
(38, 3, 1),
(38, 5, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(38, 3, 1),
(39, 8, 1),
(39, 7, 1),
(39, 2, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 2, 1),
(39, 2, 1),
(39, 3, 1),
(39, 4, 1),
(39, 5, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 5, 1),
(39, 5, 1),
(39, 4, 1),
(39, 5, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 4, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 9, 1),
(39, 5, 1),
(39, 5, 1),
(39, 5, 1),
(39, 5, 1),
(39, 5, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 2, 1),
(39, 2, 1),
(39, 2, 1),
(39, 4, 1),
(39, 8, 1),
(39, 5, 1),
(39, 4, 1),
(39, 3, 1),
(39, 5, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(39, 3, 1),
(40, 8, 1),
(40, 8, 1),
(40, 7, 1),
(40, 1, 1),
(40, 2, 1),
(41, 8, 1),
(41, 7, 1),
(41, 2, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 2, 1),
(41, 2, 1),
(41, 3, 1),
(41, 4, 1),
(41, 5, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 5, 1),
(41, 5, 1),
(41, 4, 1),
(41, 5, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 4, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 9, 1),
(41, 5, 1),
(41, 5, 1),
(41, 5, 1),
(41, 5, 1),
(41, 5, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 2, 1),
(41, 2, 1),
(41, 2, 1),
(41, 4, 1),
(41, 8, 1),
(41, 5, 1),
(41, 4, 1),
(41, 3, 1),
(41, 5, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(41, 3, 1),
(42, 8, 1),
(42, 7, 1),
(42, 11, 1),
(42, 18, 1),
(42, 10, 1),
(42, 9, 1),
(42, 9, 1),
(43, 8, 1),
(43, 7, 1),
(43, 11, 1),
(43, 18, 1),
(43, 10, 1),
(43, 9, 1),
(43, 9, 1),
(44, 7, 1),
(44, 11, 1),
(44, 18, 1),
(44, 10, 1),
(44, 9, 1),
(44, 9, 1),
(44, 1, 1),
(44, 3, 1),
(45, 18, 1),
(45, 10, 1),
(45, 9, 1),
(45, 9, 1),
(45, 1, 1),
(45, 3, 1),
(45, 2, 1),
(46, 10, 1),
(46, 1, 1),
(46, 3, 1),
(46, 2, 1),
(46, 1, 1),
(46, 10, 1),
(47, 3, 1),
(47, 2, 1),
(47, 10, 1),
(47, 2, 1),
(48, 3, 1),
(48, 2, 1),
(48, 8, 1),
(48, 7, 1),
(48, 11, 1),
(48, 18, 1),
(48, 9, 1),
(48, 9, 1),
(48, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `MarcaProduto`
--

CREATE TABLE `MarcaProduto` (
  `idMarcaProduto` int(11) NOT NULL,
  `marcaProduto` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `MarcaProduto`
--

INSERT INTO `MarcaProduto` (`idMarcaProduto`, `marcaProduto`) VALUES
(1, 'Gresso'),
(2, 'Matinal'),
(5, 'Fastio'),
(9, 'Kitkat'),
(10, 'Milka'),
(15, 'Angus'),
(17, 'Pescanova');

-- --------------------------------------------------------

--
-- Estrutura da tabela `MoradaSupermercado`
--

CREATE TABLE `MoradaSupermercado` (
  `idMoradaSupermercado` int(11) NOT NULL,
  `coords` point DEFAULT NULL,
  `Supermercado_idSupermercado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `MoradaSupermercado`
--

INSERT INTO `MoradaSupermercado` (`idMoradaSupermercado`, `coords`, `Supermercado_idSupermercado`) VALUES
(1, '\0\0\0\0\0\0\0«Iaﬁ„ZC@ıÖêÛ˛O\"¿', 1),
(2, '\0\0\0\0\0\0\0˜¨k¥ZC@3lîıõY\"¿', 1),
(3, '\0\0\0\0\0\0\0⁄˛ïï&[C@ßìlu9E\"¿', 1),
(4, '\0\0\0\0\0\0\0⁄;£≠J\\C@˘¢=^HO\"¿', 1),
(5, '\0\0\0\0\0\0\0©i”PC@Ø?8üZ\"¿', 2),
(6, '\0\0\0\0\0\0\0g¥UIdeC@§ƒÆÌÌn\"¿', 2),
(7, '\0\0\0\0\0\0\0>≥$@MeC@UÖ]5\"¿', 2),
(8, '\0\0\0\0\0\0\0G»@û]bC@Q0c\n÷†\"¿', 2),
(9, '\0\0\0\0\0\0\0Ôç!\08ZC@°ñ±°[\"¿', 3),
(10, '\0\0\0\0\0\0\0ÛV]áj\\C@¸6ƒxÕC\"¿', 3),
(11, '\0\0\0\0\0\0\0ı€◊Ås^C@∂ilØM\"¿', 3),
(12, '\0\0\0\0\0\0\0RÓ>«G_C@÷\ZJÌEL\"¿', 3),
(13, '\0\0\0\0\0\0\0§4õ«abC@\'Öyè3U\"¿', 4),
(14, '\0\0\0\0\0\0\0K∫†^C@Â%ˇìøs\"¿', 4),
(15, '\0\0\0\0\0\0\0ñ=	lŒYC@ÑEEúN≤\"¿', 4),
(16, '\0\0\0\0\0\0\0PËkC@eâŒ2ã0\"¿', 4),
(17, '\0\0\0\0\0\0\0m«‘]ŸaC@“\0ﬁ	Z\"¿', 5),
(18, '\0\0\0\0\0\0\07‡Û√]C@∂h⁄VK\"¿', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `PrecoProduto`
--

CREATE TABLE `PrecoProduto` (
  `precoProduto` double NOT NULL,
  `Supermercado_idSupermercado` int(11) NOT NULL,
  `Produto_idProduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `PrecoProduto`
--

INSERT INTO `PrecoProduto` (`precoProduto`, `Supermercado_idSupermercado`, `Produto_idProduto`) VALUES
(1.5, 1, 1),
(1.3, 1, 2),
(1.5, 1, 3),
(5, 1, 4),
(0.5, 1, 5),
(2.5, 1, 6),
(1.5, 1, 7),
(3.5, 1, 8),
(2.5, 1, 9),
(1.5, 1, 10),
(5.5, 1, 11),
(1.5, 1, 12),
(2.5, 1, 13),
(1.2, 1, 14),
(1.5, 1, 15),
(1.5, 1, 16),
(5, 1, 17),
(2.5, 1, 18),
(2.5, 1, 19),
(3.49, 1, 20),
(4.29, 1, 21),
(3.89, 1, 22),
(3.99, 1, 23),
(3.49, 1, 24),
(0.99, 1, 25),
(0.79, 1, 26),
(0.79, 1, 27),
(2.99, 1, 28),
(2.99, 1, 29),
(0.79, 1, 30),
(1.99, 1, 31),
(1.99, 1, 32),
(1.99, 1, 33),
(1.99, 1, 34),
(2.99, 1, 35),
(2.29, 1, 36),
(2.89, 1, 37),
(2.89, 1, 38),
(4.99, 1, 39),
(3.59, 1, 40),
(5.19, 1, 41),
(3, 2, 1),
(2, 2, 2),
(4, 2, 3),
(3, 2, 4),
(0.6, 2, 5),
(3, 2, 6),
(3, 2, 7),
(3, 2, 8),
(3.3, 2, 9),
(3, 2, 10),
(6, 2, 11),
(3, 2, 12),
(3, 2, 13),
(1.9, 2, 14),
(2, 2, 15),
(2, 2, 16),
(4, 2, 17),
(2, 2, 18),
(3, 2, 19),
(3.99, 2, 20),
(3.99, 2, 21),
(4.09, 2, 22),
(4.59, 2, 23),
(3.99, 2, 24),
(0.79, 2, 25),
(0.79, 2, 26),
(0.79, 2, 27),
(3.09, 2, 28),
(3.09, 2, 29),
(0.79, 2, 30),
(1.89, 2, 31),
(1.89, 2, 32),
(1.89, 2, 33),
(1.89, 2, 34),
(2.99, 2, 35),
(2.49, 2, 36),
(2.99, 2, 37),
(2.99, 2, 38),
(5.59, 2, 39),
(3.29, 2, 40),
(5.89, 2, 41),
(2.3, 3, 1),
(3, 3, 2),
(3.3, 3, 3),
(3.3, 3, 4),
(1, 3, 5),
(2.3, 3, 6),
(2.3, 3, 7),
(4.3, 3, 8),
(2.3, 3, 9),
(2.3, 3, 10),
(4.3, 3, 11),
(3.3, 3, 12),
(2.3, 3, 13),
(1.3, 3, 14),
(1.3, 3, 15),
(1.3, 3, 16),
(6.3, 3, 17),
(2.3, 3, 18),
(3.3, 3, 19),
(3.49, 3, 20),
(4.49, 3, 21),
(4.39, 3, 22),
(3.89, 3, 23),
(3.49, 3, 24),
(0.99, 3, 25),
(0.75, 3, 26),
(0.75, 3, 27),
(2.99, 3, 28),
(2.99, 3, 29),
(0.75, 3, 30),
(1.99, 3, 31),
(1.99, 3, 32),
(1.99, 3, 33),
(1.99, 3, 34),
(3.19, 3, 35),
(3.49, 3, 36),
(3.09, 3, 37),
(3.09, 3, 38),
(5.29, 3, 39),
(3.39, 3, 40),
(5.59, 3, 41),
(1.2, 4, 1),
(1.2, 4, 2),
(1.9, 4, 3),
(3.2, 4, 4),
(1.2, 4, 5),
(2.2, 4, 6),
(1.2, 4, 7),
(4.2, 4, 8),
(3.2, 4, 9),
(1.2, 4, 10),
(5.2, 4, 11),
(2.2, 4, 12),
(1.2, 4, 13),
(1.2, 4, 14),
(1.2, 4, 15),
(1.2, 4, 16),
(5.2, 4, 17),
(2.2, 4, 18),
(3.2, 4, 19),
(3.79, 4, 20),
(4.09, 4, 21),
(4.29, 4, 22),
(4.09, 4, 23),
(3.79, 4, 24),
(0.89, 4, 25),
(0.89, 4, 26),
(0.89, 4, 27),
(2.89, 4, 28),
(2.89, 4, 29),
(0.89, 4, 30),
(2.29, 4, 31),
(2.29, 4, 32),
(2.29, 4, 33),
(2.29, 4, 34),
(2.89, 4, 35),
(2.59, 4, 36),
(2.99, 4, 37),
(2.99, 4, 38),
(5.89, 4, 39),
(3.49, 4, 40),
(6.49, 4, 41),
(1.7, 5, 1),
(0.7, 5, 2),
(2.7, 5, 3),
(4.7, 5, 4),
(0.7, 5, 5),
(2.7, 5, 6),
(1.7, 5, 7),
(3.7, 5, 8),
(2.7, 5, 9),
(1.7, 5, 10),
(4.7, 5, 11),
(1.7, 5, 12),
(1.7, 5, 13),
(1.7, 5, 14),
(2.7, 5, 15),
(1.7, 5, 16),
(4.7, 5, 17),
(1.7, 5, 18),
(2.9, 5, 19),
(3.89, 5, 20),
(4.39, 5, 21),
(3.89, 5, 22),
(4.19, 5, 23),
(3.49, 5, 24),
(0.99, 5, 25),
(0.79, 5, 26),
(0.79, 5, 27),
(3.09, 5, 28),
(3.09, 5, 29),
(0.79, 5, 30),
(1.99, 5, 31),
(1.99, 5, 32),
(1.99, 5, 33),
(1.99, 5, 34),
(3.09, 5, 35),
(3.39, 5, 36),
(2.99, 5, 37),
(2.99, 5, 38),
(4.89, 5, 39),
(3.79, 5, 40),
(4.99, 5, 41);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Produto`
--

CREATE TABLE `Produto` (
  `idProduto` int(11) NOT NULL,
  `nomeProduto` varchar(100) DEFAULT NULL,
  `descricaoProduto` varchar(1000) DEFAULT NULL,
  `imagemProduto` varchar(1000) DEFAULT NULL,
  `idTipoProduto` int(11) NOT NULL,
  `idMarcaProduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Produto`
--

INSERT INTO `Produto` (`idProduto`, `nomeProduto`, `descricaoProduto`, `imagemProduto`, `idTipoProduto`, `idMarcaProduto`) VALUES
(1, 'Leite UHT Meio Gordo', '1 litro de leite UHT da marca Gresso', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2210968(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 1, 1),
(2, 'Leite Achocolatado', 'Pack de 4 embalagens de 200ml de leite achocolatado da marca Gresso', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4860742(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 1, 1),
(3, 'Leite UHT Meio Gordo', '1 litro de leite UHT meio gordo da marca Matinal', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2210999(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 1, 2),
(4, 'Leite UHT Selecionado Leve', '1 litro de leite UHT selecionado leve da marca Matinal', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6225480(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 1, 2),
(5, '√Ågua sem G√°s Garraf√£o', 'Garraf√£o de 6 litros de √°gua sem g√°s, da marca Fastio', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4760977(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 2, 5),
(6, 'Snack de Chocolate de Leite Kitkat', 'Snack de 41,5g de chocolate de leite da Kitkat', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5762193(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(7, 'Vazia de Novilho', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6870584(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(8, 'Lombo da P√°', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6650364(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(9, 'Picanha Bovino', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6818923(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(10, 'Alcatra Novilho', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6870176(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(11, 'Jardineira(Peito) Novilho', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6870576(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(12, 'Bife Bavette', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6650398(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(13, 'Estufar (Chamb√£o) Novilho', 'Os nossos profissionais, com forma√ß√£o especializada, selecionam a carne mais fresca para si. Garantimos tamb√©m o armazenamento e transporte dos artigos a temperaturas adequadas para melhor conserva√ß√£o.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6870574(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 15),
(14, 'Asas de Frango', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2163109(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(15, 'Perninha de Frango - Familiar', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2428223(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(16, 'Bifes de Frango Extrafino', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2163098(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(17, 'Galinha Inteira', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2163121(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(18, 'Coxas de Frango', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2163100(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(19, 'Frango para Churrasco', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2163118(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 18),
(20, 'Espetadas de Pato Congeladas', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5824502(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 19),
(21, 'Perna de Pato', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5034416(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 19),
(22, 'Peito de Pato', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5034441(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 19),
(23, 'Peito de Pato Congelado', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4283242(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 19),
(24, 'Perna de Pato Congelada', 'Produto embalado.', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4283251(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 4, 19),
(25, 'Snack Chocolate KitKat Chunky', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5824254(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(26, 'Snack Chocolate White Kit Kat', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5825458(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(27, 'Snack de Chocolate KitKat Green Tea Matcha', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6896595(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(28, 'Snack de Chocolate de Leite Bites KitKat', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6194413(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(29, 'Snack de Chocolate de Leite Bites com Manteiga de Amendoim KitKat', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6194417(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(30, 'Snack de Chocolate Kit Kat Ruby Cocoa Beans', 'Um snack perfeito para o teu break', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6590836(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 9),
(31, 'Tablete Chocolate Branco', 'Chocolate Branco Milka emb. 100 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2005652(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(32, 'Tablete Chocolate Oreo Brownie', 'Chocolate Brownie Milka emb. 100 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6813611(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(33, 'Tablete Chocolate Daim', 'Chocolate Daim Milka emb. 100 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4389791(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(34, 'Tablete Chocolate Creme de Cacau', 'Chocolate Creme de Cacau Milka emb. 100 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=3791939(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(35, 'Topping de Chocolate Milka', 'Topping Chocolate', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=6114486(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(36, 'Tablete Chocolate Jelly', 'Chocolate Jelly emb. 250 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5137484(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(37, 'Tablete Chocolate Leite com Bolacha', 'Chocolate Leite com Bolacha emb. 300 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2362888(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(38, 'Tablete Chocolate Oreo', 'Chocolate Oreo emb. 300 gr', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5474192(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 3, 10),
(39, 'Choco Limpo Ultracongelado', 'Choco Limpo Ultracongelado Pescanova', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4277919(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 5, 17),
(40, 'Redondos de Pescada do Cabo', 'Redondos de Pescada do Cabo Pescanova', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5795381(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 5, 17),
(41, 'Choquinhos Limpos no Ponto de Sal Ultracongelados', 'Choquinhos Limpos no Ponto de Sal Ultracongelados Pescanova', 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=5833842(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=150&height=150&defaultOptions=1', 5, 17);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Supermercado`
--

CREATE TABLE `Supermercado` (
  `idSupermercado` int(11) NOT NULL,
  `nomeMercado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Supermercado`
--

INSERT INTO `Supermercado` (`idSupermercado`, `nomeMercado`) VALUES
(1, 'Pingo Doce'),
(2, 'Intermache'),
(3, 'Lidl'),
(4, 'Aldi'),
(5, 'Continente');

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoProduto`
--

CREATE TABLE `TipoProduto` (
  `idTipoProduto` int(11) NOT NULL,
  `nomeTipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `TipoProduto`
--

INSERT INTO `TipoProduto` (`idTipoProduto`, `nomeTipo`) VALUES
(1, 'Leite'),
(2, '√Ågua'),
(3, 'Chocolates'),
(4, 'Carne'),
(5, 'Peixe');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Utilizador`
--

CREATE TABLE `Utilizador` (
  `emailUtilizador` varchar(45) NOT NULL,
  `nomeUtilizador` varchar(45) DEFAULT NULL,
  `passwordUtilizador` varchar(45) DEFAULT NULL,
  `coordsUtilizador` point DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Utilizador`
--

INSERT INTO `Utilizador` (`emailUtilizador`, `nomeUtilizador`, `passwordUtilizador`, `coordsUtilizador`) VALUES
('1@1', '1', '1', NULL),
('andre@gmail.com', 'andre', '12345', NULL),
('chiquita@gmail.com', 'Francisco Cordeiro', '12345', NULL),
('davidfsilva9@hotmail.com', 'davidfsilva9', 'acfsdfcs4', NULL),
('dpaixa1o@gmail.com', 'david', '12345', NULL),
('dpaixao@gmail.com', 'David Paix√£o', '12345', NULL),
('hugovarela98@gmail.com', 'Hugo Varela', '12345', NULL),
('manual@gmail.com', 'Manual de Utilizador', '12345', NULL),
('miguel@gmail.com', 'Miguel Teste', '12345', NULL),
('moozdzn@gmail.com', 'Diogo Santos', '12345', NULL),
('t@t', 'test', 't', NULL),
('teste@gmail.com', 'teste', '12345', NULL),
('video@gmail.com', 'VIdeo', '12345', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Utilizador_has_Lista`
--

CREATE TABLE `Utilizador_has_Lista` (
  `Utilizador_emailUtilizador` varchar(45) NOT NULL,
  `Lista_idLista` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Utilizador_has_Lista`
--

INSERT INTO `Utilizador_has_Lista` (`Utilizador_emailUtilizador`, `Lista_idLista`) VALUES
('andre@gmail.com', 24),
('davidfsilva9@hotmail.com', 24),
('dpaixao@gmail.com', 24),
('hugovarela98@gmail.com', 24),
('moozdzn@gmail.com', 24),
('andre@gmail.com', 25),
('andre@gmail.com', 28),
('chiquita@gmail.com', 29),
('andre@gmail.com', 31),
('dpaixao@gmail.com', 31),
('dpaixao@gmail.com', 34),
('manual@gmail.com', 35),
('video@gmail.com', 35),
('manual@gmail.com', 38),
('chiquita@gmail.com', 39),
('dpaixao@gmail.com', 42);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CarrinhoQuantidade`
--
ALTER TABLE `CarrinhoQuantidade`
  ADD KEY `fk_CarrinhoQuantidade_Produto1_idx` (`idProduto`),
  ADD KEY `fk_CarrinhoQuantidade_Utilizador1` (`emailUtilizador`);

--
-- Indexes for table `Lista`
--
ALTER TABLE `Lista`
  ADD PRIMARY KEY (`idLista`);

--
-- Indexes for table `Lista_has_Produto`
--
ALTER TABLE `Lista_has_Produto`
  ADD KEY `fk_Lista_has_Produto_Produto1_idx` (`Produto_idProduto`),
  ADD KEY `fk_Lista_has_Produto_Lista1_idx` (`Lista_idLista`);

--
-- Indexes for table `MarcaProduto`
--
ALTER TABLE `MarcaProduto`
  ADD PRIMARY KEY (`idMarcaProduto`);

--
-- Indexes for table `MoradaSupermercado`
--
ALTER TABLE `MoradaSupermercado`
  ADD PRIMARY KEY (`idMoradaSupermercado`,`Supermercado_idSupermercado`),
  ADD UNIQUE KEY `idMoradaSupermercado_UNIQUE` (`idMoradaSupermercado`),
  ADD KEY `fk_MoradaSupermercado_Supermercado_idx` (`Supermercado_idSupermercado`);

--
-- Indexes for table `PrecoProduto`
--
ALTER TABLE `PrecoProduto`
  ADD PRIMARY KEY (`Supermercado_idSupermercado`,`Produto_idProduto`),
  ADD KEY `fk_PrecoProduto_Produto1_idx` (`Produto_idProduto`);

--
-- Indexes for table `Produto`
--
ALTER TABLE `Produto`
  ADD PRIMARY KEY (`idProduto`,`idTipoProduto`,`idMarcaProduto`),
  ADD KEY `fk_Produto_TipoProduto1_idx` (`idTipoProduto`),
  ADD KEY `fk_Produto_MarcaProduto1_idx` (`idMarcaProduto`);

--
-- Indexes for table `Supermercado`
--
ALTER TABLE `Supermercado`
  ADD PRIMARY KEY (`idSupermercado`);

--
-- Indexes for table `TipoProduto`
--
ALTER TABLE `TipoProduto`
  ADD PRIMARY KEY (`idTipoProduto`);

--
-- Indexes for table `Utilizador`
--
ALTER TABLE `Utilizador`
  ADD PRIMARY KEY (`emailUtilizador`);

--
-- Indexes for table `Utilizador_has_Lista`
--
ALTER TABLE `Utilizador_has_Lista`
  ADD PRIMARY KEY (`Utilizador_emailUtilizador`,`Lista_idLista`),
  ADD KEY `fk_Utilizador_has_Lista_Lista1_idx` (`Lista_idLista`),
  ADD KEY `fk_Utilizador_has_Lista_Utilizador1_idx` (`Utilizador_emailUtilizador`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Lista`
--
ALTER TABLE `Lista`
  MODIFY `idLista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `CarrinhoQuantidade`
--
ALTER TABLE `CarrinhoQuantidade`
  ADD CONSTRAINT `fk_CarrinhoQuantidade_Produto1` FOREIGN KEY (`idProduto`) REFERENCES `Produto` (`idproduto`),
  ADD CONSTRAINT `fk_CarrinhoQuantidade_Utilizador1` FOREIGN KEY (`emailUtilizador`) REFERENCES `Utilizador` (`emailutilizador`);

--
-- Limitadores para a tabela `Lista_has_Produto`
--
ALTER TABLE `Lista_has_Produto`
  ADD CONSTRAINT `fk_Lista_has_Produto_Lista1` FOREIGN KEY (`Lista_idLista`) REFERENCES `Lista` (`idlista`),
  ADD CONSTRAINT `fk_Lista_has_Produto_Produto1` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto` (`idproduto`);

--
-- Limitadores para a tabela `MoradaSupermercado`
--
ALTER TABLE `MoradaSupermercado`
  ADD CONSTRAINT `fk_MoradaSupermercado_Supermercado` FOREIGN KEY (`Supermercado_idSupermercado`) REFERENCES `Supermercado` (`idsupermercado`);

--
-- Limitadores para a tabela `PrecoProduto`
--
ALTER TABLE `PrecoProduto`
  ADD CONSTRAINT `fk_PrecoProduto_Produto1` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto` (`idproduto`),
  ADD CONSTRAINT `fk_PrecoProduto_Supermercado1` FOREIGN KEY (`Supermercado_idSupermercado`) REFERENCES `Supermercado` (`idsupermercado`);

--
-- Limitadores para a tabela `Produto`
--
ALTER TABLE `Produto`
  ADD CONSTRAINT `fk_Produto_MarcaProduto1` FOREIGN KEY (`idMarcaProduto`) REFERENCES `MarcaProduto` (`idmarcaproduto`),
  ADD CONSTRAINT `fk_Produto_TipoProduto1` FOREIGN KEY (`idTipoProduto`) REFERENCES `TipoProduto` (`idtipoproduto`);

--
-- Limitadores para a tabela `Utilizador_has_Lista`
--
ALTER TABLE `Utilizador_has_Lista`
  ADD CONSTRAINT `fk_Utilizador_has_Lista_Lista1` FOREIGN KEY (`Lista_idLista`) REFERENCES `Lista` (`idlista`),
  ADD CONSTRAINT `fk_Utilizador_has_Lista_Utilizador1` FOREIGN KEY (`Utilizador_emailUtilizador`) REFERENCES `Utilizador` (`emailutilizador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

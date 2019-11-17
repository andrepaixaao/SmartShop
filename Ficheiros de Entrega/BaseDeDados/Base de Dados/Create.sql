-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema JsimuyOnoL
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `JsimuyOnoL` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `JsimuyOnoL` ;

-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`Lista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`Lista` (
  `idLista` INT(11) NOT NULL,
  `dataLista` DATE NOT NULL,
  `nomeLista` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idLista`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`Utilizador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`Utilizador` (
  `emailUtilizador` VARCHAR(45) NOT NULL,
  `nomeUtilizador` VARCHAR(45) NULL DEFAULT NULL,
  `passwordUtilizador` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`emailUtilizador`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`ListaUtilizador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`ListaUtilizador` (
  `emailUtilizador` VARCHAR(45) NOT NULL,
  `idLista` INT(11) NOT NULL,
  PRIMARY KEY (`emailUtilizador`, `idLista`),
  INDEX `fk_Utilizador_has_Lista_Lista1_idx` (`idLista` ASC) VISIBLE,
  INDEX `fk_Utilizador_has_Lista_Utilizador1_idx` (`emailUtilizador` ASC) VISIBLE,
  CONSTRAINT `fk_Utilizador_has_Lista_Lista1`
    FOREIGN KEY (`idLista`)
    REFERENCES `JsimuyOnoL`.`Lista` (`idLista`),
  CONSTRAINT `fk_Utilizador_has_Lista_Utilizador1`
    FOREIGN KEY (`emailUtilizador`)
    REFERENCES `JsimuyOnoL`.`Utilizador` (`emailUtilizador`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`MarcaProduto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`MarcaProduto` (
  `idMarcaProduto` INT(11) NOT NULL,
  `marcaProduto` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idMarcaProduto`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`Supermercado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`Supermercado` (
  `idSupermercado` INT(11) NOT NULL,
  `nomeMercado` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idSupermercado`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`MoradaSupermercado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`MoradaSupermercado` (
  `idMoradaSupermercado` INT(11) NOT NULL,
  `coordenadas` VARCHAR(45) NULL DEFAULT NULL,
  `Supermercado_idSupermercado` INT(11) NOT NULL,
  PRIMARY KEY (`idMoradaSupermercado`, `Supermercado_idSupermercado`),
  UNIQUE INDEX `idMoradaSupermercado_UNIQUE` (`idMoradaSupermercado` ASC) VISIBLE,
  UNIQUE INDEX `coordenadas_UNIQUE` (`coordenadas` ASC) VISIBLE,
  INDEX `fk_MoradaSupermercado_Supermercado_idx` (`Supermercado_idSupermercado` ASC) VISIBLE,
  CONSTRAINT `fk_MoradaSupermercado_Supermercado`
    FOREIGN KEY (`Supermercado_idSupermercado`)
    REFERENCES `JsimuyOnoL`.`Supermercado` (`idSupermercado`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`TipoProduto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`TipoProduto` (
  `idTipoProduto` INT(11) NOT NULL,
  `nomeTipo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idTipoProduto`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`Produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`Produto` (
  `idProduto` INT(11) NOT NULL,
  `nomeProduto` VARCHAR(45) NULL DEFAULT NULL,
  `descricaoProduto` VARCHAR(45) NULL DEFAULT NULL,
  `imagemProduto` TINYBLOB NULL DEFAULT NULL,
  `idTipoProduto` INT(11) NOT NULL,
  `idMarcaProduto` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idProduto`, `idTipoProduto`),
  INDEX `fk_Produto_TipoProduto1_idx` (`idTipoProduto` ASC) VISIBLE,
  INDEX `idMarcaProduto` (`idMarcaProduto` ASC) VISIBLE,
  CONSTRAINT `fk_Produto_TipoProduto1`
    FOREIGN KEY (`idTipoProduto`)
    REFERENCES `JsimuyOnoL`.`TipoProduto` (`idTipoProduto`),
  CONSTRAINT `idMarcaProduto`
    FOREIGN KEY (`idMarcaProduto`)
    REFERENCES `JsimuyOnoL`.`MarcaProduto` (`idMarcaProduto`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`PrecoProduto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`PrecoProduto` (
  `precoProduto` DOUBLE NOT NULL,
  `Supermercado_idSupermercado` INT(11) NOT NULL,
  `Produto_idProduto` INT(11) NOT NULL,
  PRIMARY KEY (`Supermercado_idSupermercado`, `Produto_idProduto`),
  INDEX `fk_PrecoProduto_Produto1_idx` (`Produto_idProduto` ASC) VISIBLE,
  CONSTRAINT `fk_PrecoProduto_Produto1`
    FOREIGN KEY (`Produto_idProduto`)
    REFERENCES `JsimuyOnoL`.`Produto` (`idProduto`),
  CONSTRAINT `fk_PrecoProduto_Supermercado1`
    FOREIGN KEY (`Supermercado_idSupermercado`)
    REFERENCES `JsimuyOnoL`.`Supermercado` (`idSupermercado`));


-- -----------------------------------------------------
-- Table `JsimuyOnoL`.`quantidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JsimuyOnoL`.`quantidade` (
  `Lista_idLista` INT(11) NOT NULL,
  `Produto_idProduto` INT(11) NOT NULL,
  `quantidade` INT(11) NOT NULL,
  PRIMARY KEY (`Lista_idLista`, `Produto_idProduto`, `quantidade`),
  INDEX `fk_Lista_has_Produto_Produto1_idx` (`Produto_idProduto` ASC, `quantidade` ASC) VISIBLE,
  INDEX `fk_Lista_has_Produto_Lista1_idx` (`Lista_idLista` ASC) VISIBLE,
  CONSTRAINT `fk_Lista_has_Produto_Lista1`
    FOREIGN KEY (`Lista_idLista`)
    REFERENCES `JsimuyOnoL`.`Lista` (`idLista`),
  CONSTRAINT `fk_Lista_has_Produto_Produto1`
    FOREIGN KEY (`Produto_idProduto` , `quantidade`)
    REFERENCES `JsimuyOnoL`.`Produto` (`idProduto` , `idTipoProduto`));


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

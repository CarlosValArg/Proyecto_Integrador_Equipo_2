-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema softwaresphere
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema softwaresphere
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `softwaresphere` DEFAULT CHARACTER SET utf8 COLLATE utf8_danish_ci ;
USE `softwaresphere` ;

-- -----------------------------------------------------
-- Table `softwaresphere`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softwaresphere`.`Usuarios` (
  `usuarioid` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `correo` VARCHAR(200) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`usuarioid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softwaresphere`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softwaresphere`.`Servicios` (
  `serviciosid` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `cotizacion` FLOAT UNSIGNED NOT NULL,
  PRIMARY KEY (`serviciosid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softwaresphere`.`Orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softwaresphere`.`Orden` (
  `ordenid` INT NOT NULL AUTO_INCREMENT,
  `fecha` VARCHAR(10) NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  `usuarioid` INT NOT NULL,
  PRIMARY KEY (`ordenid`, `usuarioid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softwaresphere`.`Servicios_has_Orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softwaresphere`.`Servicios_has_Orden` (
  `Servicios_serviciosid` INT NOT NULL,
  `Orden_ordenid` INT NOT NULL,
  `Orden_usuarioid` INT NOT NULL,
  PRIMARY KEY (`Servicios_serviciosid`, `Orden_ordenid`, `Orden_usuarioid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

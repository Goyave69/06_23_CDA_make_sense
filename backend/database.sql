CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema makesense
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema project3test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema project3test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project3test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `project3test` ;

-- -----------------------------------------------------
-- Table `project3test`.`makesense_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project3test`.`makesense_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `birthdate` DATE NOT NULL,
  `role` JSON NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project3test`.`decision`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project3test`.`decision` (
  `decision_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `deadline` DATE NOT NULL,
  `decision_content` TEXT NOT NULL,
  `organization_utility` TEXT NOT NULL,
  `decision_context` TEXT NOT NULL,
  `decision_benefits` TEXT NOT NULL,
  `decision_risks` TEXT NOT NULL,
  `progress_status` INT NOT NULL,
  `makesense_user_id` INT NOT NULL,
  PRIMARY KEY (`decision_id`),
  INDEX `makesense_user_id` (`makesense_user_id` ASC) VISIBLE,
  CONSTRAINT `decision_ibfk_1`
    FOREIGN KEY (`makesense_user_id`)
    REFERENCES `project3test`.`makesense_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project3test`.`survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project3test`.`survey` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `decision_id` INT NOT NULL,
  `comment_content` TEXT NOT NULL,
  `makesense_user_id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `makesense_user_id` (`makesense_user_id` ASC) VISIBLE,
  INDEX `decision_id` (`decision_id` ASC) VISIBLE,
  CONSTRAINT `survey_ibfk_1`
    FOREIGN KEY (`makesense_user_id`)
    REFERENCES `project3test`.`makesense_user` (`id`),
  CONSTRAINT `survey_ibfk_2`
    FOREIGN KEY (`decision_id`)
    REFERENCES `project3test`.`decision` (`decision_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project3test`.`user_decision`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project3test`.`user_decision` (
  `user_id` INT NOT NULL,
  `decision_id` INT NOT NULL,
  `makesense_user_id` INT NOT NULL,
  PRIMARY KEY (`makesense_user_id`, `decision_id`),
  INDEX `decision_id` (`decision_id` ASC) VISIBLE,
  CONSTRAINT `user_decision_ibfk_1`
    FOREIGN KEY (`makesense_user_id`)
    REFERENCES `project3test`.`makesense_user` (`id`),
  CONSTRAINT `user_decision_ibfk_2`
    FOREIGN KEY (`decision_id`)
    REFERENCES `project3test`.`decision` (`decision_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Fixtures for testing purposes --------------------------------

INSERT INTO `project3test`.`makesense_user` (`id`, `firstname`, `lastname`, `email`, `password`, `birthdate`, `role`)
VALUES (1, 'John', 'Doe', 'johndoe@example.com', 'password123', '1990-05-15', '{"role": "admin"}'),
       (2, 'Jane', 'Smith', 'janesmith@example.com', 'abcdefg', '1985-12-03', '{"role": "user"}'),
       (3, 'Michael', 'Johnson', 'michaeljohnson@example.com', 'mysecretpassword', '1988-07-21', '{"role": "user, expert"}');
       (4, 'Robert', 'Smith', 'robertsmith@example.com', 'password789', '1995-03-10', '{"role": "expert"}'),
       (5, 'Alice', 'Johnson', 'alicejohnson@example.com', 'password123', '1992-08-21', '{"role": "expert"}');

INSERT INTO `project3test`.`decision` (`decision_id`, `title`, `deadline`, `decision_content`, `organization_utility`, `decision_context`, `decision_benefits`, `decision_risks`, `progress_status`, `makesense_user_id`)
VALUES (1, 'Project Proposal', '2023-06-30', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 0, 1),
       (2, 'Marketing Plan', '2023-07-15', 'Nullam consequat', 'Nullam consequat', 'Nullam consequat', 'Nullam consequat', 'Nullam consequat', 0, 2),
       (3, 'Financial Report', '2023-08-10', 'Sed ut perspiciatis', 'Sed ut perspiciatis', 'Sed ut perspiciatis', 'Sed ut perspiciatis', 'Sed ut perspiciatis', 0, 3);

INSERT INTO `project3test`.`survey` (`Id`, `user_id`, `decision_id`, `comment_content`, `makesense_user_id`)
VALUES (1, 1, 1, 'Lorem ipsum dolor', 1),
       (2, 2, 1, 'Nullam consequat', 2),
       (3, 3, 2, 'Sed ut perspiciatis', 3);

INSERT INTO `project3test`.`user_decision` (`user_id`, `decision_id`, `makesense_user_id`)
VALUES (1, 1, 1),
       (2, 2, 2),
       (3, 3, 3);

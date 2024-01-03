CREATE DATABASE IF NOT EXISTS `fullstack_app`;
USE `fullstack_app`;


DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `usertype`;



CREATE TABLE `usertype` 
(
    `id` int NOT NULL AUTO_INCREMENT,
    `type_user` varchar(45) DEFAULT NULL UNIQUE,
    PRIMARY KEY (`id`)
) 


ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;


CREATE TABLE `user` 
(
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(45) DEFAULT NULL,
    `email` varchar(45) DEFAULT NULL,
    `type_user_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`type_user_id`) REFERENCES type_user(`id`)
) 
ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;
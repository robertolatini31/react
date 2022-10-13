CREATE TABLE `quotes` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `quote` text,
    `views` bigint DEFAULT NULL,
    `characterID` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `characters` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `apiName` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `characters` (name, apiName) VALUES ('Philip J. Fry', 'Fry');
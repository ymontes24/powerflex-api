-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sprocket_factory_db
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `sprocket_factory_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sprocket_factory_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sprocket_factory_db`;

--
-- Table structure for table `factories`
--

DROP TABLE IF EXISTS `factories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factories`
--

LOCK TABLES `factories` WRITE;
/*!40000 ALTER TABLE `factories` DISABLE KEYS */;
INSERT INTO `factories` VALUES (1,'Factory A','Location A'),(2,'Factory B','Location B'),(3,'Factory C','Location C');
/*!40000 ALTER TABLE `factories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sprocket_production`
--

DROP TABLE IF EXISTS `sprocket_production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sprocket_production` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `factory_id` int(11) DEFAULT NULL,
  `actual_production` int(11) DEFAULT NULL,
  `goal_production` int(11) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `factory_id` (`factory_id`),
  CONSTRAINT `sprocket_production_ibfk_1` FOREIGN KEY (`factory_id`) REFERENCES `factories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprocket_production`
--

LOCK TABLES `sprocket_production` WRITE;
/*!40000 ALTER TABLE `sprocket_production` DISABLE KEYS */;
INSERT INTO `sprocket_production` VALUES (1,1,32,32,1611194818),(2,1,29,30,1611194878),(3,1,31,31,1611194938),(4,1,30,29,1611194998),(5,1,32,32,1611195058),(6,1,32,32,1611195118),(7,1,29,30,1611195178),(8,1,31,31,1611195238),(9,1,30,29,1611195298),(10,1,32,32,1611195358),(11,1,32,32,1611195418),(12,1,29,30,1611195478),(13,1,31,31,1611195538),(14,1,30,29,1611195598),(15,1,32,32,1611195658),(16,1,32,32,1611195718),(17,1,29,30,1611195778),(18,1,31,31,1611195838),(19,1,30,29,1611195898),(20,1,32,32,1611195958),(21,2,32,31,1611204818),(22,2,28,33,1611204878),(23,2,31,29,1611204938),(24,2,30,29,1611204998),(25,2,30,32,1611205058),(26,2,32,30,1611205118),(27,2,29,30,1611205178),(28,2,28,31,1611205238),(29,2,30,29,1611205298),(30,2,32,31,1611205358),(31,2,32,31,1611205418),(32,2,29,30,1611205478),(33,2,31,28,1611205538),(34,2,30,29,1611205598),(35,2,31,32,1611205658),(36,2,32,29,1611205718),(37,2,29,30,1611205778),(38,2,29,31,1611205838),(39,2,33,28,1611205898),(40,2,30,32,1611205958),(41,3,32,31,1611304818),(42,3,29,31,1611304878),(43,3,31,29,1611304938),(44,3,30,30,1611304998),(45,3,30,32,1611305058),(46,3,32,30,1611305118),(47,3,29,30,1611305178),(48,3,29,31,1611305238),(49,3,30,29,1611305298),(50,3,32,31,1611305358),(51,3,32,30,1611305418),(52,3,29,30,1611305478),(53,3,31,28,1611305538),(54,3,30,29,1611305598),(55,3,30,32,1611305658),(56,3,32,29,1611305718),(57,3,29,31,1611305778),(58,3,29,31,1611305838),(59,3,33,28,1611305898),(60,3,31,32,1611305958);
/*!40000 ALTER TABLE `sprocket_production` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sprockets`
--

DROP TABLE IF EXISTS `sprockets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sprockets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teeth` int(11) DEFAULT NULL,
  `pitch_diameter` decimal(5,2) DEFAULT NULL,
  `outside_diameter` decimal(5,2) DEFAULT NULL,
  `pitch` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprockets`
--

LOCK TABLES `sprockets` WRITE;
/*!40000 ALTER TABLE `sprockets` DISABLE KEYS */;
INSERT INTO `sprockets` VALUES (1,5,5.00,6.00,1.00),(2,5,5.00,6.00,1.00),(3,5,5.00,6.00,1.00),(4,25,1.50,2.50,0.50),(5,10,1.50,2.50,0.50),(6,10,1.50,2.50,1.00),(7,10,1.50,2.50,1.20),(8,10,1.50,2.50,1.30),(9,10,1.50,2.50,1.30),(10,10,5.00,6.00,1.00);
/*!40000 ALTER TABLE `sprockets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `powerflex`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `powerflex` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `powerflex`;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-09 12:10:39

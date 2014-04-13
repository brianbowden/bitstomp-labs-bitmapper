/* This table contains user IDs from the original production instance.
   This must be modified in order to run on a new database. */

DROP TABLE IF EXISTS `grid_pattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grid_pattern` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `code` longtext NOT NULL,
  `size` int(11) NOT NULL,
  `creationDate` datetime NOT NULL,
  `owner_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `grid_pattern_5d52dd10` (`owner_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grid_pattern`
--

LOCK TABLES `grid_pattern` WRITE;
/*!40000 ALTER TABLE `grid_pattern` DISABLE KEYS */;
INSERT INTO `grid_pattern` VALUES (1,'Test',' [  [ 5,3 ] , [ 6,3 ] , [ 7,3 ] , [ 8,3 ]  ] ',4,'2011-04-03 20:21:48',3),(2,'Bitstomp Logo',' [  [ 3,3, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ] ,4 ] ,-2, [ -1, [ 1,2,3,4 ] ,2,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 1,2,4 ] ,-2, [ 2,4 ] ,-3, [ 2,3,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 4,3, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2 ] ,-2, [ 1,2,4 ] ,-3, [ 1,2 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 5,3, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,3 ] ,-4, [ 1,4 ]  ]  ]  ] , [ 6,3, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 7,3, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,3 ] ,-3, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,3,4 ]  ]  ]  ] , [ 3,4, [ -1, [ 1,2,-3, [ 3 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3 ]  ] ,-4, [ -1, [ 3,4 ] ,-2, [ 3 ] ,-3, [ 1,3,4 ] ,-4, [ 1,3,4 ]  ]  ]  ] , [ 4,4, [ -1, [ 1,2,-3, [ 4 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 2,4 ] ,-2, [ 3,4 ] ,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1 ] ,-3, [ 4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 5,4, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 6,4, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 7,4, [ -1, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ]  ] ,-2, [ 1 ]  ]  ]  ] ',209,'2011-04-03 20:28:45',4),(3,'Eyes',' [  [ 3,3 ] , [ 4,3 ] , [ 5,3 ] , [ 8,3 ] , [ 9,3 ] , [ 10,3 ] , [ 3,4 ] , [ 4,4, [ -2, [ 3,4 ] ,-4, [ 1,2 ]  ]  ] , [ 5,4, [ -1, [ 3,4 ] ,-3, [ 1,2 ]  ]  ] , [ 6,4 ] , [ 7,4 ] , [ 8,4, [ -2, [ 3,4 ] ,-4, [ 1,2 ]  ]  ] , [ 9,4, [ -1, [ 3,4 ] ,-3, [ 1,2 ]  ]  ] , [ 10,4 ] , [ 3,5 ] , [ 4,5 ] , [ 5,5 ] , [ 8,5 ] , [ 9,5 ] , [ 10,5 ]  ] ',32,'2011-04-03 20:43:21',3),(4,'Mario',' [  [ 2,2, [ 2,3,4 ]  ] , [ 3,2, [ 1,2,3,4 ]  ] , [ 4,2, [ 1,2,3,4 ]  ] , [ 5,2, [ 3,4 ]  ] , [ 6,2, [ 3 ]  ] , [ 1,3, [ 4 ]  ] , [ 2,3, [ 1,2,4 ]  ] , [ 3,3, [ 1 ]  ] , [ 4,3, [ 2,4 ]  ] , [ 5,3, [ -2, [ 1,3,4 ]  ]  ] , [ 6,3, [ -1, [ 3,4 ] ,-2, [ 3 ] ,-4, [ 1,3,4 ]  ]  ] , [ 7,3, [ -3, [ 3 ]  ]  ] , [ 1,4, [ 2,4 ]  ] , [ 2,4, [ -2, [ 1,2,3,4 ] ,3 ]  ] , [ 3,4, [ 1 ]  ] , [ 4,4, [ 4 ]  ] , [ 5,4, [ 1,3,4 ]  ] , [ 6,4, [ 3,-4, [ 1,2 ]  ]  ] , [ 7,4, [ -1, [ 1,3 ] ,-3, [ 1 ]  ]  ] , [ 2,5, [ -1, [ 2,4 ] ,3,4 ]  ] , [ 3,5, [ 4 ]  ] , [ 4,5, [ 3,4 ]  ] , [ 5,5, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 6,5, [ -1, [ 1,3 ] ,-3, [ 1 ]  ]  ] , [ 1,6, [ 2,3,4 ]  ] , [ 2,6, [ 1,2,3,4 ]  ] , [ 3,6, [ 2 ]  ] , [ 4,6, [ 1 ]  ] , [ 5,6, [ 1,2,3,4 ]  ] , [ 6,6, [ 1,3,4 ]  ] , [ 0,7, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ] , [ 2,7, [ 1,-4, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,7, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,7, [ -2, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 5,7, [ 2,-3, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 7,7, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ] , [ 0,8, [ -2, [ 2,4 ]  ]  ] , [ 1,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 2,8, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ]  ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,8, [ -4, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 4,8, [ -3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,8, [ -2, [ -1, [ 1,2 ] ,-2, [ 1,2,4 ] ,-4, [ 2,4 ]  ] ,-4, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 6,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 7,8, [ -1, [ 1,3 ]  ]  ] , [ 1,9, [ -4, [ 1,2,3,4 ]  ]  ] , [ 2,9, [ -1, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,3,4 ]  ] , [ 3,9, [ -1, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,9, [ -2, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,9, [ -1, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ] ,3,4 ]  ] , [ 6,9, [ -3, [ 1,2,3,4 ]  ]  ] , [ 1,10, [ 1,2 ]  ] , [ 2,10, [ 1,2 ]  ] , [ 5,10, [ 1,2 ]  ] , [ 6,10, [ 1,2 ]  ]  ] ',219,'2011-04-04 07:20:46',3),(5,'Mario v2',' [  [ 2,2, [ -2, [ -1, [ 2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ]  ] ,-3, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -1, [ 1 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 3,2, [ -1, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-2, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 4,2, [ -1, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-2, [ -1, [ 1,2 ] ,-2, [ 1,4 ] ,-4, [ 2,4 ]  ] ,-3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -2, [ 2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,2, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -1, [ 1,2 ] ,-2, [ 1,2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 6,2, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 1,3, [ 4 ]  ] , [ 2,3, [ 1,2,4 ]  ] , [ 3,3, [ 1 ]  ] , [ 4,3, [ 2,4 ]  ] , [ 5,3, [ -2, [ 1,3,4 ]  ]  ] , [ 6,3, [ -1, [ 3,4 ] ,-2, [ -3, [ 3 ]  ] ,-4, [ 1,3,4 ]  ]  ] , [ 7,3, [ -3, [ -3, [ 3 ]  ]  ]  ] , [ 1,4, [ 2,4 ]  ] , [ 2,4, [ -2, [ 1,2,3,4 ] ,3 ]  ] , [ 3,4, [ 1 ]  ] , [ 4,4, [ 4 ]  ] , [ 5,4, [ 1,3,4 ]  ] , [ 6,4, [ 3,-4, [ 1,-2, [ 1,2,3 ]  ]  ]  ] , [ 7,4, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 2,5, [ -1, [ 2,4 ] ,3,4 ]  ] , [ 3,5, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,4 ]  ] , [ 4,5, [ 3,4 ]  ] , [ 5,5, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 6,5, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 1,6, [ 2,3,4 ]  ] , [ 2,6, [ 1,2,3,4 ]  ] , [ 3,6, [ 2 ]  ] , [ 4,6, [ 1 ]  ] , [ 5,6, [ 1,2,3,4 ]  ] , [ 6,6, [ 1,3,4 ]  ] , [ 0,7, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ] , [ 2,7, [ 1,-4, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,7, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,7, [ -2, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 5,7, [ 2,-3, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 7,7, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ] , [ 0,8, [ -2, [ 2,4 ] ,-4, [ -2, [ 2 ]  ]  ]  ] , [ 1,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 2,8, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ]  ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,8, [ -4, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 4,8, [ -3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,8, [ -2, [ -1, [ 1,2 ] ,-2, [ 1,2,4 ] ,-4, [ 2,4 ]  ] ,-4, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 6,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 7,8, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 1,9, [ -4, [ 1,2,3,4 ]  ]  ] , [ 2,9, [ -1, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,3,4 ]  ] , [ 3,9, [ -1, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,9, [ -2, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,9, [ -1, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ] ,3,4 ]  ] , [ 6,9, [ -3, [ 1,2,3,4 ]  ]  ] , [ 1,10, [ 1,2 ]  ] , [ 2,10, [ 1,2 ]  ] , [ 5,10, [ 1,2 ]  ] , [ 6,10, [ 1,2 ]  ]  ] ',295,'2011-04-04 07:29:23',3),(6,'Test Drawing',' [  [ 5,3, [ -4, [ -4, [ 4 ]  ]  ]  ] , [ 6,3 ] , [ 4,4 ] , [ 5,4 ] , [ 6,4, [ 1,-2, [ 1 ] ,-3, [ 1 ]  ]  ] , [ 3,5 ] , [ 4,6 ] , [ 5,6 ] , [ 6,6, [ -1, [ 3 ] ,3,-4, [ 3 ]  ]  ] , [ 5,7, [ -2, [ -2, [ 2 ]  ]  ]  ] , [ 6,7 ]  ] ',15,'2011-04-05 15:23:01',1),(7,'Question Mark',' [  [ 6,1, [ -4, [ 2,3 ]  ]  ] , [ 7,1, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 8,1, [ -3, [ 1,-2, [ 1,3,4 ] ,-3, [ 1,2,4 ] ,4 ] ,-4, [ -3, [ 1,3,4 ]  ]  ]  ] , [ 6,2, [ -1, [ 2,-3, [ 2,4 ]  ] ,-3, [ -1, [ 2,4 ]  ]  ]  ] , [ 8,2, [ -1, [ -2, [ 1,2,4 ]  ] ,-2, [ 1,-2, [ 1,3,4 ] ,-3, [ 1,2,4 ] ,4 ] ,-4, [ 2,4 ]  ]  ] , [ 9,2, [ -1, [ -3, [ 1,3,4 ]  ] ,-3, [ 1,3 ]  ]  ] , [ 8,3, [ -2, [ 2,-3, [ 4 ] ,4 ] ,-3, [ -2, [ 4 ] ,-3, [ 4 ] ,4 ] ,-4, [ 1,2,3,4 ]  ]  ] , [ 9,3, [ -1, [ 1,3 ] ,-3, [ 1,-3, [ 1 ]  ]  ]  ] , [ 7,4, [ -2, [ -2, [ 4 ] ,-3, [ 4 ] ,4 ] ,-3, [ -2, [ 4 ] ,4 ] ,-4, [ 1,2,3,4 ]  ]  ] , [ 8,4, [ -1, [ 1,2,3,4 ] ,-2, [ 1,-2, [ 1 ] ,-3, [ 1 ]  ] ,-3, [ 1,-2, [ 1 ] ,-3, [ 1 ]  ]  ]  ] , [ 7,5, [ -1, [ -1, [ 2,4 ] ,2,-3, [ 2,4 ] ,4 ] ,-2, [ 1,-2, [ 1,3 ] ,3,-4, [ 1,3 ]  ] ,-3, [ -1, [ 2,4 ] ,2,-3, [ 2,4 ] ,4 ] ,-4, [ 1,-2, [ 1,3 ] ,3,-4, [ 1,3 ]  ]  ]  ] , [ 7,6, [ -1, [ -2, [ 1,2,4 ]  ] ,-2, [ -1, [ 1,2,3 ]  ]  ]  ] , [ 7,7, [ -1, [ -1, [ 4 ] ,2,3,4 ] ,-2, [ 1,-2, [ 3 ] ,3,4 ] ,-3, [ 1,2,-3, [ 2 ] ,4 ] ,-4, [ 1,2,3,-4, [ 1 ]  ]  ]  ]  ] ',119,'2011-04-08 13:22:32',1),(8,'Test Pattern',' [  [ 7,3 ] , [ 9,3 ] , [ 8,4 ] , [ 10,4 ] , [ 7,5, [ 2,-3, [ 2,3 ]  ]  ] , [ 11,5 ] , [ 9,6 ] , [ 10,6 ] , [ 8,7 ] , [ 10,7 ]  ] ',12,'2011-04-12 15:03:29',3),(9,'Weird Drawing',' [  [ 4,2 ] , [ 7,2 ] , [ 9,2 ] , [ 5,3 ] , [ 6,3 ] , [ 8,3 ] , [ 10,3 ] , [ 7,4 ] , [ 9,4 ] , [ 6,5, [ 1,-2, [ 2,3,-4, [ 1 ]  ] ,4 ]  ] , [ 8,5 ]  ] ',15,'2011-04-27 19:29:55',3),(10,'Randomness',' [  [ 4,1, [ -4, [ 1,4 ]  ]  ] , [ 5,2, [ 1,4 ]  ] , [ 11,2 ] , [ 6,3 ] , [ 8,3 ] , [ 7,4, [ 1,4 ]  ] , [ 8,5, [ -1, [ 1,4 ] ,-4, [ 1,4 ]  ]  ] , [ 4,6 ] , [ 5,7 ] , [ 6,8 ] , [ 8,9 ]  ] ',17,'2011-06-14 14:33:02',3),(11,'Blocks',' [  [ 3,4 ] , [ 6,4 ] , [ 7,4 ] , [ 8,4 ] , [ 4,5 ] , [ 5,5 ] , [ 9,5 ]  ] ',7,'2011-06-14 14:33:35',3),(12,'Weird Thing',' [  [ 4,3 ] , [ 8,3 ] , [ 5,4 ] , [ 7,4 ] , [ 9,4 ] , [ 6,5 ] , [ 10,5 ] , [ 5,6, [ 2,3 ]  ] , [ 11,6 ] , [ 4,7, [ -2, [ 2,3 ] ,-3, [ -2, [ 2,3 ]  ]  ]  ]  ] ',14,'2011-07-13 12:34:42',3),(13,'Thingamajig',' [  [ 4,2, [ -4, [ 4 ]  ]  ] , [ 5,2 ] , [ 6,2, [ -3, [ 3 ]  ]  ] , [ 8,2 ] , [ 4,3 ] , [ 5,3, [ -1, [ 1 ] ,-2, [ 2 ]  ]  ] , [ 6,3, [ 1,-2, [ 3 ] ,-3, [ 2 ] ,4 ]  ] , [ 8,3 ] , [ 3,4, [ 2,3 ]  ] , [ 7,4 ] , [ 9,4 ] , [ 2,5, [ -2, [ 2,3 ] ,-3, [ 2,3 ]  ]  ] , [ 6,5 ] , [ 10,5 ] , [ 1,6, [ -2, [ -2, [ 2,3 ] ,-3, [ 2,3 ]  ] ,-3, [ -2, [ 2,3 ] ,-3, [ 2,3 ]  ]  ]  ] , [ 5,6 ] , [ 11,6 ] , [ 4,7 ] , [ 12,7 ] , [ 3,8 ]  ] ',35,'2012-05-30 07:40:28',3),(14,'Smaller and Smaller',' [  [ 4,1 ] , [ 5,2 ] , [ 6,3 ] , [ 7,4 ] , [ 8,5, [ 1,4 ]  ] , [ 9,6, [ 1,4 ]  ] , [ 10,7, [ -1, [ 1,4 ] ,-4, [ 1,4 ]  ]  ] , [ 11,8, [ -1, [ -1, [ 1,4 ] ,-4, [ 1,4 ]  ] ,-4, [ -1, [ 1,4 ] ,-4, [ 1,4 ]  ]  ]  ]  ] ',20,'2012-06-15 13:56:39',3),(15,'Jim',' [  [ 5,3 ] , [ 7,3 ] , [ 5,4 ] , [ 5,5 ] , [ 7,5 ] , [ 9,5 ] , [ 10,5 ] , [ 11,5 ] , [ 12,5 ] , [ 13,5 ] , [ 3,6 ] , [ 5,6 ] , [ 7,6 ] , [ 9,6 ] , [ 11,6 ] , [ 13,6 ] , [ 3,7 ] , [ 4,7 ] , [ 5,7 ] , [ 7,7 ] , [ 9,7 ] , [ 11,7 ] , [ 13,7 ]  ] ',23,'2012-06-26 09:29:51',13),(16,'Jim',' [  [ 5,3 ] , [ 7,3 ] , [ 5,4 ] , [ 5,5 ] , [ 7,5 ] , [ 9,5 ] , [ 10,5 ] , [ 11,5 ] , [ 12,5 ] , [ 13,5 ] , [ 3,6 ] , [ 5,6 ] , [ 7,6 ] , [ 9,6 ] , [ 11,6 ] , [ 13,6 ] , [ 3,7 ] , [ 4,7 ] , [ 5,7 ] , [ 7,7 ] , [ 9,7 ] , [ 11,7 ] , [ 13,7 ]  ] ',23,'2012-06-26 09:30:26',13),(17,'Mario with Weird Thing',' [  [ 10,1 ] , [ 13,1, [ 1,2,3,4 ]  ] , [ 2,2, [ -2, [ -1, [ 2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ]  ] ,-3, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -1, [ 1 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 3,2, [ -1, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-2, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 4,2, [ -1, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,-2, [ -1, [ 1,2 ] ,-2, [ 1,4 ] ,-4, [ 2,4 ]  ] ,-3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -2, [ 2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,2, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ -1, [ 1,2 ] ,-2, [ 1,2 ] ,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 6,2, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 10,2, [ 2,4 ]  ] , [ 11,2, [ 1,3 ]  ] , [ 12,2, [ 2,4 ]  ] , [ 13,2, [ 1,3 ]  ] , [ 1,3, [ 4 ]  ] , [ 2,3, [ 1,2,4 ]  ] , [ 3,3, [ 1 ]  ] , [ 4,3, [ 2,4 ]  ] , [ 5,3, [ -2, [ 1,3,4 ]  ]  ] , [ 6,3, [ -1, [ 3,4 ] ,-2, [ -3, [ 3 ]  ] ,-4, [ 1,3,4 ]  ]  ] , [ 7,3, [ -3, [ -3, [ 3 ]  ]  ]  ] , [ 11,3 ] , [ 12,3 ] , [ 1,4, [ 2,4 ]  ] , [ 2,4, [ -2, [ 1,2,3,4 ] ,3 ]  ] , [ 3,4, [ 1 ]  ] , [ 4,4, [ 4 ]  ] , [ 5,4, [ 1,3,4 ]  ] , [ 6,4, [ 3,-4, [ 1,-2, [ 1,2,3 ]  ]  ]  ] , [ 7,4, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 11,4, [ 2,4 ]  ] , [ 12,4, [ 1,3 ]  ] , [ 2,5, [ -1, [ 2,4 ] ,3,4 ]  ] , [ 3,5, [ -3, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ] ,4 ]  ] , [ 4,5, [ 3,4 ]  ] , [ 5,5, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 6,5, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 10,5, [ 1,-2, [ 1,-2, [ 2 ] ,4 ] ,-3, [ 1,-3, [ 3 ] ,4 ] ,4 ]  ] , [ 11,5, [ -2, [ 2,4 ] ,-4, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 12,5, [ -1, [ 1,3 ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 1,6, [ 2,3,4 ]  ] , [ 2,6, [ 1,2,3,4 ]  ] , [ 3,6, [ 2 ]  ] , [ 4,6, [ 1 ]  ] , [ 5,6, [ 1,2,3,4 ]  ] , [ 6,6, [ 1,3,4 ]  ] , [ 0,7, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ] , [ 2,7, [ 1,-4, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,7, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,7, [ -2, [ -1, [ 1,2,3 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 5,7, [ 2,-3, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 7,7, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ] , [ 0,8, [ -2, [ 2,4 ] ,-4, [ -2, [ 2 ]  ]  ]  ] , [ 1,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 2,8, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ]  ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3 ]  ]  ]  ] , [ 3,8, [ -4, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 4,8, [ -3, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,8, [ -2, [ -1, [ 1,2 ] ,-2, [ 1,2,4 ] ,-4, [ 2,4 ]  ] ,-4, [ -2, [ 2,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 6,8, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ]  ] , [ 7,8, [ -1, [ 1,3 ] ,-3, [ -1, [ 1 ]  ]  ]  ] , [ 1,9, [ -4, [ 1,2,3,4 ]  ]  ] , [ 2,9, [ -1, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,3,4 ]  ] , [ 3,9, [ -1, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 4,9, [ -2, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,9, [ -1, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-2, [ -2, [ 2,4 ] ,-3, [ 3,4 ] ,-4, [ 2,3,4 ]  ] ,3,4 ]  ] , [ 6,9, [ -3, [ 1,2,3,4 ]  ]  ] , [ 1,10, [ 1,2 ]  ] , [ 2,10, [ 1,2 ]  ] , [ 5,10, [ 1,2 ]  ] , [ 6,10, [ 1,2 ]  ]  ] ',334,'2012-07-02 12:48:08',13),(18,'Toby',' [  [ 3,2 ] , [ 4,2 ] , [ 5,2 ] , [ 9,2 ] , [ 4,3 ] , [ 9,3 ] , [ 4,4 ] , [ 6,4 ] , [ 7,4 ] , [ 9,4 ] , [ 10,4 ] , [ 12,4 ] , [ 14,4 ] , [ 4,5 ] , [ 6,5 ] , [ 7,5 ] , [ 9,5 ] , [ 10,5 ] , [ 12,5 ] , [ 13,5 ] , [ 14,5 ] , [ 14,6 ] , [ 12,7 ] , [ 13,7 ] , [ 14,7 ]  ] ',25,'2012-07-02 13:47:04',15);
/*!40000 ALTER TABLE `grid_pattern` ENABLE KEYS */;
UNLOCK TABLES;

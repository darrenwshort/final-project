<!DOCTYPE html>
<html lang="en">
/* -----------------------------------
 * ViT 4.20.20 Galvanize Course
 * Student:     Darren Short
 * Assignment:  Final Project
 * File:        findresource.php
 * -----------------------------------
 */
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Carl's Resources</title>
</head>
<body>
  
<?php

if(isset($GET['searchterm']) && $GET['searchterm'] != '')
{
  // text file contains excerpt from CRC catalog
  $file = 'suggestions.json';

  // read json into array.
  $json = file_get_contents($file);
  $json_data = json_decode($json, true);
  print_r($json_data);


}
else { echo "Nothing"; }
?>
</body>
</html>

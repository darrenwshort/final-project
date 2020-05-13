<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Carl's Resources</title>
</head>
<body>
  
<?php
if(isset($_GET['searchterm']))
{
  $str = $_GET['searchterm'];
  // text file contains excerpt from CRC catalog
  $file = 'suggestions.json';

  // read json into array.
  $json = file_get_contents($file);
  $json_data = json_decode($json, true);
  // print_r($json_data);
  foreach($json_data as $data){
    if(in_array($str, $data["keywords"])){
      echo "<h3><a target=\"_blank\" href='" . $data["url"] . "'>" . $data["url"] . "</h3>";
    }
  }
}
else { echo "Nothing bro!";}
?>
</body>
</html>

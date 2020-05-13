<html>
  <head>
    <title>Search Carl's Resources</title>
  </head>
<body>

<?php

if(isset($GET['r']) && $GET['r'] != '')
{
  // text file contains excerpt from CRC catalog
  $file = 'suggestions.json';

  // open file for reading
  $fh = fopen($file, "r");


  // $rsrc = "";
  // $resources = array();
  // read json into array.
  $json = file_get_contents('./suggestions.json');
  $json_data = json_decode($json, true);
  print_r($json_data);


}
else { echo "Nothing"; }
?>
</body>
</html>

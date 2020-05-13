
  
<?php
if(isset($_GET['searchterm']))
{
  $str = $_GET['searchterm'];
  // text file contains excerpt from CRC catalog
  $file = 'suggestions.json';

  // read json into array.
  $json = file_get_contents($file);
  $json_data = json_decode($json, true);

  echo "<ol>";
  foreach($json_data as $data){
    if(in_array($str, $data["keywords"])){
      echo "<li><a class='links' target='_blank' href='" . $data["url"] . "'>" . $data["url"] . '</a>(<span class="italicize">' . $data["keywords"][0] . '</span>)</li>';
    }
  }
  echo "</ol>";
}
else { echo "Nothing bro!";}
?>

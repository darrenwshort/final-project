

<?php
// ----------------------------------
// ViT 4.20.20 Galvanize Course      
// Student:       Darren Short
// Assignment:    Final Project
// File:          findresource.php
// ----------------------------------

// check if searchterm key passed from ajax call
if(isset($_GET['searchterm']))
{
  $str = $_GET['searchterm'];

  // json contains objects of 1) url & 2) array of keywords
  $file = 'suggestions.json';

  // read json into array.
  $json = file_get_contents($file);
  $json_data = json_decode($json, true);

  // return ordered list of hyperlinks
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

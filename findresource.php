

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

    // prep regex for efficient match; case-insensitive
  $regex = '/' . $str . '/i';

  // open ordered list of hyperlinks.
  echo "<ol>";

  // if search is 'all', display everything.
  if(preg_match($regex, 'all')){
    foreach($json_data as $obj){
      echo "<li>" . 
            "<a class='newlinks' target='_blank' href='" . 
            $obj["url"] . "'>" . $obj["url"] . 
            "</a>(<span class='italicize keyword-color'>" . 
            $obj["keywords"][0] . 
            "</span>)</li>";
    }          
  } else {
      // display relevant content based on search string.
      foreach($json_data as $json_obj){
        foreach($json_obj["keywords"] as $keyword){
          if(preg_match($regex, $keyword)){
            echo "<li>" . 
                  "<a class='newlinks' target='_blank' href='" . 
                  $json_obj["url"] . "'>" . $json_obj["url"] . 
                  "</a>(<span class='italicize keyword-color'>" . 
                  $json_obj["keywords"][0] . 
                  "</span>)</li>";
            break;
          }
        }
      }
  }
  // close ordered list.
  echo "</ol>";
}
else { echo "Nothing bro!";}
?>

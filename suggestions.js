
//-----------------------------------
// ViT 4.20.20 Galvanize Course
// Student: Darren Short
// Assignment: Final Project
// File:  suggestions.js
//-----------------------------------

// on DOM load completion, get JS ready for use.
document.addEventListener("DOMContentLoaded", () => {

    // func to search for resource
    function findResource() {
        let search = document.getElementById("searchterm");
        let str = search.value;
        if (str.length == 0) {
          document.getElementById("results-div").innerHTML = "";
          return;
        } else {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("results-div").innerHTML = this.responseText;
            }
          };
          xmlhttp.open("GET", "getresource.php?r=" + str, true);
          xmlhttp.send();
        }
    }

    // on each 'key up' stroke, kick off search via findResource().
    document.addEventListener("keyup", () => {
        findResource();
    });

});

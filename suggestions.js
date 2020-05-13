
/*-----------------------------------
 * ViT 4.20.20 Galvanize Course
 * Student:     Darren Short
 * Assignment:  Final Project
 * File:        suggestions.js
 *-----------------------------------
 */

// on DOM load completion, get JS ready for use.
document.addEventListener("DOMContentLoaded", () => {

    // func to search for resource
    function findResource() {
        let str = document.getElementById('searchterm').value;
        console.log(str);
        if (str.length == 0) {
          let results_div = document.createElement('div');
          //results_div.classList.add('results-div');
          results_div.innerHTML = "Nothing Yet...";
          return;
        } else {
          var xmlhttp = new XMLHttpRequest();
          console.log(xmlhttp);
          
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              let results_div = document.getElementById('results-div');
              results_div.innerHTML = this.responseText;
            }
          };
          xmlhttp.open("GET", 'findresource.php?searchterm=' + str, true);
          xmlhttp.send();
        }
    }

    let search_field = document.getElementById('searchterm');

    // on each 'key up' stroke, kick off search via findResource().
    search_field.addEventListener("keyup", () => {
        findResource();
    });
    
    


    

});

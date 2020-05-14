
/*-----------------------------------
 * ViT 4.20.20 Galvanize Course
 * Student:     Darren Short
 * Assignment:  Final Project
 * File:        suggestions.js
 *-----------------------------------
 */

 //----------------- func to search for resource --------------
 function findResource() {
  
    // create div to put link results.
    let results_div = document.createElement("div");
    results_div.setAttribute("id", "results-div");
    results_div.innerHTML = "";
    console.log("first RESULTS DIV: " + results_div);

    // set attributes for results div.
    results_div.setAttribute("width", "800px");
    results_div.setAttribute("border", "2px solid pink");
    results_div.setAttribute("color", "#FFFFFF"); // white

    // set str to user search string.
    let str = document.getElementById("searchterm").value;

    // get 2nd wrapper where result div will go
    let target_div = document.getElementsByClassName("wrapper")[1];
    target_div.innerHTML = ""; // clear out target div

    console.log("SEARCH STRING: " + str);

    if (str.length == 0) {
        target_div.innerHTML = "";  // empty div when no string
        target_div.innerHTML = "Nothing Yet...";
        return;
    } else {
        let jsonhttp = new XMLHttpRequest();
        console.log(jsonhttp);
        
        jsonhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            results_div.innerHTML = ""; // clear first
            results_div.innerHTML = this.responseText;  // add server response
            console.log("RESPONSE TXT: " + this.responseText);
            target_div.innerHTML = ""; // clear first
            target_div.appendChild(results_div); // append child to target
          }
        };
        jsonhttp.open("GET", 'findresource.php?searchterm=' + str, true);
        jsonhttp.send();
    }

    let newlinks = document.querySelectorAll("a.newlinks");
    // let newlinks = document.getElementsByClassName("newlinks");
    // now dress up page with css.
    dressUpPage(results_div, newlinks);
} // end findResource().

 //----------------------- 'dress' page up --------------------------
function dressUpPage(rdiv, nlinks) {
    // change background color of page on click of hyperlink.
    let hex_length = 6; // ex. #123456 , #FFFFFF (white), etc
    let hex_digits = "0123456789ABCDEF"; // valid hex chars

    console.log("RESDIV: " + rdiv);
    console.log("NEW LINKS: " + nlinks);


    // TESTING PURPOSES ONLY
    console.log("LINKS LENGTH: " + nlinks.length);

    // dynamically build hex color code. (ex: #ABCDEF)
    for(let i = 0; i < nlinks.length; i++){
        console.log("LINKS LENGTH: " + nlinks.length);
        let hex_bg_color = "#";
        for(let j = 0; j < hex_length; j++){
          hex_bg_color += hex_digits[Math.floor(Math.random() * hex_digits.length)];
        }

        console.log("hex color is now: " + hex_bg_color);
        console.log('nlinks[i]: ' + nlinks[i]);

        let new_link = nlinks[i];
        new_link.addEventListener("mouseover", function(){
            new_link.style.backgroundColor = hex_bg_color;
        });
        new_link.addEventListener("mouseout", function(){
            new_link.style.backgroundColor = "";
        });
    }  
} // end dressUpPage().

//---------------------- on DOM load ---------------------------
// on DOM load completion, get JS ready for use.
document.addEventListener("DOMContentLoaded", function() {

    let search_field = document.getElementById('searchterm');
    search_field.addEventListener("keyup", function(){
        findResource();
    });
});
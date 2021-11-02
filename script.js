let anim = document.getElementById("meny_boks");
let my_target = document.getElementById("meny_border");

// This handler will be executed only once when the cursor
// moves over the unordered list
anim.addEventListener("mouseenter", function(event) {

  my_target.style.animation="anim_1 2s";
  console.log("mouseover ...");

  setTimeout(function() {
    my_target.style.animation="";
  }, 2500);
}, false);

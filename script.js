let anim_1 = document.getElementById("meny_circle");

// This handler will be executed only once when the cursor
// moves over the unordered list
anim_1.addEventListener("mouseover", function( event ) {
  // highlight the mouseenter target
  // event.target.animate.iterations=1;
  event.target.style.borderWidth="4px";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.animate.iterations=0;
  }, 1500);
}, false);

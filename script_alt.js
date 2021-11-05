let anim = document.getElementById("meny_boks_alt");
let my_target_1 = document.getElementById("meny_border_1");
let my_target_2 = document.getElementById("meny_border_2");


anim.addEventListener("mouseenter", function(event) {

  my_target_1.style.animation="anim_1 2s";
  my_target_2.style.animation="anim_2 3s";


  console.log("mouseenter ...");

  setTimeout(function() {
    my_target_1.style.animation="";
    my_target_2.style.animation="";
  }, 2500);
}, false);

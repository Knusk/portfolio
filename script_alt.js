let anim = document.getElementById("meny_boks");
let my_target_1 = document.getElementById("meny_border_1");
let my_target_2 = document.getElementById("meny_border_2");
let klikke = document.getElementsByClassName("klikker");


anim.addEventListener("mouseenter", function(event) {

  my_target_1.style.animation = "anim_1 2s";
  my_target_2.style.animation = "anim_2 3s";


  console.log("mouseenter ...");

  setTimeout(function() {
    my_target_1.style.animation = "";
    my_target_2.style.animation = "";
  }, 2500);
}, false);

let x=0;

for (var i = 0; i < klikke.length; i++) {
  klikke[i].addEventListener("click", function() {
    console.log("Jeg blir klikket! Og mitt nummer = " + i );
    let x=this.dataset.x;
    let y=this.dataset.y;
    console.log("data-x = "+ x);
    window.main.scrollTo(x,y);
    if (this.style.backgroundColor == 'yellow') {
      // console.log("Yep, yellow!");
      this.style.backgroundColor = 'transparent';
    } else {
      // console.log("Has to be yellow!!!");
      this.style.backgroundColor = 'yellow';
    }
    // Wow!! Dette er stort. 'this' gir full tilgang til hele elementet jeg akkurat har klikket på!!!
  })
}

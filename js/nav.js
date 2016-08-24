var toggle = true;

function animateRight(){
  $('body>*').not("body>#mobile").animate({
      margin: "0 0 0 +=340"
  });
}
function animateLeft(){
  $('body>*').not("body>#mobile").animate({
    margin: "0 0 0 -=340"
  });
}
function bodyClick(){
  animateLeft();
  toggle = true;
}
function animateNav(){
  if(toggle){
    animateRight();
    toggle = false;
  }else if(!toggle){
    animateLeft();
    toggle = true;
  }
}

$("button").on("click", animateNav);
$("section").on("click", bodyClick);

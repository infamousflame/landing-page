var toggleHam = false;
function animation(){
  if(!toggleHam){
    $(".line").addClass("clicked");
    toggleHam = true;
  }else if(toggleHam){
    $(".line").removeClass("clicked");
    toggleHam = false;
  }
}


$("#hamburger").on("click", animation);
$("#hamburger").on("click", nav);

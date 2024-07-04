var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides fade");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); 
}

function submit(){
  let name = document.getElementById("name");
  let number = document.getElementById("number");

  if(name.value == ""){
      alert("Please Enter Name")
  }else if(age.value == ""){
      alert("Please Enter Age")
    }else if(beverage.value == ""){
      alert("Please Enter Beverage")
    }else if(rating.value == ""){
      alert("Please Enter Rating")
  }else{
      alert("Thanks For Order : " + name.value)
  }
}


// Subtle Animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
      }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// // show-hide navigation bar
const hamburger = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-links li");
let navLink = document.querySelectorAll(".links");
hamburger.addEventListener('click', ()=>{
  //Animate Links
  navLinks.classList.toggle("open");
  navLinks.classList.remove("close");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

document.getElementById('link1').onclick = ()=>{
  console.log("Clicked");
  navLinks.classList.toggle("close");
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
  links.forEach(link => {
    link.classList.remove("fade");
  });

}
document.getElementById('link2').onclick = ()=>{
  console.log("Clicked");
  navLinks.classList.toggle("close");
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
  links.forEach(link => {
    link.classList.remove("fade");
  });

}
document.getElementById('link3').onclick = ()=>{
  console.log("Clicked");
  navLinks.classList.toggle("close");
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
  links.forEach(link => {
    link.classList.remove("fade");
  });

}
document.getElementById('link4').onclick = ()=>{
  console.log("Clicked");
  navLinks.classList.toggle("close");
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
  links.forEach(link => {
    link.classList.remove("fade");
  });

}
document.getElementById('link5').onclick = ()=>{
  console.log("Clicked");
  navLinks.classList.toggle("close");
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
  links.forEach(link => {
    link.classList.remove("fade");
  });

}




// Changing the color of Navigation bar to black when scrolling
function changeBg(){
    let navbar = document.getElementById("navbarr");
    let scrollValue = window.scrollY;

    if(scrollValue < 50){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', changeBg);



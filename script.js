const scroll = new LocomotiveScroll({
 el: document.querySelector('#main'),
 smooth: true
});

function firstPageAnim(){
  var tl = gsap.timeline();

  tl.from("#nav",{
    y: '-10',
    opacity:0,
    duration:1.5,
    ease: Expo.easeInOut
  })
  .to(".boundingelm",{
    y: 0,
    ease: Expo.easeInOut,
    duration:2,
    delay: -1,
    stagger: .2
  })
  .from("#herofooter",{
   y: -10,
   opacity: 0,
   duration: 1.5,
   delay: -1,
   ease: Expo.easeInOut
  })
}

firstPageAnim();


//minicircle
var cursor = document.getElementById("minicircle");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".elem")
.forEach(function (elem){
  elem.addEventListener("mousemove", function(details){
   gsap.to(elem.querySelector("img"),{
     opacity: 1,
     ease: Power1,
   });
  });
});
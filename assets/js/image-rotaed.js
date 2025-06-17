const ThumbLeftAnimi = document.querySelectorAll(".thumb-anim-left");


function animate() {
  console.log(window.innerHeight, ThumbLeftAnimi[0].getBoundingClientRect().bottom);
  
  for(var i = 0; i < ThumbLeftAnimi.length; i++) {
    const img = ThumbLeftAnimi[i];
    const top = img.getBoundingClientRect().top;
    const bottom = img.getBoundingClientRect().bottom;
    
    const winH = window.innerHeight;
    
    if((winH > top) && (bottom > 0)) {
      img.style.cssText += `transform: rotate(${top * 0.03}deg) translateX(-0%);`;
    }
  }
}


window.addEventListener("scroll", animate)



const ThumbRightAnimi = document.querySelectorAll(".thumb-anim-right");


function animate2() {
  console.log(window.innerHeight, ThumbRightAnimi[0].getBoundingClientRect().bottom);
  
  for(var i = 0; i < ThumbRightAnimi.length; i++) {
    const img = ThumbRightAnimi[i];
    const top = img.getBoundingClientRect().top;
    const bottom = img.getBoundingClientRect().bottom;
    
    const winH = window.innerHeight;
    
    if((winH > top) && (bottom > 0)) {
      img.style.cssText += `transform: rotate(${top * -0.03}deg) translateX(-0%);`;
    }
  }
}


window.addEventListener("scroll", animate2)

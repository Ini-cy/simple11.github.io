
let text = document.getElementById("itext");
let about = document.getElementById("about");
let pg1 = document.getElementById("skin-products");
let pg2 = document.getElementById("hair-products");
let pg3 = document.getElementById("beard-products");
let pg4 = document.getElementById("products");

setTimeout(() => { document.body.style.backgroundColor = "#ffff"; }, 2000);

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  text.style.left = -value * 0.15 + 'px';
  about.style.top = -value*0.50 + 'px';
  pg4.style.top = -value*0.50 + 'px';
  pg1.style.top = -value*0.50 + 'px';
  pg2.style.top = -value*0.50 + 'px';
  pg3.style.top = -value*0.50 + 'px';
  // pg1.style.top = value*0.50 + 'px';
  // pg2.style.top = value*0.50 + 'px';
  // pg3.style.top = value*0.50 + 'px';

})

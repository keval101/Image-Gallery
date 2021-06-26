const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

//set first img opacity
imgs[0].style.opacity= opacity;

imgs.forEach(img => 
    img.addEventListener('click', imgClick));

function imgClick(e){
    //reset the opacity
    imgs.forEach(img => (img.style.opacity=1));
    //add source on click
    current.src = e.target.src;
     //fade-in animation
     current.classList.add('fade-in');
     //remove fade-in class
     setTimeout(()=> current.classList.remove('fade-in'), 500)
    //active opacity
    e.target.style.opacity = opacity;
   
}
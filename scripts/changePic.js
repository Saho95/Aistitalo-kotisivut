let img = document.getElementById('kuvat');
let images = ['/images/matte1.jpg','/images/matte.jpg','/images/maisema1.jpg']
let time = 4000

var opacity =0;
var intervalID =0;

function fadeIn()
{
    intervalID=setInterval(show,20);
}

function show()
{
    opacity =Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity < 1)
    {
        opacity = opacity+0.1;
        img.style.opacity=opacity;
    }
    else
    {
        clearInterval(intervalID);
    }
}

function fadeOut()
{
    intervalID=setInterval(show,20);
}

function hide()
{
    opacity =Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity > 0)
    {
        opacity = opacity-0.1;
        img.style.opacity=opacity;
    }
    else
    {
        clearInterval(intervalID);
    }
}

function changeImg(){
    
    let randomIndex = Math.floor(Math.random() * images.length);
    const kuva = images[randomIndex];
    img.src = kuva;}
window.onload = changeImg;

setInterval(changeImg
,time);


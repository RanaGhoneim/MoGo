window.addEventListener('scroll' , function(){
    let nav=document.getElementById("nav");
    let windowPosition= window.scrollY>230;
    console.log(window.scrollY)
    nav.classList.toggle('navbarlist',windowPosition);
})

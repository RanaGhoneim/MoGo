window.addEventListener('scroll' , function(){
    let nav=document.getElementById("nav");
    let windowPosition= window.scrollY>100;
    nav.classList.toggle('navbarlist',windowPosition);
})

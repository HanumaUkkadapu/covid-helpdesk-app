let root, body, menuBtn, navEl, navLinks;

window.addEventListener("DOMContentLoaded", () => {
	init();
});

function init(){
    root = document.documentElement;
    body = document.body;
    menuBtn = document.getElementById("menu");
    navEl = document.getElementById("nav_el");
    navLinks = document.querySelectorAll("#nav_el a");
    langsel=document.querySelector("#langsel");
    eng_div=document.querySelector(".eng_div");
    tel_div=document.querySelector(".tel_div");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navEl.classList.toggle("open");
        body.classList.toggle("menu-open");
    });

    navLinks.forEach((el) => {
        el.addEventListener("click", () => {
            if (menuBtn.classList.contains("open")) menuBtn.click();
        });
    });

    tel_div.style.display='none';
    langsel.addEventListener('input', (e) => {
        let selectedLang=langsel.options[langsel.selectedIndex].value;
        //console.log(selectedLang);
        if(selectedLang =='english'){
            tel_div.style.display='none';
            eng_div.style.display='flex';
        }
        else if (selectedLang=='telugu'){
            eng_div.style.display='none';
            tel_div.style.display='flex';
        }
    });
}



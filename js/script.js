let root, body, menuBtn, navEl, navLinks;

window.addEventListener("DOMContentLoaded", () => {
	init();
});

function init(){
    root = document.documentElement;
	body = document.body;
    menuBtn = document.getElementById('menu');
    navEl = document.getElementById('nav_el');
    navLinks = document.querySelectorAll("#nav_el a");
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle("open");
        navEl.classList.toggle('open');
		body.classList.toggle("menu-open");
    });
    
    navLinks.forEach((el) => {
        el.addEventListener("click", () => {
            if (menuBtn.classList.contains("open")) menuBtn.click();
        });
    });

    /* Hanuma */
    typeCheckIns = document.querySelectorAll(".inWrap input[type='checkbox']");
    addSVGChecks();

}


/* Hanuma */

let typeChkIns;

function addSVGChecks(){
    let svgCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 100 100" version="1.1" >
<path d="m 15 55 l 20 20 l 50 -50"
     fill="none" stroke-width="10" />
</svg>`;
    typeCheckIns.forEach((el)=>{
        el.insertAdjacentHTML('afterend',svgCheck);
    });
}
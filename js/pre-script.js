let root, body, menuBtn, navEl, navLinks, tblLinks, langsel, eng_div, tel_div;

window.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    root = document.documentElement;
    body = document.body;
    menuBtn = document.getElementById("menu");
    navEl = document.getElementById("nav_el");
    navLinks = document.querySelectorAll("#nav_el a");

    tblLinks = document.querySelectorAll(".container table a");

    langsel = document.querySelector("#langsel");
    eng_div = document.querySelector(".eng_div");
    tel_div = document.querySelector(".tel_div");

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

    tblLinks.forEach((link)=>{
        // console.log(link.getAttribute("href"));
        let hRef = link.getAttribute("href");
        let prnt = link.parentElement;
        let el = `<a class="flex-cc" href="${hRef}" target="_blank" rel="noreferrer noopener">Download<span class="material-icons icon">open_in_new</span></a>`;
        link.remove();
        prnt.insertAdjacentHTML("beforeend",el);
    });

    tel_div.style.display = "none";
    langsel.addEventListener("input", (e) => {
        let selectedLang = langsel.options[langsel.selectedIndex].value;
        //console.log(selectedLang);
        if (selectedLang == "english") {
            tel_div.style.display = "none";
            eng_div.style.display = "flex";
        } else if (selectedLang == "telugu") {
            eng_div.style.display = "none";
            tel_div.style.display = "flex";
        }
    });
}

let root,
    body,
    menuBtn,
    navEl,
    navLinks,
    tblLinks,
    langsel,
    eng_div,
    tel_div,
    showAUBtn,
    aboutUsDiv,
    closeAUBtn,
    showCFBtn,
    contactDiv,
    contactForm,
    closeCFBtn;

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

    tblLinks.forEach((link) => {
        // console.log(link.getAttribute("href"));
        let hRef = link.getAttribute("href");
        let prnt = link.parentElement;
        let el = `<a class="flex-cc" href="${hRef}" target="_blank" rel="noreferrer noopener">Download<span class="material-icons icon">open_in_new</span></a>`;
        link.remove();
        prnt.insertAdjacentHTML("beforeend", el);
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

    showAUBtn = document.getElementById("showAUBtn");
    aboutUsDiv = document.getElementById("aboutUsDiv");
    closeAUBtn = document.getElementById("closeAUBtn");
    showCFBtn = document.getElementById("showCFBtn");
    contactDiv = document.getElementById("contactDiv");
    contactForm = document.getElementById("contactForm");
    closeCFBtn = document.getElementById("closeCFBtn");

    showAUBtn.addEventListener("click", () => {
        aboutUsDiv.classList.add("open");
        body.classList.add("menu-open");
    });
    closeAUBtn.addEventListener("click", () => {
        aboutUsDiv.classList.remove("open");
        body.classList.remove("menu-open");
    });


    showCFBtn.addEventListener("click", () => {
        contactDiv.classList.add("open");
        body.classList.add("menu-open");
    });
    closeCFBtn.addEventListener("click", () => {
        contactDiv.classList.remove("open");
        body.classList.remove("menu-open");
    });
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Contact form submitted successfully");
        contactDiv.classList.remove("open");
        contactForm.reset();
        body.classList.remove("menu-open");
    });
}
let root, body, menuBtn, navEl, navLinks, tabBtns;

window.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    root = document.documentElement;
    body = document.body;
    menuBtn = document.getElementById("menu");
    navEl = document.getElementById("nav_el");
    navLinks = document.querySelectorAll("#nav_el a");
    tabBtns = document.querySelectorAll(".tabBtn");

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

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            tabBtns.forEach((btnIn) => {
                if (btnIn.classList.contains("active"))
                    btnIn.classList.remove("active");
            });
            console.log(btn.children[0].value);
            //console.log(typeof e.target.dataset.targetelem);
            let targetElem = document.getElementById(
                btn.dataset.targetelem
            );
            targetElem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
            btn.classList.toggle("active");
        });
    });

}

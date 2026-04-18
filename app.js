// SIDEBAR NAVIGATION
function switchPage(ev) {
    const page = ev.target.getAttribute("data-page");

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    document.querySelectorAll(".nav").forEach(l => {
        l.classList.remove("active");
    });

    ev.target.classList.add("active");
}

document.querySelectorAll(".nav").forEach(link => {
    link.addEventListener("click", switchPage);
});


// QUICK PAGE SWITCH
function goPage(page) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");
}

window.goPage = goPage;


// ESSENTIAL MODS LINK
function openEssentialMods() {
    window.open("https://modrinth.com/mods?categories=performance", "_blank");
}

window.openEssentialMods = openEssentialMods;


// COPY BUTTONS
function copyText(ev) {
    const parent = ev.target.parentElement;
    const text = parent.getAttribute("data-copy");

    if (text) {
        navigator.clipboard.writeText(text);
        ev.target.textContent = "Copied!";

        setTimeout(() => {
            ev.target.textContent = "Copy";
        }, 1000);
    }
}

document.querySelectorAll(".btn").forEach(btn => {
    if (btn.textContent.trim() === "Copy") {
        btn.addEventListener("click", copyText);
    }
});


// DROPDOWNS
function toggle(ev) {
    const d = ev.currentTarget.parentElement;
    d.classList.toggle("open");
}

document.querySelectorAll(".dropdown-header").forEach(h => {
    h.addEventListener("click", toggle);
});


// OPEN LINKS
function openLink(url) {
    window.open(url, "_blank");
}

window.openLink = openLink;


// SIDEBAR SMART HOVER
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

let mouseOnSidebar = false;

function enterSidebar() {
    mouseOnSidebar = true;
    sidebar.classList.add("open");
    main.classList.add("shift");
}

function leaveSidebar() {
    mouseOnSidebar = false;
}

function checkMouse(ev) {
    const x = ev.clientX;

    if (x < 40 || mouseOnSidebar) {
        sidebar.classList.add("open");
        main.classList.add("shift");
    } else {
        sidebar.classList.remove("open");
        main.classList.remove("shift");
    }
}

// Detect hover ON sidebar
sidebar.addEventListener("mouseenter", enterSidebar);
sidebar.addEventListener("mouseleave", leaveSidebar);

// Track mouse globally
document.addEventListener("mousemove", checkMouse);


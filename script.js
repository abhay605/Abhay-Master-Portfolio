// ===== ACTIVE NAVBAR HIGHLIGHT + MOBILE TOGGLE =====

// Toggle mobile menu
// ===== MOBILE NAVBAR TOGGLE ONLY =====
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function openTab(page) {
    window.open(page, "_blank");
}

// Active navbar highlight
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Close mobile menu after click
        const nav = document.getElementById("navLinks");
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
        }
    });
});
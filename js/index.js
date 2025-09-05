// --- MENU RESPONSIVE ---
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// --- DARK MODE TOGGLE (Sol/Luna) ---
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌞";
  }
});

// --- MODAL HABILIDADES ---
const skillModal = document.getElementById("skillModal");
const skillTitle = document.getElementById("skillTitle");
const skillDescription = document.getElementById("skillDescription");
const closeModal = document.querySelector(".close");

const skillsInfo = {
  html: "HTML es el lenguaje estándar para estructurar páginas web.",
  css: "CSS permite dar estilo y diseño moderno a las páginas web.",
  js: "JavaScript agrega interactividad y lógica a tus proyectos.",
  python: "Python es un lenguaje versátil usado en IA, backend y automatización.",
  sql: "SQL es esencial para manejar y consultar bases de datos."
};

document.querySelectorAll(".habilidades li").forEach(li => {
  li.addEventListener("click", () => {
    const skill = li.getAttribute("data-skill");
    skillTitle.textContent = skill.toUpperCase();
    skillDescription.textContent = skillsInfo[skill];
    skillModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  skillModal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === skillModal) {
    skillModal.style.display = "none";
  }
});

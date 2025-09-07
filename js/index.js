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
  html: "Se el funcionamiento basico y estructuracion de html para el desarrolo de una pagina de gran calidad y optimizada",
  css: "Tengo conocimiento del uso y accesibilidad de css para diseñar paginas modernas y agradables visualmente",
  js: "He manejado algunos proyectos con javascript. Aun no se su totalidad pero estoy en el proceso",
  python: "Se el funcionamiento basico del lenguaje, he creado proyectos basicos con este lenguaje ya que no lo domino en su totalidad, pero estoy empapandome del tema para enfocarme en este lenguaje para el desarrollo de IAs",
  sql: "He manejado Mysql por Xaamp y apache para crear base de datos en paginas web, de este sigo aprendiendo a usarlo"
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

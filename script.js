const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const topButton = document.getElementById("top");

menu.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menu.classList.toggle("open", isOpen);
  menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 300 ? "block" : "none";
  let current = "home";
  document.querySelectorAll("main section").forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  nav.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! Your message has been validated. This demo does not send emails.";
  event.target.reset();
});

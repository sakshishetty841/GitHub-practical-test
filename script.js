const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const topButton = document.getElementById("top");

menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 300 ? "block" : "none";
  let current = "home";
  document.querySelectorAll("main section").forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  nav.querySelectorAll("a").forEach(link => {
    link.style.color = link.getAttribute("href") === "#" + current ? "#a78bfa" : "";
  });
});

topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! Your message has been validated. This demo does not send emails.";
  event.target.reset();
});

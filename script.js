// ================= CONTACT FORM VALIDATION =================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector("input[type='text']");
  const emailInput = document.querySelector("input[type='email']");
  const messageInput = document.querySelector("textarea");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("Message sent successfully!");

  // Clear form
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ================= SCROLL ANIMATION =================
const animatedSections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});


// ================= ACTIVE NAVBAR LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// ================= BUTTON CLICK CONSOLE =================
const heroButton = document.querySelector(".hero button");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    console.log("Hero button clicked!");
  });
}
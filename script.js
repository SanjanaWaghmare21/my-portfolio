document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nameInput = document.querySelector("input[type='text']");
  let emailInput = document.querySelector("input[type='email']");
  let messageInput = document.querySelector("textarea");

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
    return;
  }

  alert("Form submitted successfully!");

  // ✅ Clear form after submit
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});


// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add('show');
    }
  });
});

document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});

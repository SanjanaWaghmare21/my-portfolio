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

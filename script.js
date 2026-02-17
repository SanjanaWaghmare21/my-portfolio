const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  alert("Thank you! Your message has been sent successfully 😊");

  form.reset();
});

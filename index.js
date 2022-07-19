const form = document.querySelector(".form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    confirmInputs();
  });
}

function setError(element, message) {
  const row = element.parentElement;
  const errorDisplay = row.querySelector(".error");

  errorDisplay.innerText = message;
  row.classList.add("success");
  row.classList.remove("error");
}

function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function confirmInputs() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    setError(firstName, "first Name is required");
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name is required");
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!validEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  }
}

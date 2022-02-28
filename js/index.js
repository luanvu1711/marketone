const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const title = document.getElementById("title");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const client = document.getElementById("client");
const select = document.getElementById('select');
const image = document.getElementById('logo_img');




form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const titleValue = title.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const clientValue = client.value;

  if (firstnameValue === "") {
    setErrorFor(firstname);
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname);
  } else {
    setSuccessFor(lastname);
  }

  if (titleValue === "") {
    setErrorFor(title);
  } else {
    setSuccessFor(title);
  }

  if (emailValue === "") {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone);
  } else {
    setSuccessFor(phone);
  }

  if (clientValue === "pleaseSelect") {
    select.className ="form-control error";
  } 
  else {
    select.className = "form-control success";
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}



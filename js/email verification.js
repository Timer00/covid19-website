function validation() {
  let emailpat = document.getElementById("email").value;
  let email = document.getElementById("email");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailpat.match(pattern)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }
}

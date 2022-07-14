const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
  });
});

const iconeye = document.querySelector(".icon-eye");
console.log(iconeye);

function SeePassword() {
  var contraseña = document.getElementById("password");
  var icon = document.getElementById("icon-eye-js");
  if (contraseña.type == "password") {
    contraseña.type = "text";
	icon.className = "fas fa-eye";
  } else if (contraseña.type == "text") {
    contraseña.type = "password";
	icon.className = "fas fa-eye-slash";
  }
}

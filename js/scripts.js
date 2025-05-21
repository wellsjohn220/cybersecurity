/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

console.log("form script has been loaded");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmXt99hA8d7ydVlRMgTOvfCq3A5RSJawQhghBwEP3K5po7zSf9r5NZHgoh6OoNjmDQ/exec";
const form = document.forms["contact-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "<br />Thank you contact us by 12345 John";
      setTimeout(function () {
        msg.innerHTML = "This site powered by 12345 John";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

function generateDate() {
  let today = new Date().toLocaleDateString("en-GB");
  const currentTime = new Date().toLocaleTimeString();
  console.log("Time loaded " + currentTime);
  console.log("Date has been loaded " + today);
  document.getElementById("reg").value = currentTime;
  document.getElementById("reg2").value = today;
  return true;
}



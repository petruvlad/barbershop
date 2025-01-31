document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Închide meniul dacă dai click în afară
  document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
      navList.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

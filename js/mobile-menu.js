(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuLinks = document.querySelectorAll(".global-header__menu a");

  const openMenu = () => {
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden"; // Blochează scroll-ul
    document.addEventListener("click", closeOnClickOutside); // Adăugăm event listener doar când meniul e deschis
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "auto"; // Permite scroll-ul
    document.removeEventListener("click", closeOnClickOutside); // Eliminăm event listener-ul când meniul e închis
  };

  const toggleMenu = () => {
    mobileMenu.classList.contains("is-open") ? closeMenu() : openMenu();
  };

  const closeOnClickOutside = event => {
    if (!mobileMenu.contains(event.target) && !openMenuBtn.contains(event.target)) {
      closeMenu();
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
  menuLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Resetare meniu la schimbarea dimensiunii ecranului (>1200px)
  window.matchMedia("(min-width: 1200px)").addEventListener("change", e => {
    if (e.matches) {
      closeMenu();
    }
  });
})();

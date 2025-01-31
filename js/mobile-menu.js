(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuLinks = document.querySelectorAll(".global-header__menu a");

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains("is-open");
    mobileMenu.classList.toggle("is-open");
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Blochează scroll-ul
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Închidere meniu la click pe un link din meniu
  menuLinks.forEach(link => link.addEventListener("click", toggleMenu));

  // Închidere meniu la click în afara lui
  document.addEventListener("click", event => {
    if (!mobileMenu.contains(event.target) && !openMenuBtn.contains(event.target)) {
      if (mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    }
  });

  // Resetare meniu când ecranul devine mare (>1200px)
  window.matchMedia("(min-width: 1200px)").addEventListener("change", e => {
    if (e.matches) {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "auto";
    }
  });
})();

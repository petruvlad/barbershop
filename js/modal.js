(() => {
  const modal = document.querySelector(".modal");
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");

  const toggleModal = () => {
    const isHidden = modal.classList.contains("is-hidden");
    modal.classList.toggle("is-hidden");
    document.body.style.overflow = isHidden ? "hidden" : "auto"; // Blochează scroll-ul
  };

  openModalBtns.forEach(btn => btn.addEventListener("click", toggleModal));
  closeModalBtn.addEventListener("click", toggleModal);

  // Închidere la click în afara ferestrei
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      toggleModal();
    }
  });

  // Închidere la apăsarea tastei Esc
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });
})();

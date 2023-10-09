const mobileMenu = document.querySelector(".mobile-menu")

mobileMenu.addEventListener("click", () => {

  const isOpen = mobileMenu.getAttribute('aria-expanded')


  if (isOpen === "false") {
    mobileMenu.setAttribute("aria-expanded", "true")
  } else {

    mobileMenu.setAttribute("aria-expanded", "false")
  }
})

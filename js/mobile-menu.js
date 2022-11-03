(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuItemRef = document.querySelectorAll("[data-item]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    menuItemRef.forEach((e) => {
      e.addEventListener("click", () => {
        if (mobileMenuRef.classList.value.includes("is-open")) {
          menuBtnRef.classList.remove("is-open");
          menuBtnRef.setAttribute("aria-expanded", !expanded);
          mobileMenuRef.classList.remove("is-open");
        }
      });
    });
  });
})();

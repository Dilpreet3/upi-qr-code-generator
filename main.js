async function loadLayout() {
  // Load Header
  const headerRes = await fetch("header.html");
  document.getElementById("site-header").innerHTML = await headerRes.text();

  // Load Footer
  const footerRes = await fetch("footer.html");
  document.getElementById("site-footer").innerHTML = await footerRes.text();

  // Mobile Menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    document.querySelectorAll("#navLinks a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", loadLayout);

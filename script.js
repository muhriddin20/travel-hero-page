const toggleSidebarBtn = document.querySelector(".header i");
const hero = document.querySelector(".hero");
const sidebar = document.querySelector(".sidebar");

toggleSidebarBtn.addEventListener("click", () => {
  hero.classList.toggle("show-sidebar");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});

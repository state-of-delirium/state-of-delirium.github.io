
const button = document.getElementById("theme-toggle");
button.style.display = "block";
let currentTheme = getTheme();
const html = document.querySelector("html");
html.setAttribute("data-theme", currentTheme);

button.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  currentTheme = newTheme;
});

function getTheme() {
    const localTheme = localStorage.getItem("theme");
    if (localTheme !== null) {
        return localTheme;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

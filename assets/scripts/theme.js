// Выбираем кнопку
const btn = document.querySelector(".btn--triger");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme"
  if (theme.getAttribute("href") == "style.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "dark-theme.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme"
    theme.href = "style.css";
  }
});
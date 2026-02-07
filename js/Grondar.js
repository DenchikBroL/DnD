// Благословення та прокляття Грондара
const forgeBlessings = [
  "Рука Майстра: Отримуєш перевагу на всі перевірки, пов’язані з ремеслом, ковальством, інженерією. Створені тобою предмети мають +1 до міцності.",
  "Вогонь Горна: Раз на день можеш додати 1d6 вогняного урону до будь-якої атаки зброєю. Зброя в твоїх руках ніколи не ламається.",
  "Молот Долі: Під час створення предмета можеш один раз “перекувати” результат — перекинути будь-який провалений кидок. Артефакти, створені під благословенням Грондара, отримують унікальний ефект (визначає Майстер).",
  "Прокляття Лінивця: Якщо ти пропускаєш роботу/тренування/ремесло більше ніж на 3 дні — отримуєш перешкоду на всі перевірки Сили.",
  "Вибух Горна: Раз на день Мастер може змусити тебе кинути ряткидок Статури. При провалі — навколо тебе вибухає жар (1d6 вогняного урону всім поруч).",
  "Тягар Майстра: Ти не можеш користуватися погано зробленою зброєю або бронею. Якщо змушений — отримуєш перешкоду на атаки та захист."
];

// Елементи попапу (якщо структура така сама)
const forgeImg = document.querySelector(".content img");
const forgePopup = document.getElementById("blessing-popup");
const forgeText = document.getElementById("blessing-text");
const forgeClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
forgeImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * forgeBlessings.length);
  forgeText.textContent = forgeBlessings[random];
  forgePopup.style.display = "flex";
});

// Закриття
forgeClose.addEventListener("click", () => {
  forgePopup.style.display = "none";
});

forgePopup.addEventListener("click", (e) => {
  if (e.target === forgePopup) forgePopup.style.display = "none";
});

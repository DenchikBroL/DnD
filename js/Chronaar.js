// Благословення та прокляття Часу
const timeBlessings = [
  "Зупинений Миг: Раз на день можеш зупинити час для себе на 1 раунд. Ти можеш рухатися, але не атакувати.",
  "Поворот Колеса: Один раз можеш “відмотати” дію назад — повторити будь-який свій кидок і обрати кращий результат.",
  "Пісок Долі: Ти відчуваєш, коли щось погане має статися. Перевага на ряткидки проти пасток, засідок і несподіваних атак.",
  "Тягар Вічності: Ти бачиш, як усе старіє й руйнується. Перешкода на перевірки Харизми, пов’язані з натхненням.",
  "Часовий Зсув: Раз на день Мастер може змусити тебе “випасти з часу” на 1 хід — ти пропускаєш дію, ніби тебе не існувало.",
  "Пісок Забуття: Ти інколи забуваєш дрібні речі. Перешкода на перевірки Пам’яті (Інтелект)."
];

// Елементи попапу (якщо структура така сама)
const timeImg = document.querySelector(".content img");
const timePopup = document.getElementById("blessing-popup");
const timeText = document.getElementById("blessing-text");
const timeClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
timeImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * timeBlessings.length);
  timeText.textContent = timeBlessings[random];
  timePopup.style.display = "flex";
});

// Закриття
timeClose.addEventListener("click", () => {
  timePopup.style.display = "none";
});

timePopup.addEventListener("click", (e) => {
  if (e.target === timePopup) timePopup.style.display = "none";
});

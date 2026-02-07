// Благословення та прокляття Розуму
const mindBlessings = [
  "Формула Генія: Раз на день можеш автоматично успішно пройти будь‑яку перевірку Інтелекту. Пам’ять стає гострішою: +1 до всіх перевірок Знання.",
  "Око Істини: Можеш бачити слабкі місця механізмів, конструкцій і магічних структур. Отримуєш перевагу на кидки, пов’язані з аналізом або розшифровкою.",
  "Логічний Потік: Під час бою можеш один раз змінити порядок ходу, ставши першим. Мозок працює швидше: +2 до Ініціативи.",
  "Холод Розуму: Емоції притупляються. Отримуєш перешкоду на перевірки Харизми, пов’язані з емпатією.",
  "Перевантаження Даними: Раз на день Мастер може змусити тебе кинути ряткидок Інтелекту. При провалі — ти впадаєш у стан “замисленості” на 1 раунд, втрачаючи дію.",
  "Прокляття Ідеальної Логіки: Ти не можеш брехати. Будь-яка спроба обману — автоматичний провал."
];

// Елементи попапу (якщо структура така сама)
const mindImg = document.querySelector(".content img");
const mindPopup = document.getElementById("blessing-popup");
const mindText = document.getElementById("blessing-text");
const mindClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
mindImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * mindBlessings.length);
  mindText.textContent = mindBlessings[random];
  mindPopup.style.display = "flex";
});

// Закриття
mindClose.addEventListener("click", () => {
  mindPopup.style.display = "none";
});

mindPopup.addEventListener("click", (e) => {
  if (e.target === mindPopup) mindPopup.style.display = "none";
});

// Благословення та прокляття Любові
const loveBlessings = [
  "Дотик Краси: Отримуєш +2 до Харизми. Усі, хто бачить тебе вперше, ставляться доброзичливіше.",
  "Серце, Що Лікує: Раз на день можеш зняти один негативний стан з союзника (страх, чарування, виснаження). Твої слова заспокоюють: перевага на перевірки Переконання.",
  "Благословення Любові: Коли ти захищаєш когось, кого любиш або цінуєш, отримуєш +1 до AC та +1d4 до атак.",
  "Тягар Чутливості: Ти надто гостро реагуєш на емоції інших. Отримуєш перешкоду на ряткидки проти чарування.",
  "Рана Серця: Коли хтось поруч отримує критичний урон, ти автоматично отримуєш 1d4 психічного урону.",
  "Прокляття Нерозділеної Любові: Якщо ти прив’язуєшся до когось, але він не відповідає — усі твої соціальні перевірки проти цієї істоти мають перешкоду."
];

// Елементи попапу (якщо структура така сама)
const loveImg = document.querySelector(".content img");
const lovePopup = document.getElementById("blessing-popup");
const loveText = document.getElementById("blessing-text");
const loveClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
loveImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * loveBlessings.length);
  loveText.textContent = loveBlessings[random];
  lovePopup.style.display = "flex";
});

// Закриття
loveClose.addEventListener("click", () => {
  lovePopup.style.display = "none";
});

lovePopup.addEventListener("click", (e) => {
  if (e.target === lovePopup) lovePopup.style.display = "none";
});

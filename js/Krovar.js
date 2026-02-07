// Список благословень/проклять Жаги Битви
const battleBlessings = [
  "Жага Битви: Коли ти отримуєш урон, твоя наступна атака має перевагу. Раз на день можеш діяти навіть при 0 хп (1 раунд перед падінням).",
  "Кров у Вені — Сила в Руці: Отримуєш +2 до урону ближньої атаки, якщо ворог уже поранений. Кожне вбивство дає тимчасові 1d4 хп.",
  "Різанина як Молитва: Після бою можеш провести ритуал (1 хвилина) над тілом ворога. Отримуєш благословення: +1 до Сили на 1 годину.",
  "Прокляття Безжальності: Не можеш зупинити атаку, навіть якщо ворог здається. Кожна спроба милосердя в бою — ряткидок Мудрості, при провалі — ти атакуєш.",
  "Кровожерливий Шепіт: Раз на день Мастер може змусити тебе кинути ряткидок Харизми. При провалі — ти бачиш союзника як ворога на 1 раунд.",
  "Вогонь Жертвоприношення: Коли ти вбиваєш ворога, навколо тебе спалахує аура крові. Усі поруч (включно з союзниками) кидають ряткидок Статури або отримують 1d6 урону."
];

// Елементи (ідентичні структурі попереднього попапу)
const battleImg = document.querySelector(".content img");          // або інший селектор, якщо це інша сторінка
const battlePopup = document.getElementById("blessing-popup");     // той самий попап, якщо ти його перевикористовуєш
const battleText = document.getElementById("blessing-text");
const battleCloseBtn = document.querySelector(".close-btn");

// Клік по картинці → показати попап з випадковим благословенням/прокляттям
battleImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * battleBlessings.length);
  battleText.textContent = battleBlessings[random];
  battlePopup.style.display = "flex";
});

// Закриття кнопкою
battleCloseBtn.addEventListener("click", () => {
  battlePopup.style.display = "none";
});

// Закриття кліком поза вікном
battlePopup.addEventListener("click", (e) => {
  if (e.target === battlePopup) battlePopup.style.display = "none";
});

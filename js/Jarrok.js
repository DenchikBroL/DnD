// Благословення та прокляття Хаосу
const chaosBlessings = [
  "Карта Шансу: Раз на день можеш витягнути “карту долі”. Майстер кидає 1d4: 1 — +2 до всіх кидків на годину; 2 — миттєве відновлення 1d6 хп; 3 — автоматичний успіх на наступній дії; 4 — телепортація на 3 метри в будь-який бік.",
  "Сміх Хаосу: Можеш один раз змусити ворога перекинути успішний кидок. Поза боєм — перевага на перевірки Обману та Акробатики.",
  "Трикстерська Удача: Коли ти провалюєш кидок, кидай d20 ще раз. Якщо випадає 20 — провал перетворюється на критичний успіх.",
  "Прокляття Абсурду: Раз на день Мастер може змусити тебе зробити випадкову дію (кидається таблиця). Це може бути як корисно, так і смертельно.",
  "Сміх, Що Ріже: Коли ти отримуєш критичний урон, навколо тебе вибухає енергія хаосу (1d6 урону всім поруч).",
  "Зламані Закони: Закони фізики інколи “ламаються” навколо тебе. Раз на день твоя дія може просто… не спрацювати."
];

// Елементи попапу (якщо структура така сама)
const chaosImg = document.querySelector(".content img");
const chaosPopup = document.getElementById("blessing-popup");
const chaosText = document.getElementById("blessing-text");
const chaosClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
chaosImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * chaosBlessings.length);
  chaosText.textContent = chaosBlessings[random];
  chaosPopup.style.display = "flex";
});

// Закриття
chaosClose.addEventListener("click", () => {
  chaosPopup.style.display = "none";
});

chaosPopup.addEventListener("click", (e) => {
  if (e.target === chaosPopup) chaosPopup.style.display = "none";
});

// Благословення та прокляття Фортуни
const fortuneBlessings = [
  "Поцілунок Фортуни: Раз на день можеш автоматично перетворити будь-який провалений кидок у успішний. (Майстер вирішує, наскільки “успішний”.)",
  "Рука Азарту: Під час бою можеш один раз перекинути будь-який кидок атаки або урону. Поза боєм — перевага на всі перевірки, пов’язані з ризиком.",
  "Монета Долі: Кожен ранок кидаєш монету: Орел — +1 до всіх кидків на день. Решка — +1 до урону та шкоди, яку ти завдаєш.",
  "Прокляття Невдачі: Раз на день Мастер може змусити тебе перекинути успішний кидок — і прийняти другий результат.",
  "Азартна Залежність: Коли бачиш шанс ризикнути, мусиш кинути ряткидок Мудрості. При провалі — ти обираєш найризикованіший варіант.",
  "Каприз Фортуни: Коли ти отримуєш критичний успіх, наступний твій кидок автоматично має перешкоду. (Удача не любить, коли її беруть занадто багато.)"
];

// Елементи попапу (якщо структура така сама)
const fortuneImg = document.querySelector(".content img");
const fortunePopup = document.getElementById("blessing-popup");
const fortuneText = document.getElementById("blessing-text");
const fortuneClose = document.querySelector(".close-btn");

// Клік по картинці → випадкове благословення
fortuneImg.addEventListener("click", () => {
  const random = Math.floor(Math.random() * fortuneBlessings.length);
  fortuneText.textContent = fortuneBlessings[random];
  fortunePopup.style.display = "flex";
});

// Закриття
fortuneClose.addEventListener("click", () => {
  fortunePopup.style.display = "none";
});

fortunePopup.addEventListener("click", (e) => {
  if (e.target === fortunePopup) fortunePopup.style.display = "none";
});

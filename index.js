const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timer);
    timer = setInterval(function () {
      const sec = seconds % 60;
      const min = (seconds / 60) % 60;
      const hour = (seconds / 60 / 60) % 60;

      if (seconds <= 0) {
        clearInterval(timer);
        timerEl.textContent = "Пришло время сделать мир чуточку лучше :)";
      } else {
        const startTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${sec}`;
        timerEl.textContent = startTimer;
      }
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (isNaN(inputEl.value)) {
    inputEl.value = "";
    alert("Пожалуйста,введите число.");
  }
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  clearInterval(animateTimer);
  animateTimer(seconds);

  inputEl.value = "";
});

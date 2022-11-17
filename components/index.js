const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timer);
    timerEl.textContent = "Таймер установлен.";
    timer = setInterval(function () {
      let sec = seconds % 60;
      let min = Math.trunc((seconds / 60) % 60);
      let hour = Math.trunc((seconds / 60 / 60) % 60);

      sec = sec < 10 ? "0" + sec : sec;
      min = min < 10 ? "0" + min : min;
      hour = hour < 10 ? "0" + hour : hour;

      if (seconds <= 0) {
        clearInterval(timer);
        timerEl.textContent = "Пришло время сделать мир чуточку лучше :)";
      } else {
        const startTimer = `${hour}:${min}:${sec}`;
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

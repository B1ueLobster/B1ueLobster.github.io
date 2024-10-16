function initCaptcha(digitCount) {
  const captchaContainer = document.getElementById("captcha-container");
  const captchaInput = document.getElementById("captcha-input");
  const messageDiv = document.getElementById("message");
  let captchaCode = "";

  captchaContainer.innerHTML = "";

  for (let i = 0; i < digitCount; i++) {
    const digit = Math.floor(Math.random() * 10);
    captchaCode += digit; // Формуємо капчу
    const span = document.createElement("span");
    span.textContent = digit;
    captchaContainer.appendChild(span);
  }

  document.getElementById("submit-captcha").onclick = function () {
    const userInput = captchaInput.value;
    if (userInput === captchaCode) {
      messageDiv.textContent = "Капча підтверджена!";
      messageDiv.style.color = "green";
    } else {
      messageDiv.textContent = "Невірна капча. Спробуйте ще раз.";
      messageDiv.style.color = "red";
    }
    captchaInput.value = "";
  };
}

initCaptcha(10);

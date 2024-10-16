let imagesArray = [
  { path: "images/001.jpg", title: "Птеріс", description: "Різновид папороті" },
  { path: "images/002.jpg", title: "Серісса", description: "Чагарник" },
  {
    path: "images/003.jpg",
    title: "Орхідея зигопеталум",
    description:
      "Досить малочисельний вид зигопеталум (Zygopetalum) має пряме відношення до родини орхідні. ",
  },
  {
    path: "images/004.jpg",
    title: "Калатея",
    description:
      "Рослина калатея (Calathea) відноситься до сімейства Марантовие. Цей рід є найбільш численним із всіх, що входять в дане сімейство,",
  },
];

function initPhotoRotator(divId, images) {
  const rotatorDiv = document.getElementById(divId);
  let currentIndex = 0;

  const imageElement = document.createElement("img");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const counterElement = document.createElement("div");
  const backButton = document.createElement("button");
  const forwardButton = document.createElement("button");

  backButton.textContent = "Назад";
  forwardButton.textContent = "Вперед";

  backButton.style.margin = "10px";
  forwardButton.style.margin = "10px";

  backButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });

  forwardButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateDisplay();
    }
  });

  function updateDisplay() {
    imageElement.src = images[currentIndex].path;
    titleElement.textContent = images[currentIndex].title;
    descriptionElement.textContent = images[currentIndex].description;
    counterElement.textContent = `Зображення ${currentIndex + 1} з ${
      images.length
    }`;
    backButton.style.display = currentIndex === 0 ? "none" : "inline";
    forwardButton.style.display =
      currentIndex === images.length - 1 ? "none" : "inline";
  }
  rotatorDiv.appendChild(counterElement);
  rotatorDiv.appendChild(imageElement);
  rotatorDiv.appendChild(titleElement);
  rotatorDiv.appendChild(descriptionElement);
  rotatorDiv.appendChild(backButton);
  rotatorDiv.appendChild(forwardButton);
  updateDisplay();
}

initPhotoRotator("rotator", imagesArray);

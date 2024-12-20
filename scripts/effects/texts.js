document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector(".title h1");
  const textToShow = titleElement.textContent;
  titleElement.textContent = ""; // vide le contenu
  let index = 0;

  function displayNextLetter() {
    if (index < textToShow.length) {
      titleElement.textContent += textToShow[index];
      index++;
      setTimeout(displayNextLetter, 200);
    }
  }
  displayNextLetter();
});

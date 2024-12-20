// code qui permet de charger le header et de gérer les iframes
// si on est dans une iframe, on ajoute une classe iframe-manager à body
// pour pouvoir gérer en css le contenu des iframes sans à ravoir à faire une autre page html

function loadHeader() {
  const headerContainer = document.querySelector("header");
  const headerRequest = new XMLHttpRequest();

  headerRequest.open("GET", "/components/header.html");
  headerRequest.onload = function () {
    if (headerRequest.status === 200) {
      headerContainer.innerHTML = headerRequest.responseText;
    }
  };
  headerRequest.send();
}

function loadFooter() {
  const footerContainer = document.querySelector("footer");
  const footerRequest = new XMLHttpRequest();

  footerRequest.open("GET", "/components/footer.html");
  footerRequest.onload = function () {
    if (footerRequest.status === 200) {
      footerContainer.innerHTML = footerRequest.responseText;
    }
  };
  footerRequest.send();
}

window.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});

// can load the same header and footer on all pages.

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

function switchColorMode() {
  const colorMode = document.querySelector(".color-mode").textContent; // content can be 'Dark Mode' or 'Light Mode'
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  colorMode === "Dark Mode"
    ? (document.querySelector(".color-mode").textContent = "Light Mode")
    : (document.querySelector(".color-mode").textContent = "Dark Mode");
}

window.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();

  document.addEventListener("readystatechange", function () {
    // assure that the document is fully loaded
    if (document.readyState === "complete") {
      // assure that whole page has been loaded (completed)
      document
        .querySelector(".color-mode")
        .addEventListener("click", switchColorMode);
    }
  });
});

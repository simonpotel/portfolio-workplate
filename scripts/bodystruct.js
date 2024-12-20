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

window.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});

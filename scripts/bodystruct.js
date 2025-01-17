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
  const colorMode = document.querySelector("#color-mode"); // content can be 'Dark Mode' or 'Light Mode'
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    colorMode.textContent = "Light Mode";
    localStorage.setItem("colorMode", "dark");
  } else {
    colorMode.textContent = "Dark Mode";
    localStorage.setItem("colorMode", "light");
  }
}

function applyStoredColorMode() {
  const storedColorMode = localStorage.getItem("colorMode");
  const body = document.querySelector("body");
  const colorMode = document.querySelector("#color-mode");

  if (storedColorMode === "dark") {
    body.classList.add("dark-mode");
    colorMode.textContent = "Light Mode";
  } else {
    body.classList.remove("dark-mode");
    colorMode.textContent = "Dark Mode";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();

  document.addEventListener("readystatechange", function () {
    // assure that the document is fully loaded
    if (document.readyState === "complete") {
      applyStoredColorMode();
      document
        .querySelector("#color-mode")
        .addEventListener("click", switchColorMode);
      document.querySelector("body").style.display = "block";
    }
  });
});

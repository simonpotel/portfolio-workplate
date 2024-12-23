document.addEventListener("DOMContentLoaded", function () {
  const discoverButton = document.getElementById("discover");

  discoverButton.addEventListener("click", function () {
    document.body.classList.add("discover-animate");

    document.body.addEventListener("animationend", function () {
      window.location.href = "pages/discover.html";
    }, { once: true });
  });
});

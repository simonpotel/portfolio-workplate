document.addEventListener("DOMContentLoaded", () => {
  const imageUrls = [
    "https://images.pexels.com/photos/19319998/pexels-photo-19319998/free-photo-of-rhume-froid-neige-aube.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/19085986/pexels-photo-19085986/free-photo-of-ville-trottoir-cafe-tables.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/12007327/pexels-photo-12007327.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29614393/pexels-photo-29614393/free-photo-of-femmes-vietnamiennes-traditionnelles-en-tenue-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29516565/pexels-photo-29516565.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/22873692/pexels-photo-22873692/free-photo-of-grains-de-cafe-se-deversant-dans-une-tasse-sur-une-soucoupe.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load   ",
    "https://images.pexels.com/photos/28387802/pexels-photo-28387802.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29529568/pexels-photo-29529568/free-photo-of-raviolis-chinois-traditionnels-a-la-sauce-soja.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29498917/pexels-photo-29498917/free-photo-of-colonnes-romaines-antiques-dans-le-latium-italie.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/29535051/pexels-photo-29535051.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  ];

  let currentIndex = 0;
  const imagesPerLoad = 10;
  const galleryContainer = document.getElementById("images");
  const loadingIndicator = document.getElementById("loadind");

  function loadImages() {
    loadingIndicator.style.display = "block";
    const fragment = document.createDocumentFragment();

    for (
      let i = 0;
      i < imagesPerLoad && currentIndex < imageUrls.length;
      i++, currentIndex++
    ) {
      const img = document.createElement("img");
      img.src = imageUrls[currentIndex];
      img.alt = `Image ${currentIndex + 1}`;
      fragment.appendChild(img);
    }

    galleryContainer.appendChild(fragment);
    loadingIndicator.style.display = "none";
  }

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadImages();
    }
  }

  window.addEventListener("scroll", handleScroll);

  loadImages();

  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY; // Pixels défilés verticalement
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / documentHeight) * 100;
    console.log(`Progression : ${progress.toFixed(2)}%`);
  });
});

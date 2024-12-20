document.addEventListener("DOMContentLoaded", () => {
  const imageUrls = [
    "https://images.pexels.com/photos/17573942/pexels-photo-17573942/free-photo-of-voitures-monument-rue-voyager.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17274399/pexels-photo-17274399/free-photo-of-vacances-monument-voyager-espagne.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/9420857/pexels-photo-9420857.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/13622717/pexels-photo-13622717.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/18331925/pexels-photo-18331925/free-photo-of-une-personne-marchant-sur-une-montagne-enneigee-avec-un-feu-rouge.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/18331823/pexels-photo-18331823/free-photo-of-deux-grimpeurs-sur-une-montagne-enneigee-avec-des-sacs-a-dos.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2045295/pexels-photo-2045295.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7045747/pexels-photo-7045747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29535051/pexels-photo-29535051.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  ];

  let currentIndex = 0;
  const imagesPerLoad = 2;
  const galleryContainer = document.getElementById("images");
  const loadingIndicator = document.getElementById("loadind");
  const fetchApiPhotos = false;

  async function getRandomImage() {
    try {
      const response = await fetch("https://picsum.photos/200/300", {
        cache: "no-store", // no cache so we dont put the same one
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.url; // picsum.photos redirects to the actual random image URL
    } catch (error) {
      console.error("Error fetching random image:", error);
      return "https://picsum.photos/200/300"; // fallback if error
    }
  }

  async function loadImages() {
    const fragment = document.createDocumentFragment();
    if (currentIndex >= imageUrls.length) {
      currentIndex = 0;
      loadingIndicator.style.display = "none";
      return;
    }
    loadingIndicator.style.display = "block";

    const loadPromises = [];

    for (
      let i = 0;
      i < imagesPerLoad && currentIndex < imageUrls.length;
      i++, currentIndex++
    ) {
      const img = document.createElement("img");

      if (fetchApiPhotos) {
        const imagePromise = getRandomImage().then((imageUrl) => {
          img.src = imageUrl;
        });
        loadPromises.push(imagePromise);
      } else {
        img.src = imageUrls[currentIndex];
      }

      img.draggable = true;
      img.alt = `Image ${currentIndex + 1}`;
      img.addEventListener("dragstart", handleDragStart);
      img.addEventListener("dragover", handleDragOver);
      img.addEventListener("drop", handleDrop);
      fragment.appendChild(img);
    }

    await Promise.all(loadPromises); // wait all images are loaded

    galleryContainer.appendChild(fragment);
  }

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadImages();
    }
  }

  let draggedElement = null;

  function handleDragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.setData("text/plain", null);
  }

  function handleDragOver(event) {
    event.preventDefault();
    document.querySelectorAll(".drag-over").forEach((element) => {
      element.classList.remove("drag-over");
    });
    event.target.classList.add("drag-over");
  }

  function handleDrop(event) {
    event.preventDefault();
    event.target.classList.remove("drag-over");
    if (draggedElement !== event.target) {
      galleryContainer.insertBefore(draggedElement, event.target);
    }
  }

  window.addEventListener("scroll", handleScroll);
  loadImages();
});

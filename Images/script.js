const toggleButton = document.querySelector("#toggle-gallery");
const galleryContent = document.querySelector("#gallery-content");

toggleButton.addEventListener("click", function () {
    galleryContent.classList.toggle("is-hidden");

    const isHidden = galleryContent.classList.contains("is-hidden");

    toggleButton.textContent = isHidden ? "Show" : "Hide";
    toggleButton.setAttribute("aria-expanded", String(!isHidden));
});
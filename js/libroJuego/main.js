import { applyChapterConfig } from "./theme.js";

/**
 * Loads the chapter from the URL query parameters and applies it using the applyChapterConfig function.
 * If no chapter is specified in the URL, it defaults to "cap1".
 * This function is executed when the DOM is fully loaded.
 */
const loadChapterFromParams = () => {
  const chapter =
    new URLSearchParams(window.location.search).get("chapter") || "cap1";
  applyChapterConfig(chapter);
};


document.addEventListener("DOMContentLoaded", () => {
  loadChapterFromParams();

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
});

import { applyChapterConfig } from "./theme.js";

const loadChapterFromParams = () => {
  const chapter =
    new URLSearchParams(window.location.search).get("chapter") || "cap1";
  applyChapterConfig(chapter);
};

const onDocumentReady = () => {
  loadChapterFromParams();

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
};

document.addEventListener("DOMContentLoaded", onDocumentReady);

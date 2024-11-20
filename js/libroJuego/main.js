import { applyThemeConfig } from "./theme.js";

/**
 * Loads the theme from the URL query parameters and applies it using the applyThemeConfig function.
 * If no theme is specified in the URL, it defaults to "cap1".
 * This function is executed when the DOM is fully loaded.
 */
const loadThemeFromParams = () => {
  const theme =
    new URLSearchParams(window.location.search).get("theme") || "cap1";
  applyThemeConfig(theme);
};


document.addEventListener("DOMContentLoaded", () => {
  loadThemeFromParams();

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
});

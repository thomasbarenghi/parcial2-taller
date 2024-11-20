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

// Wait for the DOM to be fully loaded before executing loadThemeFromParams.
document.addEventListener("DOMContentLoaded", loadThemeFromParams);

/**
 * Listens for a click event on the "backButton" element and navigates the browser history back to the previous page.
 */
document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});

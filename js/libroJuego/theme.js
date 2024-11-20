import { configurations } from "./config.js";

/**
 * Applies the theme configuration by updating text elements, button styles, and image sources.
 * @param {string} theme - The name of the theme to apply (e.g., 'cap1', 'dark', etc.).
 */
export const applyThemeConfig = (theme) => {
  const config = getThemeConfig(theme);

  updateElementText("title", config.title, theme);
  updateElementText("story", config.paragraph, theme);
  updateElementText("question", config.question, theme);
  updateElementText("caption", config.caption, theme);

  configureButton(
    "#button1",
    config.button1Text,
    config.buttonMainColor,
    config.buttonSecondaryColor,
    config.links.button1Link
  );
  configureButton(
    "#button2",
    config.button2Text,
    config.buttonMainColor,
    config.buttonSecondaryColor,
    config.links.button2Link,
    config.showButton2
  );

  updateImageSrc("#background", config.backgroundImage);
  updateImageSrc("#vector-image", config.vectorImage);
};

/**
 * Retrieves the configuration object for a given theme.
 * @param {string} theme - The name of the theme to retrieve the configuration for.
 * @returns {Object} The configuration object for the theme.
 */
const getThemeConfig = (theme) => configurations[theme] || configurations.cap1;

/**
 * Updates the text content of a specified HTML element.
 * If the element is the "question" and the theme config hides the question, it will be hidden.
 * @param {string} id - The ID of the element to update.
 * @param {string} text - The text content to set for the element.
 * @param {string} theme - The current theme, used to determine visibility of specific elements like "question".
 */
const updateElementText = (id, text, theme) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
    if (id === "question" && !configurations[theme].showQuestion) {
      element.style.display = "none";
    }
  }
};

/**
 * Configures a button with specific styles, text, visibility, and behavior.
 * @param {string} selector - The CSS selector for the button element.
 * @param {string} text - The text to display on the button.
 * @param {string} primaryColor - The color of the button text.
 * @param {string} secondaryColor - The background color of the button.
 * @param {string} link - The URL to navigate to when the button is clicked.
 * @param {boolean} [isVisible=true] - Whether the button should be visible (default is true).
 */
const configureButton = (
  selector,
  text,
  primaryColor,
  secondaryColor,
  link,
  isVisible = true
) => {
  const button = document.querySelector(selector);
  if (button) {
    button.textContent = text;
    button.style.color = primaryColor;
    button.style.backgroundColor = secondaryColor;
    button.style.borderColor = primaryColor;
    button.style.display = isVisible ? "inline-block" : "none";

    if (button.tagName.toLowerCase() === "a") {
      button.setAttribute("href", link);
    } else if (button.tagName.toLowerCase() === "button") {
      button.onclick = () => (window.location.href = link);
    }
  }
};

/**
 * Updates the source URL of an image element.
 * @param {string} selector - The CSS selector for the image element.
 * @param {string} src - The new source URL for the image.
 */
const updateImageSrc = (selector, src) => {
  const image = document.querySelector(selector);
  if (image) {
    image.src = src;
  }
};

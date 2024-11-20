import { configurations } from "./config.js";

/**
 * Applies the theme configuration by updating text elements, button styles, and image sources.
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
 */
const getThemeConfig = (theme) => configurations[theme] || configurations.cap1;

/**
 * Updates the text content of a specified HTML element.
 * If the element is the "question" and the theme config hides the question, it will be hidden.
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
 */
const updateImageSrc = (selector, src) => {
  const image = document.querySelector(selector);
  if (image) {
    image.src = src;
  }
};

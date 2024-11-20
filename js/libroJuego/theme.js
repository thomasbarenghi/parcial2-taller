import { configurations } from "./config.js";

export const applyChapterConfig = (chapter) => {
  const config = getChapterConfig(chapter);

  updateElementText("title", config.title, chapter);
  updateElementText("story", config.paragraph, chapter);
  updateElementText("question", config.question, chapter);
  updateElementText("caption", config.caption, chapter);

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

const getChapterConfig = (chapter) =>
  configurations[chapter] || configurations.cap1;

const updateElementText = (id, text, chapter) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
    if (id === "question" && !configurations[chapter].showQuestion) {
      element.style.display = "none";
    }
  }
};

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

const updateImageSrc = (selector, src) => {
  const image = document.querySelector(selector);
  if (image) {
    image.src = src;
  }
};

import { configurations } from "./libroJuego/config.js";

const getQueryParam = param => new URLSearchParams(window.location.search).get(param);

const updateFormText = (action) => {
    const formText = document.getElementById('form-text');
    const actionTexts = {
        'edit': 'Editar Capítulo',
        'create': 'Crear Capítulo'
    };
    formText.textContent = actionTexts[action] || 'Acción no válida';
};

const populateFormFields = (chapter) => {
    document.getElementById("caption").value = chapter.caption;
    document.getElementById("title").value = chapter.title;
    document.getElementById("question").value = chapter.question;
    document.getElementById("paragraph").value = chapter.paragraph;
    document.getElementById("button1Text").value = chapter.button1Text;
    document.getElementById("button2Text").value = chapter.button2Text;
    document.getElementById("button1Link").value = chapter.links.button1Link;
    document.getElementById("button2Link").value = chapter.links.button2Link;
};

const handleChapterAction = (action, chapterId) => {
    if (action === "edit" && configurations[chapterId]) {
        const chapter = configurations[chapterId];
        populateFormFields(chapter);
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Formulario no funcional.");
};

const onDocumentReady = () => {
    const action = getQueryParam('action');
    const chapterId = getQueryParam('chapter');

    updateFormText(action);
    handleChapterAction(action, chapterId);

    const form = document.getElementById("dynamic-form");
    form.addEventListener("submit", handleFormSubmit);
};

document.addEventListener("DOMContentLoaded", onDocumentReady);

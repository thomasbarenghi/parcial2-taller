import { configurations } from "./libroJuego/config.js";

const getQueryParamFromURL = (param) =>
  new URLSearchParams(window.location.search).get(param);

const updateWelcomeText = () => {
  const user = getQueryParamFromURL("user");
  const welcomeText = document.getElementById("welcome-text");
  if (welcomeText && user) {
    welcomeText.textContent = `Bienvenido/a ${user}`;
  }
};

const createTableRowHTML = (id, chapter) => `
    <tr>
        <td class="id-column">${id}</td>
        <td class="title-column">${chapter.title}</td>
        <td class="paragraph-column">${chapter.paragraph}</td>
        <td class="question-column">${chapter.question || "No hay"}</td>
        <td class="actions-column d-flex gap-3">
            <a class="btn-text" href="librojuego.html?chapter=${id}">Ver</a>
            <a class="btn-text" href="modificar-capitulo.html?action=edit&chapter=${id}">Editar</a>
            <a class="btn-text delete-chapter" href="#" data-id="${id}">Eliminar</a>
        </td>
    </tr>
`;

const deleteChapter = (id) => {
  const confirmation = confirm(
    `¿Estás seguro de que deseas eliminar el capítulo ${id}?`
  );
  alert(confirmation ? `Capítulo ${id} eliminado.` : "Operación cancelada.");
};

const renderTableData = () => {
  const tbody = document.getElementById("tbody");
  const rows = Object.entries(configurations).map(([id, chapter]) =>
    createTableRowHTML(id, chapter)
  );
  tbody.innerHTML = rows.join("");
};

const handleDeleteChapterClick = (event) => {
  if (event.target && event.target.classList.contains("delete-chapter")) {
    event.preventDefault();
    const chapterId = event.target.getAttribute("data-id");
    deleteChapter(chapterId);
  }
};

const onDocumentReady = () => {
  renderTableData();
  updateWelcomeText();
  document.body.addEventListener("click", handleDeleteChapterClick);
};

document.addEventListener("DOMContentLoaded", onDocumentReady);

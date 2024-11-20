import { configurations } from "./libroJuego/config.js";

const getUserFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("user");
};

// Cambiar el contenido del h1 con id 'welcome-text'
const updateWelcomeText = () => {
    const user = getUserFromURL(); // Obtener el nombre del usuario de la URL
    const welcomeText = document.getElementById("welcome-text");

    if (welcomeText && user) {
        welcomeText.textContent = `Bienvenido/a ${user}`; // Cambiar el texto del h1
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
    if (confirmation) {
        alert(`Capítulo ${id} eliminado.`);
        // Aquí podrías agregar el código para realizar la eliminación real si es necesario
    } else {
        alert("Operación cancelada.");
    }
};

const renderTableData = () => {
    const tbody = document.getElementById("tbody");
    const rows = Object.entries(configurations).map(([id, chapter]) =>
        createTableRowHTML(id, chapter)
    );
    tbody.innerHTML = rows.join("");
};

document.addEventListener("DOMContentLoaded", () => {
    renderTableData();
    updateWelcomeText();

    // Delegación de eventos para los enlaces de eliminación
    document.body.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("delete-chapter")) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
            const chapterId = event.target.getAttribute("data-id");
            deleteChapter(chapterId);
        }
    });
});

/**
 * Waits for the DOM to be fully loaded and then renders the player list.
 * This function is triggered once the DOMContentLoaded event is fired.
 */
document.addEventListener("DOMContentLoaded", () => {
  renderPlayerList();
});

/**
 * Renders a list of players inside the player container.
 *
 * @param {Array<Object>} list - The list of players to be rendered.
 * @param {string} list[].avatar - The URL of the player's avatar image.
 * @param {string} list[].nickname - The player's nickname.
 * @param {string} list[].id - The player's unique identifier.
 * @param {number} list[].points - The points the player has scored.
 */
const renderPlayerList = () => {
  const playerContainer = document.querySelector(".player-list");

  /**
   * Creates an HTML string representing a single player's information.
   *
   * @param {Object} player - The player object containing avatar, nickname, id, and points.
   * @param {string} player.avatar - The player's avatar image URL.
   * @param {string} player.nickname - The player's nickname.
   * @param {string} player.id - The player's unique identifier.
   * @param {number} player.points - The points the player has scored.
   * @returns {string} The HTML string for a single player.
   */
  const createPlayerHTML = ({ avatar, nickname, id, points }) => `
      <div class="w-100 d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-start text-white gap-sm-5 gap-3">
        <div class="d-flex gap-3 align-items-center justify-content-between">
          <img src="${avatar}" alt="Avatar de ${nickname}" class="player-avatar">
          <div class="d-flex flex-column gap-2">
            <span class="player-nickname">${nickname}</span>
            <span class="player-id">${id}</span>
          </div>
        </div>
        <span class="player-points text-end">${points} PUNTOS</span>
      </div>
    `;

  /**
   * Renders a list of players to the container element.
   *
   * @param {Array<Object>} list - The list of players to render.
   */
  const renderPlayers = (list) => {
    playerContainer.innerHTML = list.map(createPlayerHTML).join("");
  };

  // Render the players using the players array.
  renderPlayers(players);
};

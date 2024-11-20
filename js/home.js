const players = [
  {
    avatar: "/multimedia/avatar1.png",
    nickname: "Contable723",
    id: "#4569",
    points: 900
  },
  {
    avatar: "/multimedia/avatar2.png",
    nickname: "ElMasLadron",
    id: "#1452",
    points: 850
  },
  {
    avatar: "/multimedia/avatar3.png",
    nickname: "Bandido814",
    id: "#7826",
    points: 849
  },
  {
    avatar: "/multimedia/avatar4.png",
    nickname: "FavoritoDeTuWa",
    id: "#3589",
    points: 708
  }
];

/**
 * Renders a list of players inside the player container.
 */
const renderPlayerList = () => {
  const playerContainer = document.querySelector(".player-list");

  /**
   * Creates an HTML string representing a single player's information.
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
   */
  const renderPlayers = (list) => {
    playerContainer.innerHTML = list.map(createPlayerHTML).join("");
  };

  renderPlayers(players);
};

renderPlayerList();
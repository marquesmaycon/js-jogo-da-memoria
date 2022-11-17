const grid = document.querySelector(".grid");

const characters = [
  "beth",
  "jerry",
  "jessica",
  "meeseeks",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "scroopy",
  "summer",
];

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function createCard(character) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
}

const loadGame = () => {
  const duplicatedCharacters = [...characters, ...characters];

  const shuffledArray = duplicatedCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

let firstCard = "";
let secondCard = "";

function revealCard(event) {
  if (event.target.parentNode.className.includes("reveal_card")) {
    return;
  }

  if (firstCard === "") {
    event.target.parentNode.classList.add("reveal_card");
    firstCard = event.target.parentNode;
  } else if (secondCard === "") {
    event.target.parentNode.classList.add("reveal_card");
    secondCard = event.target.parentNode;

    checkCards();
  }
}

function checkCards() {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add("disabled_card");
    secondCard.firstChild.classList.add("disabled_card");

    firstCard = "";
    secondCard = "";

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove("reveal_card");
      secondCard.classList.remove("reveal_card");

      firstCard = "";
      secondCard = "";

    }, 513);
  }
}

function checkEndGame() {
  const disabledCards = document.querySelectorAll('.disabled_card');

  if (disabledCards.length === 20) {

    setTimeout(() => {

      alert('Você ganhou!')
      
    }, 1000);
  }
}

loadGame();

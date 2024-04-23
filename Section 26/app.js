const player1 = {
    counter: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    counter: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningScore');

let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.counter++;

        if (player.counter === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.innerText = player.counter;
    }
}

p1Button.addEventListener('click', () => updateScore(player1, player2));

p2Button.addEventListener('click', () => updateScore(player2, player1));

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);

    reset();
});

function reset() {
    isGameOver = false;

    for (const player of [player1, player2]) {
        player.counter = 0;
        player.display.innerText = 0;
        player.display.classList.remove('winner', 'loser');
        player.button.disabled = false;
    }
}

import { renderGame } from './render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-input');
const teamTwoLabel = document.getElementById('team-two-input');
const teamOneName = document.getElementById('team-one-name');
const teamTwoName = document.getElementById('team-two-name');



let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

const pastGamesArr = [];

nameFormButton.addEventListener('click', () => {
    
    name1 = teamOneLabel.value;
    name2 = teamTwoLabel.value;

    teamOneName.textContent = name1;
    teamTwoName.textContent = name2;

    teamOneLabel.value = '';
    teamTwoLabel.value = '';

    refreshCurrentGameEl();

    
});


teamOneAddButton.addEventListener('click', () => {
    score1++;
    
    refreshCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    score2++;
    
    refreshCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    score1--;
    
    refreshCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    score2--;
    
    refreshCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    const games = {
        team1Name: name1,
        team2Name: name2,
        teamOneScore: score1,
        teamTwoScore: score2,
    };

    pastGamesArr.push(games);
    
    displayAllGames();

    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;

    refreshCurrentGameEl();
});

function refreshCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    const gameEl = renderGame(name1, name2, score1, score2);
    
    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}


function displayAllGames() {
    pastGamesEl.textContent = '';
    for (let game of pastGamesArr) {
        pastGamesEl.append(renderGame(game.team1Name, game.team2Name, game.teamOneScore, game.teamTwoScore));
    }
}

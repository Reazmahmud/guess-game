'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;





document.querySelector('.check').addEventListener('click', function () {

    const lostGame = () => {
        document.querySelector('.message').textContent = `You lost the game 👎`;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = 0;
    }
    const guessNumber = Number(document.querySelector('.guess').value);
    // Number(guessNumber);
    if (guessNumber <= 0 || guessNumber > 20) {
        document.querySelector('.message').textContent = `Invalid Number ⛔`;
        document.querySelector('body').style.backgroundColor = '#A52A2A';
    } else {

        if (secretNumber === guessNumber) {

            document.querySelector('.message').textContent = `Correct Number 🏆`;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.fontSize = '8rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (secretNumber > guessNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = `Too Low 📉`;
                document.querySelector('body').style.backgroundColor = '#ADD8E6';
                score -= 1;
                document.querySelector('.score').textContent = score;
            } else {
                lostGame();
            }

        } else if (secretNumber < guessNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = `Too High 💹`;
                document.querySelector('body').style.backgroundColor = '#00FFFF';
                score -= 1;
                document.querySelector('.score').textContent = score;
            } else {
                lostGame();
            }

        }
    }


});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.number').style.width = `15rem`;
});

let score = JSON.parse(localStorage.getItem('score'));

      if (!score) {
        score = {
          wins: 0,
          loses: 0,
          ties: 0
        };
      }

      updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You Lose.';
          } else if (computerMove === 'scissors') {
            result = 'You Win.';
          }
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You Win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You Lose.';
          }
        } else if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You Lose.';
          } else if (computerMove === 'paper') {
            result = 'You Win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }
        }

        if (result === 'You Win.') {
          score.wins++;
        } else if (result === 'You Lose.') {
          score.loses++;
        } else if (result === 'Tie.') {
          score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        updateResult(result, playerMove, computerMove);
      }

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
      }

      function updateResult(result, playerMove, computerMove) {
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You 
      <img class="move-icon" src="${playerMove}-emoji.png">
      -----
      <img class="move-icon" src="${computerMove}-emoji.png">
      Computer`;
      }
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
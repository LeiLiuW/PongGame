import Board from './Board';
import Paddle from './Paddle';
import setting from './setting';
import Ball from './Ball';
import ScoreBoard from './ScoreBoard';

const gap = setting.gap;
export default class Game{
	constructor() {
		const canvas = document.getElementById('game');
		 this.width = canvas.width;
		 this.height = canvas.height;
		 this.context = canvas.getContext('2d');
		 this.context.fillStyle = 'white';
		 this.P1scoreboard = new ScoreBoard(50,30);
		 this.P2scoreboard = new ScoreBoard(250,30);
		 this.ball = new Ball(this.width, this.height);
     this.board = new Board(this.width, this.height);
     this.player1 = new Paddle(this.height, gap, setting.P1keys, this.P1scoreboard);
     this.player2 = new Paddle(this.height, this.width - 4 - gap, setting.P2keys, this.P2scoreboard);
      // check your console for paddles
     console.log(this.player1, this.player2);
  }
  render() {
    this.board.render(this.context);
		this.P1scoreboard.render(this.context);
		this.P2scoreboard.render(this.context);
    this.player1.render(this.context);
    this.player2.render(this.context);
		this.ball.render(this.context, this.player1, this.player2);

  }
}

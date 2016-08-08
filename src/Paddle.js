import setting from './setting';

export default class Paddle{
  constructor(height, x, control, score) {
     this.speed = setting.paddleSpeed;
     this.maxHeight = height;
     this.width = setting.paddleWidth;
     this.height = setting.paddleHeight;
     this.x = x;
     this.y = (height / 2) - (this.height / 2);
     this.score =score;

     document.body.addEventListener('keydown', event => {
       switch (event.keyCode) {
         case control.up:
          this.y = Math.max (
            0,
            this.y - this.speed
          );
            break;
         case control.down:
          this.y = Math.min (
          this.maxHeight - this.height,
          this.y + this.speed
          );
            break;
         }
       });
  }

  scoreMethods(){
    this.score.score++;
  }

  render(ctx) {
    ctx.fillStyle="green";
     ctx.fillRect(
        this.x, this.y,
        this.width, this.height
      );

  }
}

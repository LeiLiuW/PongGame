import setting from './setting';
import ScoreBoard from './ScoreBoard';

const size = setting.ballSize;
//const audio = './sounds/pong-01.wav';

export default class Ball {
   constructor(width, height, speed) {
      this.x = width/2;
      this.y = height/2;
      this.vy = Math.floor(Math.random() * 12 - 6);
      this.vx = (7 - Math.abs(this.vy));
      this.size = size;
      this.speed = setting.ballSpeed;
      this.maxHeight= height;
      this.width = width;
      this.height = height;
      }

   wallBounce(ctx){
     const hitLeft = this.x >= this.width;
     const hitRight = this.x + this.size <= 0;
     const hitTop = this.y + this.size <= 0;
     const hitBottom = this.y >= this.height;
     if (hitLeft || hitRight){
       this.vx = - this.vx;
       //audio.play();
     } else if (hitTop || hitBottom) {
       this.vy = - this.vy;
      // audio.play();
     }
   }

   paddleCollision(player1, player2) {
   if (this.vx > 0) {
      const inRightEnd = player2.x <= this.x + this.size &&
      player2.x > this.x - this.vx + this.size;
      if (inRightEnd) {
         const collisionDiff = this.x + this.size - player2.x;
         const k = collisionDiff / this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitRightPaddle = y >= player2.y && y + this.size <=
         player2.y + player2.height;
         if (hitRightPaddle) {
            this.x = player2.x - this.size;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
            }
         }
      } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.size<=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
            }
        }
     }
   }

   wallCollision(){

   }


   drawBall(){

   }

   ballReset(){
     this.x = this.width/2;
     this.y = this.height/2;
     this.vy = Math.floor(Math.random() * 12);

   }

   goal(player1,player2){
     if (this.x >= this.width){
       this.ballReset();
       player1.scoreMethods();
       this.vx = - this.vx;
     } else if (this.x <=0){
       this.ballReset();
       player2.scoreMethods();
       this.vx = - this.vx;


     }

   }

   render(ctx, player1, player2) {
    //  this.x += Math.max(size, this.vx);
    //  this.y += Math.min((this.maxHeight - size),this.vy);
     ctx.beginPath();
     ctx.fillStyle="red";
     ctx.arc(this.x,this.y,size,0,Math.PI*2);
     ctx.closePath();
     ctx.fill();
     this.wallBounce(ctx);
     this.goal(player1,player2);
     this.x += this.vx;
     this.y += this.vy;
     this.paddleCollision(player1, player2);

   }





}

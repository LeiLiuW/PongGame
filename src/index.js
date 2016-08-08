import './game.css';
import Game from './Game';
import setting from './setting'


var game = new Game();
const fps = setting.fps;
function gameLoop() {
   game.render();
   setTimeout(gameLoop, fps);
}
gameLoop();

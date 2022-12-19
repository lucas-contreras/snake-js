import { SNAKE_DIRECTION, SNAKE_SIZE } from "./constants";
// import { animate } from './lib/animate';
import { SnakeInstance } from "./models/Snake";
import { StageInstance } from "./models/Stage";
import { moveTo } from "./lib/movement";
import { Animate2 } from './models/Animate2';

let canvas;
let context2d;

const {
    height: hEdge,
    width: wEdge,
} = StageInstance.getEdge();

const Animate2Instance = new Animate2(60, function() {
    SnakeInstance.updatePosition();
    const [sX, sY] = SnakeInstance.getPosition();

    context2d.clearRect(0, 0, hEdge, wEdge);

    context2d.fillStyle = 'green';
    context2d.fillRect(sX, sY, SNAKE_SIZE.W, SNAKE_SIZE.H);

});


const onWindowKeydown = (event) => {
    if (/^w$|(ArrowUp)/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.TOP);
    }
    if (/^d$|(ArrowRight)/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.RIGHT);
    }
    if (/^s$|(ArrowDown)/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.DOWN);
    }
    if (/^a$|(ArrowLeft)/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.LEFT);
    }
};

const onWindowLoaded = (event) => {
	window.addEventListener("keydown", onWindowKeydown, {
		capture: true,
	});

    canvas = document.getElementById('canvas');
    context2d = canvas.getContext('2d');

    // canvas.style.height = '600px';
    // canvas.style.width = '600px';
    canvas.style.border = '1px solid';

    // context2d.fillStyle = 'green';
    // context2d.fillRect(10, 10, STAGE_SIZE.W, STAGE_SIZE.H);


    Animate2Instance.animate();
};

window.addEventListener("load", onWindowLoaded);



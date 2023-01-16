import { FOOD_SIZE, SNAKE_DIRECTION, SNAKE_SIZE } from "./constants";
import { SnakeInstance } from "./models/Snake";
import { StageInstance } from "./models/Stage";
import { Animate2 } from './models/Animate2';
import { FoodInstance } from "./models/Food";
import { checkCollision } from './lib/collision';

let canvas;
let context2d;

const {
    height: hEdge,
    width: wEdge,
} = StageInstance.getEdge();

const Animate2Instance = new Animate2(30, function() {
    SnakeInstance.updatePosition();

    const [sX, sY] = SnakeInstance.getPosition();
    const [fX, fY] = FoodInstance.getPosition();

    context2d.clearRect(0, 0, hEdge, wEdge);

    context2d.fillStyle = 'green';
    context2d.fillRect(sX, sY, SNAKE_SIZE, SNAKE_SIZE);

    context2d.fillStyle = 'red';
    context2d.fillRect(fX, fY, FOOD_SIZE, FOOD_SIZE);

    if (checkCollision(SnakeInstance.getCoordinates(), FoodInstance.getCoordinates())) {
        SnakeInstance.increase();
        FoodInstance.initialize();
    }
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

    canvas.style.border = '1px solid';

    Animate2Instance.animate();
};

window.addEventListener("load", onWindowLoaded);



import { SNAKE_DIRECTION } from "./constants";
import { animate } from './lib/animate';
import { SnakeInstance } from "./models/Snake";
import { StageInstance } from "./models/Stage";
import { moveTo } from "./lib/movement";

const onWindowKeydown = (event) => {
    if (/w|arrowup/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.TOP);
    }
    if (/d|arrowright/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.RIGHT);
    }
    if (/s|arrowdown/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.DOWN);
    }
    if (/a|arrowleft/i.test(event.key)) {
        SnakeInstance.setDirection(SNAKE_DIRECTION.LEFT);
    }

    SnakeInstance.updatePosition();
};

const onWindowLoaded = (event) => {
	// moveTo(SnakeInstance, StageInstance);

	window.addEventListener("keydown", onWindowKeydown, {
		capture: true,
	});

    animate(SnakeInstance.updatePosition);
};

window.addEventListener("load", onWindowLoaded);

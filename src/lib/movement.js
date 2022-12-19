import { SNAKE_DIRECTION, STAGE_SIZE } from '../constants';


export function moveTo(snake, stage) {
    const [xPos, yPos] = snake.getPosition();
    const edge = stage.getEdge();

    console.log(xPos, yPos, edge);

    switch(snake.getDirection()) {
        case SNAKE_DIRECTION.TOP: {
            break;
        }
        case SNAKE_DIRECTION.RIGHT: {
            break;
        }
        case SNAKE_DIRECTION.DOWN: {
            break;
        }
        case SNAKE_DIRECTION.LEFT: {
            break;
        }
        default:
            throw new Error('Invalid direction');
    }
}
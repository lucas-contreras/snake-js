import { SNAKE_DIRECTION, STAGE_SIZE } from '../constants';

class Snake {
    speed = .05;
	position = [0, 0];
    direction = SNAKE_DIRECTION.RIGHT;

    getPosition() {
        return this.position;
    }

    getDirection() {
        return this.direction;
    }

    setPosition(position) {
        const [xPos, yPos] = position;
        let newXPos = xPos;
        let newYPos = yPos;

        if (xPos < 0) {
            newXPos = 600;
        }

        if (xPos >= 600) {
            newXPos = 0;
        }

        if (yPos < 0) {
            newYPos = 600;
        }

        if (yPos >= 600) {
            newYPos = 0;
        }

        this.position = [newXPos, newYPos];
    }

    setDirection(direction) {
        if (direction === this.direction) {
            return;
        }

        if (
            (this.direction === SNAKE_DIRECTION.TOP && direction === SNAKE_DIRECTION.DOWN)
            || (this.direction === SNAKE_DIRECTION.DOWN && direction === SNAKE_DIRECTION.TOP)
        ) {
            return;
        }

        if (
            (this.direction === SNAKE_DIRECTION.LEFT && direction === SNAKE_DIRECTION.RIGHT)
            || (this.direction === SNAKE_DIRECTION.RIGHT && direction === SNAKE_DIRECTION.LEFT)
        ) {
            return;
        }

        this.direction = direction;
    }

    updatePosition() {
        const [x, y] = this.position;

        switch(this.direction) {
            case SNAKE_DIRECTION.TOP: {
                this.setPosition([x, y - STAGE_SIZE.H * this.speed]);
                break;
            }
            case SNAKE_DIRECTION.RIGHT: {
                this.setPosition([x + STAGE_SIZE.W * this.speed, y]);
                break;
            }
            case SNAKE_DIRECTION.DOWN: {
                this.setPosition([x, y + STAGE_SIZE.H * this.speed]);
                break;
            }
            case SNAKE_DIRECTION.LEFT: {
                this.setPosition([x - STAGE_SIZE.W * this.speed, y]);
                break;
            }
        }

        console.log(Object.keys(SNAKE_DIRECTION)[this.direction], this.position);
    }
}

export const SnakeInstance = new Snake();

import { SNAKE_DIRECTION } from '../constants';

class Snake {
	position = [0, 0];
    direction = SNAKE_DIRECTION.RIGHT;

    getPosition() {
        return this.position;
    }

    getDirection() {
        return this.direction;
    }

    setPosition(position) {
        this.position = position;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    updatePosition() {
        console.log('aaaaaaaaaaaaa', this.direction);
    }
}

export const SnakeInstance = new Snake();

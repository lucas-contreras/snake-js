import { SNAKE_DIRECTION, SNAKE_SIZE, STAGE_SIZE } from '../constants';

class Snake {
    speed = .05;
	position = [0, 0];
    direction = SNAKE_DIRECTION.RIGHT;

    getPosition() {
        return this.position;
    }

    getCoordinates() {
        const [x1, y1] = this.position;

        return {
            x1,
            y1,
            x2: x1 + SNAKE_SIZE,
            y2: y1 + SNAKE_SIZE,
        }
    }

    setPosition(position) {
        // TODO: these values should be handle in a constant
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
        if (!this.checkIfValidDirection(direction)) {
            return;
        }

        this.direction = direction;
    }

    checkIfValidDirection(direction) {
        const isSameDirection = direction === this.direction;

        const isOppositeDirectionTopDown = 
            (this.direction === SNAKE_DIRECTION.TOP && direction === SNAKE_DIRECTION.DOWN)
            || (this.direction === SNAKE_DIRECTION.DOWN && direction === SNAKE_DIRECTION.TOP);


        const isOppositeDirectionLeftRight = (this.direction === SNAKE_DIRECTION.LEFT && direction === SNAKE_DIRECTION.RIGHT)
            || (this.direction === SNAKE_DIRECTION.RIGHT && direction === SNAKE_DIRECTION.LEFT);

        if (isSameDirection || isOppositeDirectionTopDown || isOppositeDirectionLeftRight) {
            return false;
        }

        return true;
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
            default: {
                throw new Error('direction not implemented');
            }
        }
    }

    increase() {
        console.log('lala');
    }
}

export const SnakeInstance = new Snake();

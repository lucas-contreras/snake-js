import { FOOD_SIZE } from "../constants";

class Food {
    position = [0, 0];

    getPosition() {
        return this.position;
    }

    getCoordinates() {
        const [x1, y1] = this.position;

        return {
            x1,
            y1,
            x2: x1 + FOOD_SIZE,
            y2: y1 + FOOD_SIZE,
        }
    }
    
    constructor() {
        this.initialize();
    }

    initialize() {
        const x = this.createRandomPosition();
        const y = this.createRandomPosition();

        this.position = [x, y];
        console.log(this.position);
    }

    createRandomPosition() {
        // TODO: move to constants
        return Math.floor(Math.random() * 6) * 100;
    }
}

export const FoodInstance = new Food();
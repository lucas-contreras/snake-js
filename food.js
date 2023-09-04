function Food() {
  return {
    position: [],
    eaten(position) {
      return detectCollision(position, this.position, SNAKE_SIZE, -10);
    },
    create() {
      const rndX = Math.floor(Math.random() * STAGE_WIDTH / 2);
      const rndY = Math.floor(Math.random() * STAGE_HEIGHT / 2);

      const modX = rndX % SNAKE_SPEED;
      const modY = rndY % SNAKE_SPEED;

      this.position = [rndX - modX, rndY - modY];
      return this;
    },
  };
}

var FoodInstance = new Food();

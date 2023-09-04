var SNAKE_SIZE = 20;
var SNAKE_SPEED = 20;

const AXIS_X = "x";
const AXIS_Y = "y";

function Snake() {
  function validateBoundaries(num, maxThreshold = STAGE_WIDTH) {
    if (num < 0) {
      return false;
    }

    if (num + SNAKE_SIZE > maxThreshold) {
      return false;
    }

    return true;
  }

  return {
    axis: "x",
    direction: 1,
    nextNode: undefined,
    position: [0, 0],
    root: true,
    setAxis(axis) {
      this.axis = axis;
      return this;
    },
    setDirection(direction) {
      this.direction = direction;
      return this;
    },
    add() {
      const newNode = new SnakeChild();

      if (!this.nextNode) {
        newNode.init({
          position: this.position,
          axis: this.axis,
          direction: this.direction,
        });
        this.nextNode = newNode;
      } else {
        const node = this.nextNode.getLatestNode();
        const [x, y, axis, direction] = node.position;
        newNode.init({ position: [x, y], axis, direction });
        node.nextNode = newNode;
      }

      return this;
    },
    move() {
      const [x, y] = this.position;
      const isX = this.axis === AXIS_X;
      const deltaXY = isX ? x : y;

      const velocity = this.direction * SNAKE_SPEED;
      const deltaVelocity = deltaXY + velocity;

      if (!validateBoundaries(deltaVelocity)) {
        this.onCrash?.();
        return undefined;
      }

      if (this.nextNode) {
        this.nextNode.update(this.position);
      }

      this.position = [isX ? deltaVelocity : x, !isX ? deltaVelocity : y];
      return this;
    },
    restart() {
      this.axis = AXIS_X;
      this.direction = 1;
      this.position = [0, 0];
      this.nextNode = undefined;
    },
  };
}

function SnakeChild() {
  return {
    position: [],
    nextNode: undefined,
    getLatestNode() {
      if (this.nextNode) {
        return this.nextNode.getLatestNode();
      }
      return this;
    },
    init({ position, axis, direction }) {
      const [x, y] = position;
      let newX = x;
      let newY = y;

      const valueDirection = SNAKE_SIZE * direction * -1;

      if (axis === AXIS_X) {
        newX = x + valueDirection;
      } else {
        newY = y + valueDirection;
      }

      this.position = [newX, newY, axis, direction];
      return this;
    },
    update(nextMove) {
      if (this.nextNode) {
        this.nextNode.update(this.position);
      }

      const crashed = detectCollision(
        SnakeInstance.position,
        this.position,
        SNAKE_SIZE
      );

      if (crashed) {
        SnakeInstance?.onCrash();
      }

      this.position = nextMove;
    },
  };
}

var SnakeInstance = new Snake();

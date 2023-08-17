const snakeSize = 50;

function mSnake() {
  function obtainThreshold(num, maxThreshold = stageWidth) {
    if (num + snakeSize < 0) {
      return maxThreshold;
    }

    if (num > maxThreshold) {
      return 0;
    }

    return num;
  }

  return {
    speed: 1,
    direction: 1,
    currentAxis: "x",
    position: [0, 0],
    size: snakeSize,
    move: function () {
      const [x, y] = this.position;
      const isXAxis = this.currentAxis === "x";
      const deltaXY = isXAxis ? x : y;

      let newDelta = deltaXY + this.direction * this.speed;
      newDelta = obtainThreshold(newDelta);

      this.position = [isXAxis ? newDelta : x, !isXAxis ? newDelta : y];
      return this;
    },
    setDirection: function (direction) {
      this.direction = direction;
      return this;
    },
    setSpeed(speed) {
      this.speed = speed;
      return this;
    },
    setAxis(axis) {
      this.currentAxis = axis;
      return this;
    },
  };
}

var SnakeInstance = mSnake();

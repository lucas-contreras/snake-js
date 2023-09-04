const targetFps = 30;
const frameInterval = 2000 / targetFps;
var STAGE_HEIGHT = 500;
var STAGE_WIDTH = 500;
let requestAnimationId;

const keyCoordinates = {
  w: ["y", -1],
  ArrowUp: ["y", -1],
  s: ["y", 1],
  ArrowDown: ["y", 1],
  a: ["x", -1],
  ArrowLeft: ["x", -1],
  d: ["x", 1],
  ArrowRight: ["x", 1],
};

let ctx;

function animate() {
  if (!ctx) {
    return;
  }

  SnakeInstance.move();

  const { position: snakePosition } = SnakeInstance;
  const { position: foodPosition } = FoodInstance;
  const [x, y] = snakePosition;
  const [fX, fY] = foodPosition;

  const wasEaten = FoodInstance.eaten(snakePosition);

  if (wasEaten) {
    FoodInstance.create();
    SnakeInstance.add();
  }

  ctx.clearRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);

  // STAGE
  ctx.fillStyle = "beige";
  ctx.fillRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);

  // FOOD
  ctx.fillStyle = "blue";
  ctx.fillRect(fX, fY, SNAKE_SIZE, SNAKE_SIZE);

  let node = SnakeInstance.nextNode;

  // BODY
  do {
    if (node) {
      const [nodeX, nodeY] = node.position;
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.fillRect(nodeX, nodeY, SNAKE_SIZE - 5, SNAKE_SIZE - 5);
    }

    node = node?.nextNode;
  } while (node);

  // SNAKE HEAD
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, SNAKE_SIZE, SNAKE_SIZE);

  ctx.fill();
}

function startAnimation() {
  const startTime = performance.now();
  let previousTime = startTime;

  function loop(currentTime) {
    const elapsedTime = currentTime - previousTime;

    requestAnimationId = requestAnimationFrame(loop);

    if (elapsedTime >= frameInterval) {
      animate();
      previousTime = currentTime;
    }
  }

  requestAnimationId = requestAnimationFrame(loop);
}

function stopAnimation() {
  cancelAnimationFrame(requestAnimationId);
  requestAnimationId = undefined;
}

function onLoad(event) {
  const stage = document.querySelector("#stage");

  if (!stage) {
    return;
  }

  stage.width = STAGE_WIDTH;
  stage.height = STAGE_HEIGHT;
  stage.style.border = "1px solid #000";

  ctx = stage.getContext("2d");

  SnakeInstance.onCrash = function () {
    stopAnimation();

    SnakeInstance.restart();
    FoodInstance.create();

    alert("you lost, maybe the next time could make it, good luck!");
  };

  FoodInstance.create();
}

function onKeydown(event) {
  const keyPressedInfo = keyCoordinates[event.key];
  if (!keyPressedInfo) {
    return;
  }

  const [axis, direction] = keyPressedInfo;

  if (SnakeInstance.axis === axis && SnakeInstance.direction !== direction) {
    return;
  }

  SnakeInstance.setAxis(axis).setDirection(direction);

  if (!requestAnimationId) {
    startAnimation();
  }
}

window.addEventListener("load", onLoad);
window.addEventListener("keydown", onKeydown);

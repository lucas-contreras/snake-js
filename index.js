const targetFps = 30;
const frameInterval = 1000 / targetFps;
const stageHeight = 500;
const stageWidth = 500;

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

  const { size, position } = SnakeInstance;
  const [x, y] = position;

  ctx.clearRect(0, 0, stageWidth, stageHeight);

  ctx.fillStyle = "beige";
  ctx.fillRect(0, 0, stageWidth, stageHeight);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.fillRect(x, y, size, size);
  ctx.fill();

  SnakeInstance.move();
}

function startAnimation() {
  const startTime = performance.now();
  let previousTime = startTime;

  function loop(currentTime) {
    const elapsedTime = currentTime - previousTime;

    if (elapsedTime >= frameInterval) {
      animate();
      previousTime = currentTime;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function onLoad(event) {
  const stage = document.querySelector("#stage");
  if (!stage) {
    return;
  }

  stage.width = stageWidth;
  stage.height = stageHeight;
  stage.style.border = "1px solid #000";

  ctx = stage.getContext("2d");

  SnakeInstance.setSpeed(2.5);
  startAnimation();
}

function onKeydown(event) {
  const keyPressedInfo = keyCoordinates[event.key];
  if (!keyPressedInfo) {
    return;
  }

  const [axis, direction] = keyPressedInfo;
  SnakeInstance.setAxis(axis).setDirection(direction);
}

window.addEventListener("load", onLoad);
window.addEventListener("keydown", onKeydown);

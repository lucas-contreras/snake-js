function detectCollision(posA, posB, shapeSize, tolerance = 0) {
  const [xA, yA] = posA;
  const [xB, yB] = posB;

  const xA2 = xA + shapeSize;
  const yA2 = yA + shapeSize;

  const bX2 = xB + shapeSize;
  const bY2 = yB + shapeSize;

  const isInX = xA >= xB && xA < bX2;
  const isInX2 = xA2 > xB && xA2 < bX2;

  const isInY = yA >= yB && yA < bY2;
  const isInY2 = yA2 > yB && yA2 < bY2;

  const result = (isInX && (isInY || isInY2)) || (isInX2 && (isInY || isInY2));

  return result;
}
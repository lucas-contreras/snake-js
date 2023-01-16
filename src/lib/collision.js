
export function checkCollision(coordinatesA, coordinatesB) {
    const { x1: aX1, y1: aY1, x2: aX2, y2: aY2 } = coordinatesA;
    const { x1: bX1, y1: bY1, x2: bX2, y2: bY2 } = coordinatesB;

    return (aX2 > bX1) && (bX2 > aX1) && (aY2 > bY1) && (bY2 > aY1);
}
const duration = 1000;
let startTime = null;

function loop(timeStamp) {
	if (!startTime) {
		startTime = timeStamp;
	}

	const runtime = timeStamp - startTime;

	if (runtime < duration) {
		console.log(timeStamp);
		requestAnimationFrame(loop);
	}
}

export function animate(callback) {
	requestAnimationFrame(loop);
}

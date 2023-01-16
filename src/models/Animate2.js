export class Animate2 {
    id = null;
    fpsInterval = 0;
    next = 0;
    startTime = 0;
    callback = () => {};

    constructor(fps, callback) {
        this.fpsInterval = 1000 / fps;
        this.callback = callback;

        this.initialize();
    }

    initialize() {
        this.next = Date.now();
        this.startTime = this.next;
    }

    isRunning() {
        return Boolean(this.id);
    }

    animate() {
        this.id = window.requestAnimationFrame(() => this.animate());

        const now = Date.now();
        const elapsed = now - this.next;

        if (elapsed > this.fpsInterval) {
            this.next = now - (elapsed % this.fpsInterval);
            this.callback();
        }
    }

    stop() {
        window.cancelAnimationFrame(this.id);
    }
}
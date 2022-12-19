import { STAGE_SIZE, STATE_LENGTH } from "../constants";

class Stage {
	width = 0;
	height = 0;

	constructor() {
		this.initialize();
	}

	initialize() {
		this.width = STAGE_SIZE.W * STATE_LENGTH.X;
		this.height = STAGE_SIZE.H * STATE_LENGTH.Y;

		console.log("stage is initialized");
	}

	getEdge() {
		return {
			width: this.width,
			height: this.height,
		};
	}
}

export const StageInstance = new Stage();

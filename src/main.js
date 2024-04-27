// @ts-nocheck
import Phaser from 'phaser'

import PlaneSave from './plane_save'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [PlaneSave],

	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
		}
}

export default new Phaser.Game(config)

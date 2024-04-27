// @ts-nocheck
import Phaser from 'phaser'
export default class PlaneSave extends
Phaser.Scene
{
    constructor(){
        super('plane-save')
    }
    init(){
    }
    preload(){
        this.load.image('background','public/images/background_layer_1.png')
        this.load.image('background1', 'public/images/background_layer_2.png')
        this.load.image('background2', 'public/images/background_layer_3.png')
    }
    create(){
        this.add.image(400, 290, 'background').setScale(4).refreshBody()
        this.add.image(400, 290, 'background1').setScale(4).refreshBody()
        this.add.image(400, 290, 'background2').setScale(4).refreshBody()
    }
    update(){
    }
}
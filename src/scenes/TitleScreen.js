import Phaser from 'phaser'


class TitleScreen extends Phaser.Scene {
  preload() {}

  
  create() {
    this.add.text(400, 250, "Hey world")
  }
}


export default TitleScreen
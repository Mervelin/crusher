var preloader = {};

preloader.preload = function () {
  //this.game.load.image('logo', 'images/phaser.png');
};

preloader.create = function () {
  this.load.pack('level1', 'assets/assetPack.json', null, this);

  this.game.state.start('game');
};

module.exports = preloader;

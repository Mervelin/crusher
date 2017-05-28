var game = {};

game.create = function () {
  //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
  //logo.anchor.setTo(0.5, 0.5);
  this.pulling = false;
  this.launched = false;
  this.round = 0;
  this.score = 0;

  this.physics.startSystem(Phaser.Physics.P2JS);
  this.world.setBounds(0,0,3000,768);

  this.bg = this.add.sprite(0,0,'bg');
  this.bg.fixedToCamera = true;

  this.forceLine = this.add.graphics(0,0);

  this.comet = this.add.sprite(300,300,'comet');
  this.coment.anchor.set(.5,.5);
  this.physics.p2.enable(this.comet);
  this.comet.body.setCircle(40,140,-10);
  this.comet.inputEnabled = true;

  this.asteroids = this.add.group();
  this.asteroids.enableBody = true;
  this.asteroids.physicsBodyType = Phaser.Physics.P2JS;

  this.trail = this.add.emitter(this.comet.x, this.comet.y);
  this.trail.makeParticles(['particle1','particle2']);
  this.trail.start(false, 3000, 50);
  this.trail.setAlpha(1,0,3000);
  this.trail.setScale(0.4, 1, 0.4, 1, 4000);

  this.add.sprite(0,0,'fg');

  var style = { font: "30px Arial", fill: "#fff"};
  this.txtScore = this.add.text(20,20,"Round 0, Score 0", style);
  this.txtScore.fixedToCamera = true;

  this.camera.follow(this.comet);
  this.resetBoard();
};

game.resetBoard = function () {
  this.comet.body.reset();
  this.comet.body.rotation = 0;
  this.comet.body.motionState = Phaser.Physics.P2.Body.STATIC;
}

module.exports = game;

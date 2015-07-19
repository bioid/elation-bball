var _reqs = [
    'engine.engine',
    'engine.things.shooter_server',
    'engine.things.remoteplayer',
    'engine.things.ball',
    'engine.things.light',
    'engine.things.generic',
    'vrcade.vrcadeplayer',
    'bball.testplane'
  ];
elation.require(_reqs, function() {

  elation.component.add('bball_server', function() {

    this.initWorld = function() {
      this.world.load({
        type: 'bball_server',
        name: 'bball_server',
        properties: {}
      });
    };
    
  }, elation.engine.server);

  elation.component.add('engine.things.bball_server', function() {
    this.initNetwork = function() {
      this.server.start({ port: 9001 });
    };
    this.loadWorld = function() {
      this.neighborhood = this.spawn('testplane', 'neighborhood', {position: [0, -2, 0]});
    };

  }, elation.engine.things.shooter_server);
});

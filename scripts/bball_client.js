var _reqs = [
  'engine.engine',
  'engine.things.shooter_client',
  ];
  
elation.require(_reqs, function() {
  elation.component.add('bball_client', function() {
    this.init = function() {
      this.name = this.args.name || 'default';
      this.engine = elation.engine.create(this.name, ["physics", "ai", "world", "render", "controls", "client"], elation.bind(this, this.startEngine));
    };
    
    this.initWorld = function() {
      this.world.load({
        type: 'bball_client',
        name: 'bball_client',
        properties: {}
      });

      this.gameobj = this.world.children.bball_client;
      this.gameobj.setview(this.view);
    };
    
  }, elation.engine.client);
  
  elation.component.add('engine.things.bball_client', function() {
    this.initNetwork = function() {
      this.engine.systems.client.connect({
        transport: 'websocket',
        host: 'dev.brandonhinshaw.us',
        port: '9001'
      })
    };
  }, elation.engine.things.shooter_client)
});
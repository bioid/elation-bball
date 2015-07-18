
elation.require(['engine.things.generic'], function() {
  
elation.component.add('engine.things.remoteplayer', function() {
  this.postinit = function() {
    // this.set('render.mesh', '/media/testchamber/ralph.json');  
  };

  this.createObject3D = function() {
    var geo = new THREE.BoxGeometry(1, 1, 1),
        mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        mesh = new THREE.Mesh(geo, mat);
    return mesh;
  }; 
}, elation.engine.things.generic);

});

import THREE from 'three';
window.THREE = THREE;

var app = {
  init: function(){
        
    var container;
    var camera; 
    var controls; 
    var scene; 
    var renderer;
    var sphere;
    var plane;
    var effect;
    var start = Date.now();

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);

    }

    //

    function render() {

      var timer = Date.now() - start;

      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;

      controls.update();

      effect.render(scene, camera);

    }

    function animate() {

      requestAnimationFrame(animate);

      render();

    }

    function init() {

      var width = window.innerWidth || 2;
      var height = window.innerHeight || 2;

      container = document.createElement('div');
      document.body.appendChild(container);

      var info = document.createElement('div');
      info.style.position = 'absolute';
      info.style.top = '10px';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      info.innerHTML = 'Drag to change the view';
      container.appendChild(info);

      camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
      camera.position.y = 150;
      camera.position.z = 500;

      controls = new THREE.TrackballControls(camera);

      scene = new THREE.Scene();

      var light = new THREE.PointLight(0xffffff);
      light.position.set(500, 500, 500);
      scene.add(light);

      light = new THREE.PointLight(0xffffff, 0.25);
      light.position.set(-500, -500, -500);
      scene.add(light);

      sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshLambertMaterial());
      scene.add(sphere);

      // Plane

      plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(400, 400), new THREE.MeshBasicMaterial({
        color: 0xe0e0e0
      }));
      plane.position.y = -200;
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      renderer = new THREE.CanvasRenderer();
      renderer.setClearColor(0xf0f0f0);
      renderer.setSize(width, height);
      // container.appendChild( renderer.domElement );

      effect = new THREE.AsciiEffect(renderer);
      effect.setSize(width, height);
      container.appendChild(effect.domElement);

      window.addEventListener('resize', onWindowResize, false);
    }

    init();
    animate();

  }
};

module.exports = app;

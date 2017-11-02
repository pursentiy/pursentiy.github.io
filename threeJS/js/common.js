$(function () {
  var stats = initStats();
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60 
    , window.innerWidth / window.innerHeight , 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xEEEEEE, 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;

  var axes = new THREE.AxisHelper( 20 );
  scene.add(axes);

  var planeGeometry = new THREE.PlaneGeometry(80,40);
  var planeMaterial = new THREE.MeshLambertMaterial(
    {color: 0xffffff});
  var plane = new THREE.Mesh(planeGeometry,planeMaterial);
  plane.receiveShadow = true;
  plane.rotation.x=-0.5*Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  scene.add(plane);

  var cubeGeometry = new THREE.CubeGeometry(4,4,4);
  var cubeMaterial = new THREE.MeshLambertMaterial(
    {color: 0xff0000});
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  scene.add(cube);

  var boxGeometry = new THREE.CubeGeometry(5, 5, 5);
for ( var i = 0; i < boxGeometry.faces.length; i ++ ) {
    boxGeometry.faces[ i ].color.setHex( Math.random() * 0xffffff );
}

var boxMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
  var box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(4, 6, 0)
  scene.add(box);

  var sphereGeometry = new THREE.SphereGeometry(4,20,20);
  var sphereMaterial = new THREE.MeshLambertMaterial(
    {color: 0x7777ff});
  var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
  sphere.castShadow = true;
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);

  var ambientLight = new THREE.AmbientLight(0x0c0c0c);
  scene.add(ambientLight);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( -40, 60, -10 );
  spotLight.castShadow = true;
  scene.add(spotLight );

  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.position.set(-30,40,20);
  camera.lookAt(scene.position);

  $("#WebGL-output").append(renderer.domElement);



  var step = 0;

//Настройка параметров системы
var controls = new function() {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.03;
  this.cameraX = 0;
  this.cameraY = 0;
  this.cameraZ = 0;
}

var gui = new dat.GUI();
gui.add(controls, 'rotationSpeed',0,0.5);
gui.add(controls, 'bouncingSpeed',0,0.5);
//gui.add(controls, 'cameraX',-90,90);
//gui.add(controls, 'cameraY',-90,90);
//gui.add(controls, 'cameraZ',-90,90);

renderScene();

//Обновление сцены
function renderScene() {
  stats.update();
  console.log(controls);
  cube.rotation.x += controls.rotationSpeed;
  cube.rotation.y += controls.rotationSpeed;
  cube.rotation.z += controls.rotationSpeed;

  step += controls.bouncingSpeed;
  //sphere.position.x = 20+(10*(Math.cos(step)));
  sphere.position.y = ( 20*Math.abs(Math.sin(step))); 

  //camera.position.x = controls.cameraX;
  //camera.rotation.x = controls.cameraX*Math.PI;
  //camera.rotation.y = controls.cameraY*Math.PI;
  //camera.rotation.z = controls.cameraZ*Math.PI;


  document.onclick = function(){
      //alert('test');
    }

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }

  function initStats() {
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    $("#Stats-output").append(stats.domElement );
    return stats;
  }





});



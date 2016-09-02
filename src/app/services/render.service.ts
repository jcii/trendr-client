// import { Injectable } from '@angular/core';
// import Scene = THREE.Scene;
// import Renderer = THREE.Renderer
// import WebGLRenderer = THREE.WebGLRenderer
// import Camera = THREE.Camera


// THREE.SpriteCanvasMaterial = function ( parameters ) {

// 	THREE.Material.call( this );

// 	this.type = 'SpriteCanvasMaterial';

// 	this.color = new THREE.Color( 0xffffff );
// 	this.program = function ( context, color ) {};

// 	this.setValues( parameters );

// };

// @Injectable()
// export class RenderService {
//   private scene: Scene
//   private renderer: Renderer
//   private camera: Camera

//   constructor() {}
//   mouseX = 0
//   mouseY = 0
//   windowHalfX = window.innerWidth / 2
//   windowHalfY = window.innerHeight / 2
//   SEPARATION = 200
//   AMOUNTX = 10
//   AMOUNTY = 10

//   public init(camera: Camera, scene: Scene, renderer: Renderer) {

//     var container, separation = 100
//     var amountX = 50
//     var amountY = 50
//     var particles, particle


//     container = document.createElement("div")
//     document.body.appendChild(container);

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.z = 100;

//     scene = new THREE.Scene();

//     renderer = new THREE.WebGLRenderer();
    
//     // renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     container.appendChild(renderer.domElement);

//     // particles

//     var PI2 = Math.PI * 2;
//     var material = new THREE.SpriteCanvasMaterial({

//       color: 0xFF4E50,
//       program: function(context) {

//         context.beginPath();
//         context.arc(0, 0, 0.5, 0, PI2, true);
//         context.fill();

//       }

//     });

//     var geometry = new THREE.Geometry();

//     for (var i = 0; i < 100; i++) {

//       particle = new THREE.Sprite(material);
//       particle.position.x = Math.random() * 2 - 1;
//       particle.position.y = Math.random() * 2 - 1;
//       particle.position.z = Math.random() * 2 - 1;
//       particle.position.normalize();
//       particle.position.multiplyScalar(Math.random() * 10 + 450);
//       particle.scale.x = particle.scale.y = 10;
//       scene.add(particle);

//       geometry.vertices.push(particle.position);

//     }

//     // lines

//     var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
//       color: 0xffffff,
//       opacity: 0.5
//     }));
//     scene.add(line);

//     document.addEventListener('mousemove', this.onDocumentMouseMove, false);
//     document.addEventListener('touchstart', this.onDocumentTouchStart, false);
//     document.addEventListener('touchmove', this.onDocumentTouchMove, false);

//     //

//     window.addEventListener('resize', onWindowResize, false);

//   }

//   onWindowResize() {

//     windowHalfX = window.innerWidth / 2;
//     windowHalfY = window.innerHeight / 2;

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);

//   }

//   //

//   onDocumentMouseMove(event) {

//     mouseX = event.clientX - windowHalfX;
//     mouseY = event.clientY - windowHalfY;

//   }

//   onDocumentTouchStart(event) {

//     if (event.touches.length > 1) {

//       event.preventDefault();

//       mouseX = event.touches[0].pageX - windowHalfX;
//       mouseY = event.touches[0].pageY - windowHalfY;

//     }

//   }

//   onDocumentTouchMove(event) {

//     if (event.touches.length == 1) {

//       event.preventDefault();

//       mouseX = event.touches[0].pageX - windowHalfX;
//       mouseY = event.touches[0].pageY - windowHalfY;

//     }

//   }

//   //

//   animate() {

//     requestAnimationFrame(animate);

//     render();

//   }

//   render() {
//     var timer = Date.now() * 0.0002;

//     camera.position.x = Math.cos(timer) * 200;
//     camera.position.z = Math.sin(timer) * 200;
//     camera.position.y = Math.sin(timer) * 200;
//     camera.lookAt(scene.position);

//     // camera.position.x += ( mouseX - camera.position.x ) * .05;
//     // camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
//     // camera.lookAt( scene.position );

//     renderer.render(scene, camera);

//   }


//   // this.init()
//   // this.animate();
// }
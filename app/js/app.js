import p5 from 'p5';
import CA from './ca';

let ca;

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);

  // Create a CA with rule number
  ca = new CA(30);
};

window.draw = () => {
  ca.render();
  ca.generate();
};

// window.mouseDragged = () => {
//     world.addVehicle(mouseX, mouseY);
// }
//
// window.keyPressed = () => {
//     if (key === ' ') {
//         world.toggleScene();
//     } else if (key === 'R') {
//         world.toggleForceMapRendering();
//     } else if (key === 'A') {
//         world.toggleAlignment();
//     } else if (key === 'S') {
//         world.toggleSeparation();
//     } else if (key === 'C') {
//         world.toggleCohesion();
//     } else if (key === 'M') {
//         world.toggleMouseAttraction();
//     }
// }

// // global variable used to avoid polluting global namespace
// var foo = foo || {}; // ...but choose something unique! i.e. not foo!
// // Instead of hooking on to a single global variable
// // you could also simply do the following here:
// // var $ = new p5(...
// // But given the abuse $ gets as a global variable that would be bad
// <span class="Emoticon Emoticon3"><span>;)</span></span>
// foo.p5 = new p5(function (p) {
//     p.setup = function() {
//         //...
//     }
//
//     p.draw = function() {
//         //...
//     }
// }), "sketch01");
// // 'sketch01' is the id of the target container in index.html
//
// // I can then reference foo.p5 from Objects defined *outside*
// // the p5 instantiation function:
//
// foo.Mover = function(x, y, vx, vy) {
//   //...
// }
// // snip...
// foo.Mover.prototype.draw = function () {
//     var p = foo.p5;
//     p.ellipseMode(p.RADIUS);
//     p.fill(0, 0, 0);
//     p.ellipse(this.x, this.y, this.rad, this.rad)
// };

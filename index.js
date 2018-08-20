//Trapezoid
// let cx = document.querySelector('canvas').getContext("2d")
// cx.beginPath();
// cx.moveTo(10, 30);
// cx.lineTo(60, 30);
// cx.lineTo(50, 10);
// cx.lineTo(20, 10);
// cx.lineTo(10, 30);
// cx.stroke();
//Red Diamond
// let cx = document.querySelector('canvas').getContext("2d")
// cx.beginPath();
// cx.moveTo(30, 80);
// cx.lineTo(60, 50);
// cx.lineTo(30, 20);
// cx.lineTo(0, 50);
// cx.fillStyle = 'red'
// cx.fill()
//Slanted Lines
// function slantedLines(numOfLines){
//   let cx = document.querySelector('canvas').getContext("2d");
//   cx.beginPath();
//   cx.moveTo(10, 10);
//   let y = 10;
//   for(let i = 0; i < numOfLines; i++){
//     if(i % 2 === 0){
//       cx.lineTo(50, y+=5);
//     } else {
//       cx.lineTo(10, y+=5);
//     }
//   };
//   cx.stroke();
// };
//
// slantedLines(10)

//Spiral
function drawSpiral(){
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  let centerX = 50, centerY = 50, radius = 50;
  cx.beginPath();
  cx.moveTo(centerX+radius, centerY+radius)
  for(let i = 0; i < 20; i++){
    cx.lineTo()
  }
  // cx.arc(50, 50, 40, 0, 7);
  // cx.stroke();
};

drawSpiral()

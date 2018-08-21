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
// function drawSpiral(){
//   let cx = document.querySelector("canvas").getContext("2d");
//   cx.beginPath();
//   let angle = Math.PI / 2;
//   let radius = 10;
//   for(let i = 0; i < 300; i++){
//     angle += -16 * .01;
//     radius += .3
//     cx.lineTo(100 + Math.cos(angle) * radius, 100 + Math.sin(angle) * radius)
//   }
//   cx.stroke();
// };
//
// drawSpiral()

//Star Shape

// function drawStar(x, y){
//   let cx = document.querySelector("canvas").getContext("2d");
//   let radius = 50, xCenter = x + radius, yCenter = y + radius;
//   cx.beginPath();
//   cx.moveTo(xCenter + radius, yCenter)
//   for(let i = 0; i <= 8; i++){
//     let angle = i * Math.PI / 4;
//     cx.quadraticCurveTo(xCenter, yCenter, xCenter + Math.cos(angle) * radius,
//           yCenter + Math.sin(angle) * radius)
//       //equation for a point on a circle is the center plus angle
//   }
//   cx.fillStyle = 'gold'
//   cx.fill();
// };
// drawStar(50,50)

//############## QUESTION 2

const results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

let cx = document.querySelector("canvas").getContext("2d");
  let total = results
    .reduce((sum, {count}) => sum + count, 0);
  let currentAngle = -0.5 * Math.PI;
  let centerX = 300, centerY = 150;

  // Add code to draw the slice labels in this loop.
  for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
     let middleAngle = currentAngle + 0.5 * sliceAngle;
     let textX = Math.cos(middleAngle) * 120 + centerX;
     let textY = Math.sin(middleAngle) * 120 + centerY;
     console.log(middleAngle)
     console.log(Math.cos(middleAngle))
     cx.textBaseline = 'middle'
     if(Math.cos(middleAngle) > 0){
       cx.textAlign = 'left'
     } else {
       cx.textAlign = 'right'
     }
     cx.font = "15px sans-serif";
    cx.fillStyle = "black";
     cx.fillText(result.name, textX, textY)
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  }

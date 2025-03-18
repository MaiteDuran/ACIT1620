let x = 32;
let y = 44;
let radius = 5;

let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

function setup(width, height) {
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = (dx * dx) + (dy * dy);
    let d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    let area = Math.PI * r * r;
    return area;
}

setup(width, height);
let area = circleArea(radious);
let distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);

//

let bubbles = [60, 50, 58, 54, 60, 69, 69];

let i = 0;
let highScore = 0;
while(i < scores.length) {
    console.log("Smth #" + i + " score: " + socres[i]);
    if (scores[i] > highScore) {
        highScore = scores[i];

    }
    i = i + 1;
}

console.log(scores.length);
console.log(highScore);

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}

console.log("Highest score: " + bestSolutions)
let fondo;
let ancho;
let c = 0;

function setup() {
    var w = windowWidth/4;
    var h = windowWidth/6;
    var myCanva = createCanvas(w, h);
    myCanva.parent("canva1");
    frameRate(60);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    var w = windowWidth/4;
    var h = windowWidth/6;
    clear();
    translate(w /2, w / 3.5);
    stroke(41, 43, 44,200);
    strokeWeight(3);
    fill(0, 0, 0, 0);
    rotate(c);
    rect(0, 0, w/3, w/3);
    rotate(-c/2);
    rect(0, 0, w/3, w/3);
    rotate(-c);
    rect(0, 0, w/3, w/3);
    rotate(c/2);
    rect(0, 0, w/3, w/3);
    circle(0,0,w/4);
    c++;
}

window.onresize= function(){
    redraw();
}

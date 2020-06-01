let fondo;
let ancho;
let c = 0;

function setup() {
    var w = windowWidth;
    var h = windowHeight - 5;
    var myCanva = createCanvas(w, h);
    myCanva.parent("canva1");
    frameRate(60);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    var w = windowWidth;
    var h = windowHeight;
    stroke(255);
    strokeWeight(3);
    fill(0, 0, 0, 0);
    if (w > 965) {
        translate(w / 2.1, w / 8.5);
    } else if(w > 765) {
        translate(w / 2.2, w / 4.5);
    }else{
        translate(w / 2.3, w / 3.5);
    }
        
    rotate(c);
    
    if (w > 965) {
        clear();
        rect(0, 0, w / 9, w / 9);
    } else {
        clear();
        rect(0, 0, w / 4.5, w / 4.5);
    }
    c++;
}

var tela=1;
var barreira = 7;
var nivel = 1;
var song;
//let cobra;
let rez = 20;
let comida;
let w;
let h;


//function preload(){
 // song = loadSound("song.mp3");
//}

function setup() {
  createCanvas(400, 400);
  //song.play();
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(7);
  cobra = new Cobra();
  comidaLocation();
}

function comidaLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  comida = createVector(x, y);
  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    cobra.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	cobra.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	cobra.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	cobra.setDir(0, -1);
  } else if (key == ' ') {
  	cobra.grow();
  }

}





function draw() {
  scale(rez);
  if(tela == 1){
  background(0);
  fill(255,255,255);
  textSize(1);
  textFont('times');
  text("APERTE", 4,15);
  text("ENTER", 11,15);
  fill(255,0,0);
  textSize(3);
  textFont('times');
  text("COBRA", 5,3);
  text("ASSASSINA", 1,6);
  text("2D", 8, 9);
    if(keyIsDown(ENTER)){
    tela=2;
    }
  
  }
  
  
  
  
  if(tela == 2){
  background(0);
  fill(255,255,255);
  textSize(0.75);
  textFont('times')
  text("PONTOS=" + int(cobra.pontos) , 1,1);
  text("FASE=" + int(nivel), 1 , 3);
  }
  
  if (cobra.eat(comida)) {
    cobra.pontos++;
    comidaLocation();
    
  }
  cobra.update();
  cobra.show();
  
  if (cobra.pontos > barreira){
    nivel++;
    barreira = barreira + 7;
  }
  
  if(nivel>1){
    frameRate(14);
      }
  if(nivel>2){
    frameRate(21)
  }
  
  if(cobra.pontos>20){
    background(0, 255, 0);
    fill(255,255,255);
    textSize(1);
    text('VOCÊ VENCEU', 5, 10);
    text('APERTE', 7, 15);
    text('F5', 9, 17);
    noLoop();
  }
  
  if (cobra.endGame()) {
  	background(255, 0, 0);
    fill(255,255,255);
    textSize(1);
    text('VOCÊ PERDEU', 5, 10);
    text('APERTE', 7, 15);
    text('F5', 9, 17);
    noLoop();
  }
  
  noStroke();
  fill(255, 0, 0);
  if(cobra.pontos>20){
  fill(0,255,0);
  }
  ellipse(comida.x, comida.y, 1, 1);
}
  

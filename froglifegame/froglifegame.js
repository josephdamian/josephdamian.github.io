var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img, img1, img2, img3;

function preload(){
  
  img = loadImage('https://josephdamian.github.io/pondsurface.jpeg')
  img1 = loadImage('https://josephdamian.github.io/tadpole.jpg')
  img2 = loadImage('https://josephdamian.github.io/midpole.jpg')
  img3 = loadImage('https://josephdamian.github.io/midpole.jpg')

}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  image(img1,mouseX,mouseY,ballSize,ballSize);
  
} // end level one

function levelTwo(){
  background(img);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  image(img2, mouseX,mouseY,ballSize,ballSize);
} // end level two

function levelThree(){
    background(img);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  image(img3, mouseX,mouseY,ballSize,ballSize);
} // end level thre

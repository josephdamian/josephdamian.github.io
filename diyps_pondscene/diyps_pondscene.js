var img,img2,img3,img4,img5,img6,img7,img8;
var initials ='JD'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://josephdamian.github.io/ripple.png');
  img2 = loadImage('https://josephdamian.github.io/swan.png');
  img3 = loadImage('https://josephdamian.github.io/lilypad.png');
  img4 = loadImage('https://josephdamian.github.io/grass.png');
  img5 = loadImage('https://josephdamian.github.io/frog.png');
  img6 = loadImage('https://josephdamian.github.io/fishred.png');
  img7 = loadImage('https://josephdamian.github.io/fishorange.png');
  img8 = loadImage('https://josephdamian.github.io/lotusflower.png');
}

function setup() {
createCanvas(800, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) {//toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   strokeWeight(0);
     fill(34,144,59);
    ellipse(mouseX, mouseY, 200, 200);
    
  } else if (toolChoice == '2') { // second tool 2 "eraser"
    strokeWeight(0);
    fill(127,190,253);
    ellipse(mouseX, mouseY, 300, 200);
    
  } else if (toolChoice == '3') { // third tool
    image(img3, mouseX-25, mouseY-15, 50, 30);
    
  } else if (toolChoice == '4') {
    image(img8, mouseX-25, mouseY-25, 50, 50);
    
  } else if (key == '5') { // this tool calls a function
  image(img, mouseX-20, mouseY-12, 40, 25)
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
   image(img2, mouseX-35, mouseY-40, 70, 80);
   
  } else if (toolChoice == '7') {
    image(img4, mouseX-12, mouseY-12, 25, 25)

  } else if (toolChoice == '8') {
    image(img5, mouseX-25, mouseY-25, 50, 50);

  } else if (toolChoice == '9') {
    image(img6, mouseX-25, mouseY-25, 50, 50);
    
  } else if (toolChoice == '0') {
    image(img7, mouseX-25, mouseY-25, 50, 50);
  }
  }

function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

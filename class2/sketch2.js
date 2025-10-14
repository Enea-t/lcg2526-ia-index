let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

let table;
let star_img;

function preload() {
  table = loadTable("../Stelle/stars.csv", "csv", "header");
  star_img = loadImage("../Stelle/star.png");
}

function setup() {
  createCanvas(xMax, yMax);
}

function drawSingleStarFromFile(index, posX, posY){
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize);
}

function drawStarsFromFile() {
  for(let k = 0; k < table.getRowCount(); k++) {
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY);
  }
}

function drawSingleStar(i, starX, starY, random_transparecy, random_size) {
  if(i % 2 == 0){ //--> tutti i numeri pari divisi x 2 danno come resto 0
      // stella tipo a
      fill(255,255,150,random_transparecy);
      ellipse(starX,starY,random_size);
      //le stelle b quando i è divisibile x 3
    } else if(i % 3 == 0) { //alla seconda iterazione i == 2
      //stella tipo b
      fill(200,100,255);
      ellipse(starX,starY,1.5);
    } else{
      //stella tipo c
      fill(255,255,100);
      ellipse(starX,starY,2.8);
    }
}

function drawStars(num_stars = 120) {
  for(let i=0; i < num_stars; i++){
    let starX = (i*37) % width + (i%3) * 5;
    let starY = (i*73) % height + (i%7);

    let random_transparecy = random (150,255);
    let random_size = random (6,10);

    drawSingleStar(i, starX, starY, random_transparecy, random_size)
  }

}

function drawRocketFromFile(xRocket, yRocket) {
  image(rocket_img, xRocket, yRocket);
}

function drawRocket(xRocket, yRocket) {
  push();
  fill(220);
  stroke(40);

  rectMode(CENTER); // il rettangolo parte dal centro
  rect(xRocket,yRocket+30,80,180,20);
  //
  //pop();
  
  //triangle
  fill(200,40,40);
  strokeWeight(2);
  triangle(xRocket-40,yRocket-60,xRocket+40,yRocket-60,xRocket,yRocket-120);

  //circle
  fill(40,150,220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket,yRocket+30,48,48);

  //triangolini
  fill(200,40,40);
  stroke(40);
  strokeWeight(2)
  triangle(xRocket-40,yRocket+90,xRocket-20,yRocket+90,xRocket-70,yRocket+120);

  triangle(xRocket+40,yRocket+90,xRocket+20,yRocket+90,xRocket+70,yRocket+120);
  pop();
}


function moveRocket(yRocket, step=1){
  yRocket = yRocket - step;
  let soglia = -(yMax * 0.6);
  if (yRocket < soglia) {
    yRocket = yMax;
  }
  return yRocket;
}



function draw() {
  background(200, 200, 200);
  // mostrare un testo bianco
  // che dice le coordinate al mouse
  //sul foglio da disegno
  fill(255); //bianco
  textSize(20);
  text("mouseX: " + mouseX +  ",    mouseY: " + mouseY,20,20);  //stringa, x, y


  /*
  // disegnare le stelle
  // 120
  // tre tipi di stelle: a, b, c
  // fino a che abbiamo 120 stelle
  // stelle ellipse
  push();

  // un unico ciclo
  // creare una sequenza per fare a, b, c --> selezione (condizionale)
  noStroke(); //toglie lo stroke a tutti gli elementi di questo contesto

  for(let i=0; i < 120; i++){
    let starX = ((i*37) % width) + (i%3) * 5;
    let starY = ((i*73) % height) + (i%7);

    let random_x = random(0,width);
    let random_y = random(0,height);

    random_transparecy = random(150,255);
    random_size = random(2.8,5.0);
    // operatore modulo %
    //stella a quando i è pari
   
    drawStar(i, starX, starY, random_transparecy, random_size);
  }
  //finisce il contesto
  pop();
*/

//drawStars(100);


  /*
  // nuovo contesto di disegno
  push();
  fill(220);
  stroke(40);

  rectMode(CENTER); // il rettangolo parte dal centro
  rect(xRocket,yRocket+30,80,180,20);
  //
  //pop();
  
  //triangle
  fill(200,40,40);
  strokeWeight(2);
  triangle(xRocket-40,yRocket-60,xRocket+40,yRocket-60,xRocket,yRocket-120);

  //circle
  fill(40,150,220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket,yRocket+30,48,48);

  //triangolini
  fill(200,40,40);
  stroke(40);
  strokeWeight(2)
  triangle(xRocket-40,yRocket+90,xRocket-20,yRocket+90,xRocket-70,yRocket+120);

  triangle(xRocket+40,yRocket+90,xRocket+20,yRocket+90,xRocket+70,yRocket+120)

  pop();
  */
drawStarsFromFile();
pop();

//drawRocket(xRocket, yRocket);
drawRocketFromFile(xRocket, yRocket, 50, 50);

yRocket = moveRocket(yRocket, step=1);

  /*
 // xRocket = (xRocket+1) % xMax;
  yRocket = (yRocket-1);
  //quando la yRocket sarà oltre una certa soglia
  // allora dobbiamo resettarla
  let soglia = -(yMax * 0.6);
  if(yRocket < soglia) {
    yRocket = yMax;
  }
    */




}
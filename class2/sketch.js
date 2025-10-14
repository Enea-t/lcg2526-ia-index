let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6

let table;
let star_img;
let rocket_img

function preload() {
  table = loadTable("../Stelle/stars.csv", "csv", "header")
  star_img = loadImage("../Stelle/star.png")
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(10);
}

function drawSingleStarFromFile(index, posX, posY) {
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize)
}

function drawStarsFromFile() {
  for(let k = 0; k < table,getRowCount(); k++) {
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY)
  }
}

function drawSingleStar(i, starX, starY, random_transparency, random_size) {
  if( i % 2 == 0 ){
      //stella tipo a
      fill(255, 255, 150, random_transparency)
      ellipse(starX,starY, random_size); //1
      //stelle tipo b
      //ci saranno
      //per ogni i che è divisibile per 3
    } else if ( i % 3 == 0 ){
      //stella tipo b
      fill(200, 100, 255, random_transparency)
      ellipse(starX, starY, random_size) //1.5
    } else {
      //stella tipo c
      fill(255, 255, 100, random_transparency)
      ellipse(starX, starY, random_size) //2.8
    }
    return;
}

function drawStars(num_stars=120) {
  for(let i=0; i < num_stars; i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = (i*73) % height + (i%7)

    let random_transparency = random(150, 255)
    let random_size = random(5, 7)

    drawSingleStar(i, starX, starY, random_transparency, random_size)
  }
}

function draw() {
  background("#06243dff");
  //mostrare un testo bianco che
  //dice le coordinate del mouse
  //sul foglio da disegno
  fill(255); //bianco
  textSize(20)
  //stringa, x, y
  text("mouseX: " + mouseX + ", mouseY: " + mouseY, 20, 20);
  
  //disegnare le stelle
  //120
  //tre tipi di stelle: a, b, c
  //fino a che abbiamo 120 stelle
  // stelle ellipse
  push();
  noStroke();
  //un unico ciclo
  //creare una sequenza x fare a, b, c
  /*
  for(let i=0; i<120; i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73) % height) + (i%7);
    //operatore modulo %

    random_transparency = random(150, 255)
    random_size = random(1, 2.8)


    //Per disegnar le stelle posso scrivere tutto questo codice

    if( i % 2 == 0 ){
      //stella tipo a
      fill(255, 255, 150, random_transparency)
      ellipse(starX,starY, random_size); //1
      //stelle tipo b
      //ci saranno
      //per ogni i che è divisibile per 3
    } else if ( i % 3 == 0 ){
      //stella tipo b
      fill(200, 100, 255, random_transparency)
      ellipse(starX, starY, random_size) //1.5
    } else {
      //stella tipo c
      fill(255, 255, 100, random_transparency)
      ellipse(starX, starY, random_size) //2.8
    }
}
*/
    //Oppure posso chiamare la funzione drawStar che ho dichiarato prima
    //e fa esattamente la stessa cosa

    drawStar(1, starX, starY, random_transparency, random_size);

  
  pop();

  drawStarsFromFile()

  //aprire contesto di disegno
  push()
  fill(220);
  stroke(40);
  //alternativa
  rectMode(CENTER)
  rect(xRocket, yRocket+30, 80, 180, 20);
  //triangolo
  fill(200, 40, 40);
  triangle(
    xRocket-40, yRocket-60, 
    xRocket+40, yRocket-60, 
    xRocket, yRocket-120);
  triangle(
    xRocket-20, yRocket+100,
    xRocket-40, yRocket+100,
    xRocket-70, yRocket+140
  );
  triangle(
    xRocket+20, yRocket+100,
    xRocket+40, yRocket+100,
    xRocket+70, yRocket+140
  );

  //cerchio
  fill(40, 150, 220)
  stroke(255);
  strokeWeight(3)
  ellipse(xRocket, yRocket+30, 48, 48)
  //finire contesto di disegno
  pop();


  drawRocket(xRocket, yRocket)
  //xRocket = (xRocket + 1) % xMax;
  yRocket = yRocket - 3;
  //quando la yRocket sarà oltre una certa soglia
  let soglia = - (yMax*0.6);
  if (yRocket < soglia){
    yRocket = yMax;
  }
  //allora resettare la soglia
  yRocket = moveRocket(yRocket, 1)
}

function moveRocket(xRocket, yRocket, step=1) {
  yRocket = yRocket - step;
  let soglia = -(yMax*0.5)
  if (yRocket < soglia) {
    yRocket = yMax
  }
  return yRocket
}
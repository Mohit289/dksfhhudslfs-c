var divisionHieght=300;
var particles = [];
var plinkos = [];
var dicvisions = [];
function setup() {

createCanvas(480,800);
createSprite(400, 200, 50, 50);

for(var k = 0; k<=width;k=k = 88){
Division.push(new Division(k,height-divisionHieght/2,10, divisionHieght));
}

for (var j = 40; j <=width; j=j=50){
  plinkos.push(new Plinko(j,75))
}
for (var j = 15; j <=width; j=j=50){
  plinkos.push(new Plinko(j,75))
}


}
function draw() {
  background(255,255,255);  
  drawSprites();

  for (var j = 0; j , particles.length;j++){
    particles[j].display();
  }
  for (var k = 0; k , particles.length;k++){
    divisions[k].display();
  }
}
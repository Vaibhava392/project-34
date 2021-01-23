var  dog
var  normal
var  happyDog 
var  database 
var  foodS 
var  foodStock

function preload(){
	happyDog=loadImage("images/dogImg1.png")
	normal=loadImage("images/dogImg.png")
}

function setup() {
	database = firebase.database();
  createCanvas(500,500);
   dog =createSprite(250, 250, 10,10);
  dog.addImage(normal);
  dog.scale=0.2
  foodStock = database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
  background("green")
  textSize();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  fill();
  stroke();
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
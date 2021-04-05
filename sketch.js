
var block1,block2,block3,block4;
var ball, edges;
var Bgmusic;

function preload(){
    Bgmusic = loadSound("Bg music.mp3");
    
}


function setup(){
 createCanvas(800,600);

    block1 = createSprite(85,580,205,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "cyan";

    block3 = createSprite(503,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(710,580,200,30);
    block4.shapeColor = "red";

    
    ball = createSprite(random(200,600),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 6;
    Bgmusic.play();
   

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    if(isTouching(block1,ball)){
        ball.shapeColor = "blue";
    }

    if(isTouching(block2,ball)){
        ball.shapeColor = "cyan";
        Bgmusic.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    
    
    if(isTouching(block3,ball)){
        ball.shapeColor = "yellow";
    }

    if(isTouching(block4,ball)){
        ball.shapeColor = "red";
    }

    

if(bounceOff(block1,ball)){
    ball.shapeColor = "blue";
    return true
}
if(bounceOff(block2,ball)){
    ball.shapeColor = "cyan";
    Bgmusic.stop();
    ball.velocityX = 0;
    ball.velocityY = 0;
    return true;
    
}
 if(bounceOff(block3,ball)){
     ball.shapeColor  = "cyan";
     return true;
     
 }
 if(bounceOff(block4,ball)){
     ball.shapeColor = "red";
     return true;
     
 }

    drawSprites();
}

var canvas;
var music;
var sur1, sur2, sur3, sur4;
var box, edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,750);

    //create 4 different surfaces
    sur1 = createSprite(1,750,200,60);
    sur1.shapeColor = ' blue';
    sur2 = createSprite(220,750,200,60);
    sur2.shapeColor = 'orange';
    sur3 = createSprite(440,750,200,60);
    sur3.shapeColor = 'purple';
    sur4 = createSprite(660,750,200,60);
    sur4.shapeColor = 'green';

    //create box sprite and give velocity
    box = createSprite(random(20,750), 60,40,40);
    box.shapeColor = 'white';
    box.velocityY = 10;

    edge = createEdgeSprites();

}

function draw() {
    createCanvas(750,750);
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(sur1.isTouching(box))
    {
         box.shapeColor = 'blue';
         box.velocityY = 0;
         music.play(); 
    }
    else if(sur2.isTouching(box))
    {
         box.shapeColor = 'orange';
         box.velocityY = 0;
         music.play();
    }
    else if(sur3.isTouching(box))
    {
         box.shapeColor = 'purple';
         box.velocityY = 0;
         music.play();
    }
    else if(sur4.isTouching(box))
    {
         box.shapeColor = 'green';
         box.velocityY = 0;
         music.play();
    }
    
    drawSprites();
}

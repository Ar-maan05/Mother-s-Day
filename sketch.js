const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var heart, ground, heartBody, heartImg, groundSprite, bg, bgImg;

function preload(){
    heartImg = loadImage("tilted-heart.jpg");
    bgImg = loadImage("lily.jpg");
}

function setup(){
    createCanvas(800, 600);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

    heart = createSprite(width/2, 10, 10, 10);
	heart.addImage(heartImg);
    heart.scale = 0.5;

    groundSprite=createSprite(width/2,500, width,10);
	groundSprite.shapeColor = color(255)
    groundSprite.visible = false;

    heartBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, heartBody);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

     

    Engine.run(engine);
}
function draw(){
    rectMode(CENTER);
    background("pink");
    heart.x = heartBody.position.x 
    heart.y = heartBody.position.y 
    keyPressed();
    if(heart.isTouching(groundSprite)){
        heart.y = groundSprite.y;
        heartBody.isStatic = true;
        //bg = createSprite(400, 200, width, 200);
        //bg.addImage(bgImg);
        bg = createSprite(100, 120, 20, 20);
        bg.addImage(bgImg);
        bg.scale = 0.2;
        fill("deeppink");
        textSize(30);
        //textFont("algerian");
        text("𝓗𝓪𝓹𝓹𝔂 𝓜𝓸𝓽𝓱𝓮𝓻'𝓼 𝓓𝓪𝔂!", 270, 70);
        textSize(15);
        textFont("algerian");
        text("A very happy Mother's day to the ", 300, 180);
        text("best mother in the entire world. ", 300, 210);
        text("I can't be more thankful than i ", 300, 240);
        text("already am to be blessed with a ", 300, 270);
        text("mother as loving and caring as ", 300, 300);
        text("you. I couldn't have asked for ", 300, 330);
        text("a better mother than you. ", 300, 360);
        text("Happy Mother's Day.", 300, 390);
        textSize(10);
        //text("-Armaan & Maehr", 690, 580);
    }
    createEdgeSprites();
    drawSprites();
}
function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       Matter.Body.setStatic(heartBody, false);
   
    }
}
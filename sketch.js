const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var umbrella;
var drops=[];
var thunderCreatedFrame=0;
var thunder;
function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
    umbrella = new Umbrella(200,350,50)
    for(var i = 0; i<300; i=i+1){
        drops.push(new Drops(random(0,400),random(0,400)))
    }
}
function draw(){
    
    background(0); 
    Engine.update(engine);
    umbrella.display();
    rand = Math.round(random(1,4));
           switch(rand){
            case 1:image(thunder1, random(0,400),random(0,50));
            break;
            case 2: image(thunder2, random(0,400),random(0,50));
            break; 
            case 3: image(thunder3, random(0,400),random(0,50));
            break;
            case 4:image(thunder4, random(0,400),random(0,50));
            break;
            default: break;
        }
       
for(var i=0; i<drops.length; i=i+1){
        drops[i].reset();
        drops[i].showDrop();
       
}
    drawSprites();
}  
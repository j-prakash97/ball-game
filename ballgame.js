var grid = []; var x,y;

let ball_x,ball_y,ball_dx,ball_dy,ball_d, life=3;let score=0;

let paddle_x,paddle_y,paddle_height,paddle_width,paddle_dx;

let block_x, block_y,block_width,block_height;

var bricks = []

function setup() {

createCanvas(400, 400);

ball_x =width/2;

ball_y = height/2;

ball_dx = 1.5;

ball_dy=1.0;

ball_d = 25

paddle_width = 80;

paddle_x= width/2- (paddle_width/2)

paddle_y = height-20;

paddle_height = 15;

paddle_dx = 5;

block_x = 50;

block_y= 50;

block_width=50;

block_height = 100;

for(let i=0;i<5;i++)

{ let blocks_row =[];

for(let j=0;j<3;j++)

{

let block = {};

block["x"]= (i*70)+20;

block["y"]=(j*50)+30;

block["w"]= 60;

block["h"]= 30;

block["status"]= true;

blocks_row.push(block);

}

bricks.push(blocks_row);

}

}

function draw(){

background("black")

ball_x+=ball_dx;

ball_y+=ball_dy;

fill("yellow")

circle(ball_x,ball_y,ball_d);

rect(paddle_x,paddle_y,paddle_width,paddle_height);

for(let i=0;i<bricks.length;i++)

{

for(let j=0;j<bricks[i].length;j++)

{

if(bricks[i][j].status!=false)
{fill("Blue")
 rect(bricks[i][j].x,bricks[i][j].y,bricks[i][j].w,bricks[i][j].h);

//left hit

if( ball_x+ball_d/2>bricks[i][j].x &&(ball_x+ball_d/2<(bricks[i][j].x+bricks[i][j].w)) && ball_y>bricks[i][j].y && ball_y<(bricks[i][j].y+bricks[i][j].h) )

{

ball_dx = -ball_dx;

bricks[i][j].status = false

score+=1;

}

//right hit

if( ball_x-ball_d/2>bricks[i][j].x &&(ball_x-ball_d/2<(bricks[i][j].x+bricks[i][j].w)) && ball_y>bricks[i][j].y && ball_y<(bricks[i][j].y+bricks[i][j].h) )

{

ball_dx = -ball_dx;

bricks[i][j].status = false

score+=1;

}

//top hit

if( ball_x>bricks[i][j].x &&(ball_x<(bricks[i][j].x+bricks[i][j].w)) && ball_y+ball_d/2>bricks[i][j].y && ball_y+ball_d/2<(bricks[i][j].y+bricks[i][j].h) )

{

ball_dy = -ball_dy;

bricks[i][j].status = false

score+=1;

}

//bottom hit

if( ball_x>bricks[i][j].x &&(ball_x<(bricks[i][j].x+bricks[i][j].w)) && ball_y-ball_d/2>bricks[i][j].y && ball_y-ball_d/2<(bricks[i][j].y+bricks[i][j].h) )

{

ball_dy = -ball_dy;

bricks[i][j].status = false

score+=1;

}

}

}

}

//rect(block_x,block_y,block_width,block_height)

//movement of paddle

if(keyIsDown(RIGHT_ARROW)&&(paddle_x+paddle_width)<width){

paddle_x +=paddle_dx;

}

if(keyIsDown(LEFT_ARROW)&&(paddle_x)>0){

paddle_x-=paddle_dx;

}

//left-right bounce

if(ball_x+(ball_d/ 2) > width ||(ball_x-(ball_d/2)<0)){

ball_dx = -(ball_dx);

}

//top side bouncing

if(ball_y-(ball_d/2)<0){

ball_dy = -(ball_dy);

}

//bottom side bouncing

if(ball_x>(paddle_x)&&(ball_x<(paddle_x+paddle_width))&&(ball_y+(ball_d/2)>paddle_y))

{

ball_dy =-ball_dy;

}

if((ball_y+ball_d/2)>height)

{

//ball_dx=0;

//ball_dy=0;

life-=1

if(life<1){

alert("Play Again")

life=3;score=0;

setup()

}

else{ ball_x = width/2;

ball_y=height/2;

}

}

fill("white")

text("Score:"+score,width-100,20)

text("Lives:"+life,width-200,20)

}
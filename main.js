noseX=0;
noseY=0;
lipX=0;
lipY=0;
mustacheX=0
mustacheY=0
function preload(){
 clown_nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png") ; 
 clown_nose1=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png") ; 
 clown_nose2=loadImage("https://i.postimg.cc/3x3QzSGq/m.png") ; 
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is inisilized');
}

function gotPoses(results){
    if(results.length > 0)
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y+15;
    lipX = results[0].pose.nose.x-40;
    lipY = results[0].pose.nose.y;
    mustacheX = results[0].pose.nose.x-25;
    mustacheY = results[0].pose.nose.y-10;
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 50, 20);
    image(clown_nose1, lipX, lipY, 30, 30);
    image(clown_nose2, mustacheX, mustacheY, 80, 35);
  }
  

  
  
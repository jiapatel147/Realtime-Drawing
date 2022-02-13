noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(550,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function gotPoses(results) {
        if (results.length>0) {
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference= floor(leftWristX-rightWristX);
    }
}

    function draw() {
        background('#FFC0CB')
        document.getElementById("square_side").innerHTML="width and height of a square will be =" +difference +"px";
        fill('#F90093');
        stroke('#F90093');
        square(noseX,noseY,difference);
    }
song = ""
leftWirstX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {

    song = loadSound("music.mp3");
}

function setup() {

    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {

    console.log('posenet is Initialized')
}

function draw(){
    
    image(video, 0, 0,600, 500);
}

function play() {

    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses() {

    if(results.length > 0) 
    {
        console.log(results);
        leftWirstX = results[0].pose.leftWirst.x;
        leftWristY = results[0].pose.leftWirst.y
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightwrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
    }
}
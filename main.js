lipstickX=0;
lipstickY=0;


function preload() {
lipstick = loadImage('https://i.postimg.cc/9FgB2Xjz/Lipstick-Image.png');
  }
  
function setup() {
  canvas = createCanvas(500,340);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500,340);
  video.hide();

  
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
 }
 

 function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0){
console.log(results);
lipstickX = results[0].pose.lipstick.x-10;
lipstickY = results[0].pose.lipstick.y-10;
console.log("lipstickX = " + lipstickX);
console.log("lipstickY = " + lipstickY);
    }

}

  

function draw() {
image(video,0,0,640,480);
fill(255, 0, 0);
stroke(255, 0, 0);
lipstick(lipstickX, lipstickY, 20); 
image(lipstick, lipstickX, lipstickY, 30, 30); 
  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }
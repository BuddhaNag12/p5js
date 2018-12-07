
let video;
let poseNet;
let nosex=0;
let nosey=0;
let eyelx=0;
let eyely=0;
let eyerx=0;
let eyery=0;

function setup() {
  createCanvas(600, 400);
	video = createCapture(VIDEO);
	video.hide();
	poseNet=ml5.poseNet(video,modelReady);
	poseNet.on('pose',gotPoses);
}



function gotPoses(poses)
{
	if(poses.length>0){
	console.log(poses);
	let newx=poses[0].pose.keypoints[0].position.x;
	let newy=poses[0].pose.keypoints[0].position.y;
  let ex=poses[0].pose.keypoints[1].position.x;
	let ey=poses[0].pose.keypoints[1].position.y;
let erx=poses[0].pose.keypoints[2].position.x;
	let ery=poses[0].pose.keypoints[2].position.y;
		
	nosex=lerp(nosex,newx,0.2);
  nosey=lerp(nosex,newy,0.2);
	
		eyelx=lerp(eyelx,ex,0.5);
		eyely=lerp(eyely,ey,0.5);
		
		eyerx=lerp(eyerx,erx,0.6);
		eyery=lerp(eyery,ery,0.6);
	
	
	
	
	}
}

function modelReady()
{
   console.log("model ready");
	
}
function draw() {
  
  let d=dist(nosex,nosey,eyelx,eyely);
	image (video,0,0);
		
	fill(255,0,0);
	ellipse(nosex,nosey,d);
	fill(0,0,255);
	//ellipse(eyelx,eyely,50);
	//fill(255,0,255);
	//ellipse(eyerx,eyery,50);
}

  //background(220);
	
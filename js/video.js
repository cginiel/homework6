var video;
// var has function scope
// let has block scope, aka is more of a "temp" variable
// i++ is also known as i += 1

function getVid(){
	video = document.querySelector("#myVideo"); 
	// you can also use document.getElementById('myVideo')
	// document.querySelector() returns only ONE thing
	// if you want everything (an array), use document.querySelectorAll()
}

function playVid() { 

	let vol = document.querySelector("#volume"); 
	vol.innerHTML = video.volume * 100 + "%";
	// .innerHTML is your new best friend
	console.log("Play Video");
	console.log(video.volume);
	video.play();

} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause(); 
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is " + video.playbackRate);
  	// "this.value" for objects in javascript
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	
    if (video.currentTime >= video.duration){
    	console.log("Video ended")
    	video.currentTime = 0;
    	video.playbackRate = 1;
    	console.log("Video playing")
    }
    console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	let mute = document.querySelector("#mute")
  	if (video.muted){
  		console.log("Change to Unmuted");
  		video.muted = false;
  		mute.innerHTML = "Mute";
  	}
  	else{
  		console.log("Change to Muted");
  		video.muted = true;
  		mute.innerHTML = "Unmute";
  	}      	
}

function changeVolume() {
	// pseudocode: we want to connect the "volume is" value to the 
	// volume slider value so that it updates accordingly

	let slider = document.querySelector("#volumeSlider");
	// let vol = document.querySelector("#volume");
	// slider.innerHTML = vol
	// video.slider = vol;
	console.log("Volume is "+ video.slider);
}
       

function gray() {
	document.querySelector("#myVideo").style.filter = "grayscale(100%)";

	console.log("In grayscale");
}

function color() {
	document.querySelector("#myVideo").style.filter = "none";

	console.log("In color");
}

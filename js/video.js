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

	let vol = document.querySelector("#volume") 
	vol.innerHTML = video.volume * 100 + "%";
	// .innerHTML is your new best friend
	console.log("Play Video");
	// console.log(video);
	video.play();

} 

function pauseVid() { 

	console.log("Pause Video");
	video.pause() 
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

// function skipAhead() {

// 	console.log("Current location is "+ );
// } 

function mute() { 
	let mute = document.querySelector("#mute")
  	if (video.muted){
  		console.log("Change to Unmuted");
  		video.muted = false;
  		mute.innerHTML = "Mute"
  	}
  	else{
  		console.log("Change to Muted");
  		video.muted = true;
  		mute.innerHTML = "Unmute"
  	}      	
}

// function changeVolume() {
// ;	console.log("Volume is ");
// }
       

// function gray() { 

// 	console.log("In grayscale")
// }

// function color() {

// 	console.log("In color") 
// }

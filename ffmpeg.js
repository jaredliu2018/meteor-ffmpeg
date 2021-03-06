var nodeffmpeg = Npm.require('fluent-ffmpeg');
var path = Npm.require('path');
var fs = Npm.require('fs');


ffmpeg = function (){
	throw new Error('Could not find ffmpeg!');
};

var nodeff = false;

var sep = /^win/.test(process.platform) ? ';' : ':';
var binaryPaths = process.env['PATH'].split(sep);


for (var i = 0; i < binaryPaths.length; i++) {


	var binPath = binaryPaths[i];

	if(!nodeff){
		var ffmpegPath = path.join(binPath, 'ffmpeg');
		var ffmpegExePath = path.join(binPath, 'ffmpeg.exe');


		nodeff = fs.existsSync(ffmpegPath) || fs.existsSync(ffmpegExePath);


		if(nodeff) console.log("--- FFmpeg found ---")

	}

}

if (!nodeff){
		console.warn("could not find ffmpeg in your path!")

		ffmpeg.isAvailable = false;
	}else{
		if(nodeff){
			ffmpeg = nodeffmpeg;
            console.log("--- FFmpeg assigned ---");
		}

		ffmpeg.isAvailable = true;
}


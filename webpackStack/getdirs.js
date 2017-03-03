var path=require("path");
var fs=require("fs");


var root="./build/js";

var dirs=[];

function getRootDirs(dir){
	fs.readdirSync(dir,function(err,subdirs){
		if(err){
			// console.log(err);
		}
		console.log(subdirs);
		if(subdirs&&subdirs.length>0){
			subdirs.forEach(function(subdir,index){
				dir+=("/"+subdir);
				console.log("dir:"+dir);
				getRootDirs(dir);
			});
		}
		else{
			dirs.push(dir);
		}
	});
	console.log("dirs:"+JSON.stringify(dirs));
}

getRootDirs(root);

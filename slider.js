console.log("hello world");
var photos = ["img1","img2","img3","img4"];
var i=0;
document.getElementById('right').addEventListener("click",function(){
	i = i < photos.length ? ++i : 0 ;
	document.getElementById("container").style.backgroundImage = `url('./${photos[i]}.jpg')`
})
document.getElementById('left').addEventListener("click",function(){
	i = i > 0 ? --i : 3  ;
	document.getElementById("container").style.backgroundImage = `url('./${photos[i]}.jpg')`
})
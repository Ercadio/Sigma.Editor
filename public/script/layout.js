// This is purely the layout configuration


window.onload = loadPage;
window.onresize = loadPage;

// Layout functions                   // ---------------------------------

function loadPage(){
	let windowHeight = window.innerHeight;
	let windowWidth = window.innerWidtg;
	let body = document.body;
	console.log(body);
	let canvas = newElement('div',body);
	canvas.width = windowWidth * 0.6;
	canvas.height = windowHeight;

}



function newElement(type,parent){
	let elem = document.createElement(type);
	parent.appendChild(elem);
	return elem;
}


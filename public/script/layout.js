// This is purely the layout configuration

window.onload = () =>{loadPage(setup);};
window.onresize = loadPage;

// Layout functions                  // ---------------------------------

function setup(){
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidtg;
  let body = document.body;
  let canvas = newElement('canvas',body);
  let rightTab = newElement('div',body);
}
function loadPage(setup){
	if(setup) setup();
	canvas.width = windowWidth * 0.6;
	canvas.height = windowHeight;
	canvas.id = "graph";
	rightTab.id = "rightTab";
}



function newElement(type,parent){
	let elem = document.createElement(type);
	parent.appendChild(elem);
	return elem;
}





// const boutton1 = document.querySelector('.boutton1'); // recup mon objet boutton
// boutton1.addEventListener('click', changecolor);// ecoute pour recup un event

const boutton2 = document.querySelector('button'); // recup mon objet boutton

boutton2.onclick = function() {changecolor()};

function changecolor(){
		document.body.style.background = random_color;
}

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

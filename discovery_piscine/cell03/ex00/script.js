


const boutton1 = document.querySelector('.boutton1'); // recup mon objet boutton
boutton1.addEventListener('click', changecolor);// ecoute pour recup un event

// const boutton2 = document.querySelector('button'); // recup mon objet boutton
// boutton2.onclick = function() {changecolor()};

function changecolor() {
	var colors = ['#ff0000', '#00ff00', '#0000ff'];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}



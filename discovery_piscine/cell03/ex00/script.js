const bouton2 = document.getElementsByTagName('button');

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('button').style.color = random_color;


bouton2.onclick=function(){change_background()};

function change_background()
{	
	document.body.style.backgroundColor= random_color;
}

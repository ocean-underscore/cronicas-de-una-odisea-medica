var home = document.getElementById("home");
var about= document.getElementById("about");

var btn_home = document.getElementById("btn_home");
var btn_about= document.getElementById("btn_about");

btn_home.addEventListener('click',()=>{
	home.style.display='block';
	about.style.display = 'none';
}
)

btn_about.addEventListener('click',()=>{
	home.style.display='none';
	about.style.display = 'block';
}
)



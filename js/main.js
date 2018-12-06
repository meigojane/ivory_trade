const r = new Router(
	{
		about: new Layout(new Page('menu.html'), new Page('about.html')),
		home: new Layout(new Page('menu.html'), new Page('home.html')),
		org: new Layout(new Page('menu.html'), new Page('org.html'), new Page('footer.html')),
		info: new Layout(new Page('menu.html'), new Page('info.html'), new Page('footer.html')),
		action: new Layout(new Page('menu.html'), new Page('action.html'), new Page('footer.html')),
		article: new Layout(new Page('menu.html'), new Page('article.html'), new Page('footer.html')),
		'#default': new Layout(new Page('menu.html'), new Page('home.html')),
	},
	document.querySelector('main')
);

document.addEventListener("DOMContentLoaded", function () {
	var mySpheres = new Array("../image/text1.png", "../image/text2.png", "../image/text3.png");
	var mySpheresCnt = 0;

	function changeSphere() {
		mySphere = document.getElementById("text-img");
		mySpheresCnt = (mySpheresCnt + 1) % (mySpheres.length);
		document.images["text-img"].src = mySpheres[mySpheresCnt];
	}

	setInterval(changeSphere, 5000);

});
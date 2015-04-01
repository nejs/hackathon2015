
	window.sr = new scrollReveal();

	Velocity(document.getElementById("newton-navarro"), { left: -300 }, { duration: 100000, loop: true });
	Velocity(document.getElementById("morro-careca"), { left: 700 }, { duration: 100000, loop: true });
  Velocity(document.getElementById("wave1"), { backgroundPositionX: 160 }, { duration: 10000, loop: true });
  Velocity(document.getElementById("wave3"), { backgroundPositionX: -160 }, { duration: 7000, loop: true });
  Velocity(document.getElementById("wave2"), { backgroundPositionX: 160 }, { duration: 6000, loop: true });
  Velocity(document.getElementById("clouds"), { backgroundPositionX: "+=50" }, { duration: 10000 });
  setInterval(function(){
  	Velocity(document.getElementById("clouds"), { backgroundPositionX: "+=50" }, { duration: 10000 });
  }, 10000);


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59447998-1', 'auto');
ga('send', 'pageview');
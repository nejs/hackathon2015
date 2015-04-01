
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

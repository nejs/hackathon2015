/*
  $(document).on('click', '#menu-topo a', function(e){
    e.preventDefault();
    var a = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(a).position().top-70
    }, 500);
    
  });

  */

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

	var loadImages = function loadImages(sources, callback) {
	    var images = {};
	    var loadedImages = 0;
	    var numImages = 0;

	    var checkFinish = function checkFinish() {
				if(++loadedImages >= numImages) {
					callback(images);
        }
	    };
	    for(var src in sources) {
	    	numImages++;
	      images[src] = new Image();
	      images[src].crossOrigin = "*";
	      images[src].onload = checkFinish;
	      images[src].src = sources[src];
	    }
	  },
	  //function that change pixels
	  getGreyscale = function getGreyscale(img) {
	    var pixels  = img.data;
	    for (var i = 0, n = pixels.length; i < n; i += 4) {
	      grayscale = pixels[i] * 0.3 + pixels[i+1] * 0.59 + pixels[i+2] * 0.11;
	      pixels[i  ] = grayscale;
	      pixels[i+1] = grayscale;
	      pixels[i+2] = grayscale;
	    }
	    return img;
	  },
	  getScrollTop = function getScrollTop() {
	    return window.pageYOffset || document.body.scrollTop || 0;
	  },
	  drawTextAlongArc = function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
      var len = str.length, s;
      context.save();
      context.translate(centerX, centerY);
      context.rotate(1 * angle / 2);
      context.rotate(1 * (angle / len) / 2);

      for(var n = 0; n < len; n++) {
        s = str[n];
        context.rotate(-1*(angle / len));
        context.save();
        context.translate(0, 1 * radius);
        
        context.fillText(s, 0, 0);
        context.restore();
      }
      context.restore();
    },
	  sources = {
	  	frame: 'img/moldura.png',
	    henricavalcante: 'https://avatars.githubusercontent.com/u/2352034?v=3',
	    yanjustino: 'https://avatars.githubusercontent.com/u/357114?v=3',
	    davidwebmaster: 'https://avatars.githubusercontent.com/u/3306913?v=3',
	    batusa: 'https://avatars.githubusercontent.com/u/5388003?v=3',
	    wanderleypassos: 'https://avatars.githubusercontent.com/u/9213655?v=3'
	  };

  loadImages(sources, function(images) {
  	[{username: 'henricavalcante', name: 'Henri Cavalcante'},
  	 {username: 'yanjustino', name: 'Yan Justino'},
  	 {username: 'davidwebmaster', name: 'David Figueredo'},
  	 {username: 'batusa', name: 'Emmerson Lima'},
  	 {username: 'wanderleypassos', name: 'Wanderley Passos'},
  	].forEach(function(developer){
  		var canvas = document.getElementById('canvas-'+developer.username),
	  		context = canvas.getContext('2d');

	    context.drawImage(images[developer.username], 0, -10, 214, 208);

	    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);

	    context.putImageData(getGreyscale(imgData), 0, 0);

	    context.drawImage(images.frame, 0, 0, canvas.width, canvas.height);

	    var centerX = canvas.width / 2,
        centerY = canvas.height - 650,
        angle = Math.PI / 10,
        radius = 630;
      
      context.font = 'bold 15pt Roboto';
      context.textAlign = 'center';
      context.fillStyle = 'white';
      context.lineWidth = 4;
      drawTextAlongArc(context, developer.name, centerX, centerY, radius, angle);

  	});
  });



  
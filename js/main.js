
  $(document).on('click', '#menu-topo a', function(e){
    e.preventDefault();
    var a = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(a).position().top-70
    }, 500);
    
  });

var isMobile = ((function() {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
  })()),
  //Ready to multiple images
  loadImages = function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].crossOrigin = "Anonymous";
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  },
  //function that change pixels
  getGreyscale = function getGreyscale(img) {
    var pixels  = img.data;
    for (var i = 0, n = pixels.length; i < n; i += 4) {
      grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
      pixels[i  ] = grayscale;
      pixels[i+1] = grayscale;
      pixels[i+2] = grayscale;
    }
    return img;
  },
  getScrollTop = function getScrollTop() {
    return window.pageYOffset || document.body.scrollTop || 0;
  },
  sources = {
  	frame: '/img/moldura.png',
    henricavalcante: 'https://avatars.githubusercontent.com/u/2352034?v=3',
    yanjustino: 'https://avatars.githubusercontent.com/u/357114?v=3',
    davidwebmaster: 'https://avatars.githubusercontent.com/u/3306913?v=3',
    batusa: 'https://avatars.githubusercontent.com/u/5388003?v=3',
    wanderleypassos: 'https://avatars.githubusercontent.com/u/9213655?v=3'
  };
  loadImages(sources, function(images) {
  	['henricavalcante', 'yanjustino', 'davidwebmaster', 'batusa', 'wanderleypassos'].forEach(function(developer){
  		var canvas = document.getElementById('canvas-'+developer),
	  		context = canvas.getContext('2d');

	    context.drawImage(images[developer], 0, 0, 214, 214);
	    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
	    context.putImageData(getGreyscale(imgData), 0, 0);

	    context.drawImage(images.frame, 0, 0, canvas.width, canvas.height);

  	});
  	
    
  });
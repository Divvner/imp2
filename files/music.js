// loader

function preloader() {
	$(() => {

		setInterval(() => {

			let preloader = $('#preloader');

			preloader.css('opacity', 0);
			preloader.css('transition', 0.4);
			preloader.css('visibility', 'hidden');
			preloader.css('visibility', 0, 1);
			
		}, 1700);

	});
}

preloader();

setInterval(() => {
	$('#filter').css({
		animation: 'filter 5s',
	})
}, 2000);

// include JQuery

$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}

if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
  var dpt = window.devicePixelRatio;
  var widthM = window.screen.width * dpt;
  var widthH = window.screen.height * dpt;
  document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
}

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio_1')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

let soundButton1 = document.querySelector('.soundbutton_second'),
	audio1 = document.querySelector('.audio_2')

soundButton1.addEventListener('click', e => {
	soundButton1.classList.toggle('paused')
	audio1.paused ? audio1.play() : audio1.pause()
})

window.onfocus = function () {
	soundButton1.classList.contains('paused') ? audio1.pause() : audio1.play();
}

let soundButton2 = document.querySelector('.soundbutton_fird'),
	audio2 = document.querySelector('.audio_3')

soundButton2.addEventListener('click', e => {
	soundButton2.classList.toggle('paused')
	audio2.paused ? audio2.play() : audio2.pause()
})

window.onfocus = function () {
	soundButton2.classList.contains('paused') ? audio2.pause() : audio2.play();
}

let soundButton3 = document.querySelector('.soundbutton_fiveth'),
	audio3 = document.querySelector('.audio_4')

soundButton3.addEventListener('click', e => {
	soundButton3.classList.toggle('paused')
	audio3.paused ? audio3.play() : audio3.pause()
})

window.onfocus = function () {
	soundButton3.classList.contains('paused') ? audio3.pause() : audio3.play();
}




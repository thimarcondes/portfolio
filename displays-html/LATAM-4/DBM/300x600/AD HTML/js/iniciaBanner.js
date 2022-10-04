// Template Version 16.6.04

//Elementos DOM
var mcAD = document.querySelector('#ad');
var mcCTA = document.querySelector('.cta');
var mcClickTag = document.querySelector('.clicktag');
// var mcFootage = document.querySelector('.footage');

//VARS CONFIG
var larguraAd;
var alturaAd;
var larguraCTA;
var alturaCTA;
var isMobile;
var tempoFimBanner;
var pecaParou;
var ligaParallax;
var qtdBlur = {blur:0};
var userBrowser;
var censura = '';

var censuraCor = {

	'L':'#00af51',
	'10':'#00ccff',
	'12':'#ffcc00',
	'14':'#ff6600',
	'16':'#fe0000',
	'18':'#000000',
}

if(censura == '18'){
    document.querySelector('.background-censura').style.border = '1px solid #ffffff';
    document.querySelector('.background-censura').style.backgroundColor = censuraCor[censura];
    document.querySelector('.idade').innerHTML = censura;
} else {
    document.querySelector('.background-censura').style.backgroundColor = censuraCor[censura];
    document.querySelector('.idade').innerHTML = censura;
}

function iniciaBanner() {

	// console.log('inciou banner');

	// valida se é MOBILE
	detectmob();

	if(isMobile == false){
		// verifica Browser
		verificaBrowser();
	}

	larguraAd = mcAD.offsetWidth;
	alturaAd = mcAD.offsetHeight;
	larguraCTA = mcCTA.clientWidth;
	alturaCTA = mcCTA.clientHeight;

	ligaParallax = false;

	mcCTA.onmouseover = function(){overCTA();};
	mcCTA.onmouseout = function(){outCTA();};
	mcCTA.onclick = function(){clickCTA();};

	mcClickTag.onclick = function(){clickBanner();};
	mcClickTag.addEventListener('mousemove', parallax);
	// document.addEventListener('keydown', keyShortsTween);

	zeraAnimacao();

}
//

// Zera Animações e Posições
function zeraAnimacao(){

	// console.log('zerou animacoes');

	clearTimeout(tempoFimBanner);
	pecaParou = false;

	TweenMax.to('#banner', 0, {opacity: 0});
	TweenMax.to('.background img', 0, { x:44, scale:1.3});

	TweenMax.to('.logo_latam img', 0, { x:140, opacity:0});
	TweenMax.to('.slogan', 0, { x:140, opacity:0});
	TweenMax.to('.logo_one_world img', 0, { x:-60, opacity:0});

	TweenMax.to('.texto_top01 img', 0, { y:40, opacity:0});
	
	TweenMax.to('.box_azul', 0, { scale:.2, opacity:0});
	TweenMax.to('.box_azul img', 0, { y:20, opacity:0});

	TweenMax.to('.box_vermelho', 0, { rotation:-3, y:-22});

	TweenMax.to('.footer', 0, { y:40});
	TweenMax.to('.footer img', 0, { y:40});

	TweenMax.to('.cta', 0, {css:{'pointer-events': 'none'}});
	TweenMax.to('.cta', 0, { scale:0});
	TweenMax.to('.cta img', 0, { scale:0});

	


	// se tiver footage
	// mcFootage.load();
	// mcFootage.volume = 0;

}

//ANIMAÇÕES
function iniciaAnimacao(){

	// console.log('iniciou animacoes');

	tempoFimBanner = setTimeout(fim, 14000);

	// BANNER
	TweenMax.to('#banner', .4, {opacity:1, ease: Power0.easeNone, delay:0});
	// TweenMax.to('.background img', 10, {x:0, ease: Power0.easeNone, delay:0});

	TweenMax.to('.logo_one_world img', 1, {opacity: 1, ease: Power0.easeNone, delay:.2});
	TweenMax.to('.logo_one_world img', 1, {x: 0, ease: Power2.easeInOut, delay:.2});

	TweenMax.to('.logo_latam img', 1, {opacity: 1, ease: Power0.easeNone, delay:.4});
	TweenMax.to('.logo_latam img', 1, {x: 0, ease: Power2.easeInOut, delay:.4});

	TweenMax.to('.slogan', 1, {opacity: 1, ease: Power0.easeNone, delay:.6});
	TweenMax.to('.slogan', 1, {x: 0, ease: Power2.easeInOut, delay:.6});

	TweenMax.to('.footer', 1.5, {y:0, ease: Power2.easeInOut, delay:.2});
	TweenMax.to('.footer img', 1.5, {y:0, ease: Power2.easeInOut, delay:.4});

	TweenMax.to('.background img', 12, {x:-48, ease: Power2.easeOut, delay:0});


	TweenMax.to('.texto_top01 img:nth-child(1)', 1, {opacity: 1, ease: Power0.easeNone, delay:.8});
	TweenMax.to('.texto_top01 img:nth-child(1)', 1, {y: 1, ease: Power2.easeOut, delay:.8});

	TweenMax.to('.texto_top01 img:nth-child(2)', 1, {opacity: 1, ease: Power0.easeNone, delay:1.2});
	TweenMax.to('.texto_top01 img:nth-child(2)', 1, {y: 1, ease: Power2.easeOut, delay:1.2});

	TweenMax.to('.texto_top01 img:nth-child(3)', 1, {opacity: 1, ease: Power0.easeNone, delay:2.2});
	TweenMax.to('.texto_top01 img:nth-child(3)', 1, {y: 0, ease: Power2.easeOut, delay:2.2});
	
	TweenMax.to('.texto_top01 img:nth-child(4)', 1, {opacity: 1, ease: Power0.easeNone, delay:2.4});
	TweenMax.to('.texto_top01 img:nth-child(4)', 1, {y: 0, ease: Power2.easeOut, delay:2.4});

	TweenMax.to('.background img', 1.2, {x:0, scale:1.05, ease: Power2.easeInOut, delay:4});
	TweenMax.to('.background img', 5, {scale:1, ease: Power2.easeOut, delay:4.8});
	

	TweenMax.to('.box_azul', .3, {opacity: 1, ease: Power0.easeNone, delay:4.5});
	TweenMax.to('.box_azul', .3, {scale: 1, ease: Back.easeOut.config(1.5), delay:4.5});

	TweenMax.to('.box_azul img:nth-child(1)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:4.6});
	TweenMax.to('.box_azul img:nth-child(2)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:4.7});
	TweenMax.to('.box_azul img:nth-child(3)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:4.8});
	TweenMax.to('.box_azul img:nth-child(4)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:4.9});
	TweenMax.to('.box_azul img:nth-child(5)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:5.2});
	TweenMax.to('.box_azul img:nth-child(6)', .6, {y: 0, opacity: 1, ease: Power2.easeInOut, delay:5.5});

	TweenMax.to('.box_vermelho', 2, {y:-9, ease: Power2.easeInOut, delay:4.4});

    // CTA
    TweenMax.to('.cta', 0, { css:{'pointer-events': 'all'}, delay:6});
	TweenMax.to('.cta', .3, { scale:1, ease: Back.easeOut.config(1.6), delay:6});
	TweenMax.to('.cta img', .3, { scale:1, ease: Back.easeOut.config(1.6), delay:6.1});


	// ligar parallax4	
	// TweenMax.delayedCall(6, function(){ligaParallax = true});

	// se tiver footage
	// mcFootage.play();

	// Blur
	// TweenMax.to(qtdBlur, .6, {blur:4, ease: Power3.easeOut, onUpdate:aplicaBlur, delay:1});

	// Call Function
	// TweenMax.delayedCall(4, nomeFuncao);

}

// VERIFICAR O TAMANHO DA FONTE DOS TEXTOS
// var textoCopy = document.querySelector('.copy p').innerHTML;
// var nCaracteres = textoCopy.length;
// console.log('Numero de caracters COPY: '+nCaracteres);
// 

//BLUR
function aplicaBlur() {
    TweenMax.set(['.background'], {webkitFilter:'blur(' + qtdBlur.blur + 'px)',filter:'blur(' + qtdBlur.blur + 'px)'});  
};

function tiraBlur() {
    TweenMax.set('.background', {webkitFilter:'blur(' + qtdBlur.blur + 'px)',filter:'blur(' + qtdBlur.blur + 'px)'}); 
}
// 

function fim(){
	// console.log('fim animacao');
	clearTimeout(tempoFimBanner);
	pecaParou = true;
	// se tiver footage
	// mcFootage.pause();
}


////// TEMPLATE //////

// MOBILE DETECT
function detectmob() { 
 if(
 	navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 
 ){
	isMobile = true;
		// Verifica se Tem acelerometro no aparelho
		if  (window.DeviceMotionEvent){
			window.addEventListener('devicemotion', ativaAcelerometro, false);
			// document.querySelector('.return').innerHTML = 'DeviceMotionEvent supported';
		} else {
			// document.querySelector('.return').innerHTML = 'DeviceMotionEvent is not supported';
			// console.log('DeviceMotionEvent is not supported');
		}
	
	} else {
	    isMobile = false;
	}
}

//paralax
function parallax(event){

	event.preventDefault();

	var palcoW = document.querySelector('#ad').clientWidth;
	var palcoH = document.querySelector('#ad').clientHeight;

	var posX = event.pageX - document.querySelector('#ad').offsetLeft;
	var posY = event.pageY - document.querySelector('#ad').offsetTop;

	var centroX = event.pageX - palcoW/2;
	var centroY = event.pageY - palcoH/2;

	var forceMove = 20;

	var moveX = forceMove*centroX/palcoW;
	var moveY  = forceMove*centroY/palcoH;

	if(ligaParallax){
		TweenMax.to('.text_top01 img:nth-child(1)', 2, {x: moveX/2, ease: Power2.easeOut});
		TweenMax.to('.text_top01 img:nth-child(2)', 2, {x: moveX/3, ease: Power2.easeOut});
		TweenMax.to('.text_top01 img:nth-child(3)', 2, {x: moveX/2, ease: Power2.easeOut});

		TweenMax.to('.text_top02 img:nth-child(1)', 2, {x: -moveX/2, ease: Power2.easeOut});
		TweenMax.to('.text_top02 img:nth-child(2)', 2, {x: -moveX/3, ease: Power2.easeOut});
		TweenMax.to('.text_top02 img:nth-child(3)', 2, {x: -moveX/2, ease: Power2.easeOut});
	}

}

// 
function ativaAcelerometro(event){

	// Return para acompanhar o evento
	// document.querySelector('.return').innerHTML = 'Accelerometer X ' + event.accelerationIncludingGravity.x + ', Y '
	// + event.accelerationIncludingGravity.y + ', Z '
	// + event.accelerationIncludingGravity.z + '<br><br>'+ 'Conexão = ' + connectionType + '<br>Velocidade '+ connectionVelocity + '<br>Navegador ' + userBrowser;

	// Forca do movimento
	var force = 1.2;

	var andaX = Math.round(event.accelerationIncludingGravity.x)*force;
	var andaY  = Math.round(event.accelerationIncludingGravity.y)*force;

	if(ligaParallax){
		TweenMax.to('.background', 2, { x:andaX, y:andaY, ease: Power0.easeNone});
	}

}

// GetBrowserInfo
function verificaBrowser() {

    arrayBrowserName = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'Opera', 'CriOS', 'FxiOS'];

    var browserType = navigator.userAgent;
    var valueBrowser = arrayBrowserName.length - 1;

    for (valueBrowser; valueBrowser > -1 && browserType.indexOf(arrayBrowserName[valueBrowser]) === -1; valueBrowser--);

    userBrowser = arrayBrowserName[valueBrowser];

    return userBrowser;

}

function keyShortsTween(event){if(event.key=='p'){event.preventDefault();TweenMax.pauseAll();} if(event.key=='r'){event.preventDefault();TweenMax.resumeAll();}}
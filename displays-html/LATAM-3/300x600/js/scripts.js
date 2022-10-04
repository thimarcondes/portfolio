//config
function inicia() {
  resetAd();
  iniciaAd();
  document.removeEventListener('DOMContentLoaded', inicia);
}

//vars
//////step1
var content = document.querySelector('#content');
var logo = document.querySelector('#step1 > img:nth-child(1)');
var latam1 = document.querySelector('#step1 > img:nth-child(2)');
var foto = document.querySelector('.background');
var txtIntro_1 = document.querySelector('#h_step1 img:nth-child(1)');
var txtIntro_2 = document.querySelector('#h_step1 img:nth-child(2)');
var txtIntro_3 = document.querySelector('#h_step1 img:nth-child(3)');
var box = document.querySelector('#h_step1_2');
var txtIntro_4 = document.querySelector('#h_step1_2  img:nth-child(1)');
var txtIntro_5 = document.querySelector('#h_step1_2  img:nth-child(2)');
var txtIntro_6 = document.querySelector('#h_step1_2  img:nth-child(3)');
var latam2 = document.querySelector('#step1 > img:nth-child(3)');

//////step2
var cta = document.querySelector('#ctaBT img');


//reseta
function resetAd() {
  //step1
  TweenMax.to(content, 0, {opacity: 0});
  TweenMax.to([logo, latam1, txtIntro_1, txtIntro_2, txtIntro_3, txtIntro_4, txtIntro_5, txtIntro_6], 0, {opacity: 0, y: 60});
  TweenMax.to(foto, 0, {opacity: 0, scale: 1.4});
  TweenMax.to(box, 0, {opacity: 0, scale: 0});
  TweenMax.to(latam2, 0, {opacity: 0});

  //step2
  TweenMax.to(cta, 0, {scale: 0});
}

//inicia
function iniciaAd() {
  //step1
  function step1() {
    TweenMax.to(content, 0.3, {opacity: 1, ease: Power2.easeOut, delay: 0.1});
    TweenMax.to(foto, 2, {opacity: 1, ease: Power2.easeOut, delay: 0.5});
    TweenMax.to(foto, 4.5, {scale: 1, scale: 1, ease: Power2.easeOut, delay: 0.7});
    TweenMax.to(logo, 0.6, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.2});
    TweenMax.to(latam1, 0.6, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.3});
    TweenMax.to(txtIntro_1, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.8});
    TweenMax.to(txtIntro_2, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 2});
    TweenMax.to(txtIntro_3, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 2.1});
    TweenMax.to(txtIntro_1, 0.5, {opacity: 0, y: 60, ease: Back.easeOut.config(2), delay: 6.2});
    TweenMax.to(txtIntro_2, 0.5, {opacity: 0, y: 60, ease: Back.easeOut.config(2), delay: 6});
    //
    TweenMax.to(box, 0.5, {opacity: 1, scale: 1, ease: Back.easeOut.config(1), delay: 6.5});
    TweenMax.to(txtIntro_4, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 6.6});
    TweenMax.to(txtIntro_5, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 6.7});
    TweenMax.to(txtIntro_6, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 6.8});
    TweenMax.to(box, 0.5, {opacity: 0, scale: 0, ease: Back.easeOut.config(1), delay: 10.5});
  }

  //step2
  function step2() {
    TweenMax.to(latam1, 0.8, {opacity: 0, ease: Back.easeOut.config(2), delay: 0});
    TweenMax.to(latam2, 1, {opacity: 1, ease: Back.easeOut.config(2), delay: 0});

    TweenMax.to(txtIntro_4, 0, {y: 155, x: 50, ease: Power2.easeOut, delay: 0});
    TweenMax.to(txtIntro_5, 0, {y: 155, x: 50, ease: Power2.easeOut, delay: 0});
    TweenMax.to(txtIntro_6, 0, {y: 155, x: 50, ease: Power2.easeOut, delay: 0});

    TweenMax.to(box, 0.5, {opacity: 1, scale: 1, className:"+=box2", delay: 0.1});
    TweenMax.to(cta, 0.5, {scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5});
  }

  TweenMax.delayedCall(0, step1);
  TweenMax.delayedCall(10.8, step2);
}

//cta
cta.onmouseover = ctaHover;
cta.onmouseout = ctaOut;
function ctaHover(){TweenMax.to(cta, .4, {scale:1.1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}
function ctaOut(){TweenMax.to(cta, .4, {scale:1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}

document.addEventListener('DOMContentLoaded', inicia);

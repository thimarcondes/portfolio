//config
function inicia() {
  resetAd();
  iniciaAd();
  document.removeEventListener('DOMContentLoaded', inicia);
}

//vars
//////step1
var content = document.querySelector('#content');
var up = document.querySelector('#up');
var dn = document.querySelector('#dn');
var box = document.querySelector('#box ');
var latam1 = document.querySelector('#step1 > img:first-child ');
var foto = document.querySelector('.background img');
var txtIntro_1 = document.querySelector('#h_step1 img:nth-child(1)');
var txtIntro_2 = document.querySelector('#h_step1 img:nth-child(2)');
var txtIntro_3 = document.querySelector('#h_step1 img:nth-child(3)');
var linha1 = document.querySelector('#h_step1 img:nth-child(4)');
var txtIntro_4 = document.querySelector('#h_step1 img:nth-child(5)');
var linha2 = document.querySelector('#h_step1 img:nth-child(6)');
var txtIntro_5 = document.querySelector('#h_step1 img:nth-child(7)');
var txtIntro_6 = document.querySelector('#h_step2 img:nth-child(1)');
//////step2
var cta = document.querySelector('#ctaBT img');


//reseta
function resetAd() {
  //step1
  TweenMax.to(content, 0, {opacity: 0});
  TweenMax.to(up, 0, {y: -328});
  TweenMax.to(dn, 0, {y: 340});
  TweenMax.to(box, 0, {opacity: 0, scale: 0});
  TweenMax.to(latam1, 0, {width: 65, opacity: 0, y: 60});
  TweenMax.to([txtIntro_1, txtIntro_2, txtIntro_3, txtIntro_4, linha1, linha2, txtIntro_5, txtIntro_6], 0, {opacity: 0, y: 60});
  TweenMax.to(foto, 0, {opacity: 0, scale: 1.4});

  //step2
  TweenMax.to(cta, 0, {scale: 0});
}

//inicia
function iniciaAd() {
  //step1
  function step1() {
    TweenMax.to(content, 0.3, {opacity: 1, ease: Power2.easeOut, delay: 0.1});
    TweenMax.to(up, 0.8, {y: -278, ease: Power2.easeOut, delay: 0.2});
    TweenMax.to(dn, 0.5, {y: 300, ease: Power2.easeOut, delay: 0.7});
    TweenMax.to(foto, 2, {opacity: 1, ease: Power2.easeOut, delay: 0.3});
    TweenMax.to(foto, 3, {scale: 1, ease: Power2.easeOut, delay: 0.3});
    TweenMax.to(box, 0.7, {opacity: 1, scale: 1, ease: Power2.easeOut, delay: 0.4});
    TweenMax.to(latam1, 0.6, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 0.5});
    TweenMax.to(txtIntro_1, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 0.7});
    TweenMax.to(txtIntro_2, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 0.8});

    TweenMax.to(txtIntro_1, 0.5, {y: 10, opacity: 0, ease: Back.easeOut.config(2), delay: 6.3});
    TweenMax.to(txtIntro_2, 0.5, {y: 10, opacity: 0, ease: Back.easeOut.config(2), delay: 6.1});
    TweenMax.to(box, 0.5, {width: 300, height: 250, ease: Power2.easeOut, delay: 6.0});

    TweenMax.to(txtIntro_3, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 6.9});
    TweenMax.to(linha1, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 7.1});
    TweenMax.to(txtIntro_4, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 7.2});
    TweenMax.to(linha2, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 7.3});
    TweenMax.to(txtIntro_5, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 7.4});
  }

  //step2
  function step2() {
    TweenMax.to(up, 0.6, {y: 0, ease: Power2.easeOut, delay: 0.5});
    TweenMax.to(dn, 0.6, {y: 375, ease: Power2.easeOut, delay: 0.9});
    TweenMax.to(latam1, 0.5, {width: 140, y: 25, x: 70, ease: Power2.easeOut, delay: 0.8});
    TweenMax.to(txtIntro_6, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.1});
    TweenMax.to(cta, 0.5, {scale: 1, opacity: 1, ease: Power2.easeOut, delay: 1.2});
  }

  TweenMax.delayedCall(0, step1);
  TweenMax.delayedCall(13, step2);
}

//cta
cta.onmouseover = ctaHover;
cta.onmouseout = ctaOut;
function ctaHover(){TweenMax.to(cta, .4, {scale:1.1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}
function ctaOut(){TweenMax.to(cta, .4, {scale:1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}

document.addEventListener('DOMContentLoaded', inicia);

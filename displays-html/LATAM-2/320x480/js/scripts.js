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
var icone1 = document.querySelector('#h_step1 img:nth-child(1)');
var icone2 = document.querySelector('#h_step1 img:nth-child(2)');
var txt1 = document.querySelector('#h_step1 img:nth-child(3)');
var txt2 = document.querySelector('#h_step1 img:nth-child(4)');
var txt3 = document.querySelector('#h_step1 img:nth-child(5)');
var txt4 = document.querySelector('#h_step1 img:nth-child(6)');
var txt5 = document.querySelector('#h_step1 img:nth-child(7)');
var barra = document.querySelector('#h_step1 img:nth-child(8)');

//////step2
var cta = document.querySelector('#ctaBT img');
var latam2 = document.querySelector('#h_step1_2 img:nth-child(1)');
var txt6 = document.querySelector('#h_step1_2 img:nth-child(2)');


//reseta
function resetAd() {
  //step1
  TweenMax.to(content, 0, {opacity: 0});
  TweenMax.to([logo, latam1, icone1, icone2, txt1, txt2, txt3, txt4, txt5, latam2, txt6, barra], 0, {opacity: 0, y: 60});
  TweenMax.to(foto, 0, {opacity: 0, scale: 1.4});

  //step2
  TweenMax.to(cta, 0, {scale: 0});
}

//inicia
function iniciaAd() {
  //step1
  function step1() {
    TweenMax.to(content, 0.3, {opacity: 1, ease: Power2.easeOut, delay: 0.1});
    TweenMax.to(foto, 2, {opacity: 1, ease: Power2.easeOut, delay: 0.2});
    TweenMax.to(foto, 4.5, {scale: 1, scale: 1, ease: Power2.easeOut, delay: 0.2});
    TweenMax.to(logo, 0.6, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.3});
    TweenMax.to(latam1, 0.6, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.5});
    TweenMax.to(icone1, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.8});
    TweenMax.to(icone1, 0.5, {opacity: 0, y: 60, ease: Power2.easeOut, delay: 2.8});
    TweenMax.to(icone2, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 3.3});
    TweenMax.to(icone2, 0.5, {opacity: 0, y: 60, ease: Power2.easeOut, delay: 5.3});
    TweenMax.to(txt1, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 5.8});
    TweenMax.to(txt2, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 6.1});
    TweenMax.to([txt3, barra], 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 6.2});
    TweenMax.to(txt1, 0.5, {opacity: 0, ease: Power2.easeOut, delay: 8.9});
    TweenMax.to(txt2, 0.5, {opacity: 0, ease: Power2.easeOut, delay: 9.2});
    TweenMax.to(txt4, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 9.6});
    TweenMax.to(txt5, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 9.8});

    TweenMax.to(txt5, 0.5, {opacity: 0, y: 30, ease: Power2.easeOut, delay: 11.8});
    TweenMax.to(txt4, 0.5, {opacity: 0, y: 30, ease: Power2.easeOut, delay: 12.0});
    TweenMax.to(barra, 0.5, {opacity: 0, ease: Power2.easeOut, delay: 12.0});
    TweenMax.to(latam1, 0.5, {opacity: 0, y: 30, ease: Power2.easeOut, delay: 12.2});
    TweenMax.to(logo, 0.5, {opacity: 0, y: 30, ease: Power2.easeOut, delay: 12.4});
  }

  //step2
  function step2() {
    TweenMax.to(latam2, 0.8, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 0});
    TweenMax.to(txt6, 0.5, {opacity: 1, y: 0, ease: Power2.easeOut, delay: 0.3});
    TweenMax.to(cta, 0.5, {scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5});
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

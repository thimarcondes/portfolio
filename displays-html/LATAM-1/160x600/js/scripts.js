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
var latam1 = document.querySelector('#step1 > img:first-child ');
var foto = document.querySelector('.background');
var txtIntro_1 = document.querySelector('#h_step1 img:nth-child(1)');
var txtIntro_2 = document.querySelector('#h_step1 img:nth-child(2)');

//////step2
var div_step2 = document.querySelector('#step2');
var latam2 = document.querySelector('#h_step2');
//
var txt1 = document.querySelector('#step2_bloco1 img:nth-child(1)');
var txt2 = document.querySelector('#step2_bloco2 img:nth-child(1)');
var txt3 = document.querySelector('#step2_bloco3 img:nth-child(1)');
var txt4 = document.querySelector('#step2_bloco3 img:nth-child(2)');
//
var linha1 = document.querySelector('#linha1');
var linha2 = document.querySelector('#linha2');

//////step3
var div_step3 = document.querySelector('#step3');
var txt5 = document.querySelector('#step3_bloco1 img:nth-child(1)');
var cta = document.querySelector('#ctaBT img');
var divAzul = document.querySelector('#divAzul');


//reseta
function resetAd() {

  //step1
  TweenMax.to(content, 0, {opacity: 0});
  TweenMax.to(up, 0, {y: -328});
  TweenMax.to(dn, 0, {y: 340});
  TweenMax.to([latam1, txtIntro_1, txtIntro_2], 0, {opacity: 0, y: 60});
  TweenMax.to(foto, 0, {opacity: 0, scale: 1.4});

  //step2
  TweenMax.to(div_step2, 0, {opacity: 0});
  TweenMax.to([txt1, txt2, txt3, txt4, latam2], 0, {opacity: 0, x: 60});
  TweenMax.to([linha1, linha2], 0, {opacity: 0, width: 0});

  //step3
  TweenMax.to(div_step3, 0, {opacity: 0});
  TweenMax.to(txt5, 0, {opacity: 0, x: 60});
  TweenMax.to(cta, 0, {scale: 0});
  TweenMax.to(divAzul, 0, {y: -400});

}

//inicia
function iniciaAd() {



  //step1
  function step1() {
    TweenMax.to(content, 0.3, {opacity: 1, ease: Power2.easeOut, delay: 0.1});
    TweenMax.to(up, 0.8, {y: -265, ease: Power2.easeOut, delay: 0.4});
    TweenMax.to(dn, 0.8, {y: 300, ease: Power2.easeOut, delay: 0.4});
    TweenMax.to(foto, 2, {opacity: 1, ease: Power2.easeOut, delay: 0.7});
    TweenMax.to(foto, 2.5, {scale: 1, ease: Power2.easeOut, delay: 0.8});
    TweenMax.to(latam1, 0.6, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1});
    TweenMax.to(txtIntro_1, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.7});
    TweenMax.to(txtIntro_2, 0.5, {opacity: 1, y: 0, ease: Back.easeOut.config(2), delay: 1.9});
  }

  //step2
  function step2() {
    TweenMax.to(".background img", 0.9, {left: 0, ease: Power2.easeOut, delay: 0});
    TweenMax.to(txtIntro_1, 0.5, {opacity: 0, x: 30, ease: Back.easeOut.config(2), delay: 0});
    TweenMax.to(txtIntro_2, 0.5, {opacity: 0, x: 30, ease: Back.easeOut.config(2), delay: 0.2});
    TweenMax.to(div_step2, 0.2, {opacity: 1, ease: Power2.easeOut, delay: 0});


    //TweenMax.to(up, 0.8, {y: -285, ease: Power2.easeOut, delay: 0.2});
    //TweenMax.to(dn, 0.8, {y: 300, ease: Power2.easeOut, delay: 0.2});
    //TweenMax.to(latam2, 0.6, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.8});

    TweenMax.to(txt1, 0.5, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.8});
    TweenMax.to(linha1, 0.5, {opacity: 1, width: 140, ease: Power2.easeOut, delay: 0.9});
    TweenMax.to(txt2, 0.5, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 1});
    TweenMax.to(linha2, 0.5, {opacity: 1, width: 140, ease: Power2.easeOut, delay: 1.1});
    TweenMax.to(txt3, 0.5, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 1.2});
    TweenMax.to(txt4, 0.5, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 1.3});

  }


  //step3
  function step3() {
    var caminho = 'src';
    $("#logoMuda").attr("src","images/latam3.png");
    TweenMax.to(latam1, 0.6, {y: 100, x: 25, width: 88, ease: Power2.easeOut, delay: 0.5});
    TweenMax.to(up, 1.6, {y: 500, ease: Power2.easeOut, delay: 0.4});
    TweenMax.to(dn, 0.65, {y: 340, ease: Power2.easeOut, delay: 0.9});
    TweenMax.to(divAzul, 1.5, {y: 580, ease: Power2.easeOut, delay: 0.3 });
    TweenMax.to(div_step3, 0.2, {opacity: 1, ease: Power2.easeOut, delay: 0.2});
    TweenMax.to(txt5, 0.5, {opacity: 1, x: 0, ease: Power2.easeOut, delay: 0.8});
    TweenMax.to(cta, 1.8, {scale:1, ease: Elastic.easeOut.config(1, 0.3), delay: 1.2,});
  }

  TweenMax.delayedCall(0, step1);
  TweenMax.delayedCall(8, step2);
  TweenMax.delayedCall(13, step3);

}

//cta
cta.onmouseover = ctaHover;
cta.onmouseout = ctaOut;
function ctaHover(){TweenMax.to(cta, .4, {scale:1.1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}
function ctaOut(){TweenMax.to(cta, .4, {scale:1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});}

document.addEventListener('DOMContentLoaded', inicia);

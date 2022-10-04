// Template Version 16.6.04

function iniciaPuro(){

	// console.log('iniciaPuro');

    document.removeEventListener('DOMContentLoaded', iniciaPuro);

    iniciaBanner();
    zeraAnimacao();
    iniciaAnimacao();

}

function overCTA(){
    // console.log('over CTA');
    // Enabler.counter("overCTA");
    TweenMax.to('.cta', .4, {scale:1.1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});
}

function outCTA(){
    // console.log('out CTA');
    // Enabler.counter("outCTA");
    TweenMax.to('.cta', .4, {scale:1, ease:Elastic.easeOut.config(1.5, 0.4), delay:0});
}

function clickCTA(){
    // console.log('click CTA');
    // Enabler.exit('click CTA');
    // window.open(clicktag, '_blank');
}

function clickBanner(){
    // console.log('click Banner');
    // Enabler.exit('click Banner');
    // window.open(clicktag, '_blank');
}

document.addEventListener('DOMContentLoaded', iniciaPuro);
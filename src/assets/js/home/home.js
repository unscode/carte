import animejs from "animejs";

const modernizr = require("modernizr");
require('../menu');

/**
 * Faz o registro do Service Worker para servir a página no modo offline ...
 */

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
*/

const blur = () => {

};

const focus = () => {

};

if (modernizr.hasEvent('blur')) {
    if (window.addEventListener) {
        window.addEventListener('blur', blur, false);
    } else if (window.attachEvent) {
        window.attachEvent('onblur', window.addEventListener('blur', blur, false));
    }
}

if (modernizr.hasEvent('focus')) {
    if (window.addEventListener) {
        window.addEventListener('focus', focus, false);
    } else if (window.attachEvent) {
        window.attachEvent('onfocus', window.addEventListener('focus', focus, false));
    }
}

let one = animejs.path('.emotion__ways .emotion__ways__one');
let two = animejs.path('.emotion__ways .emotion__ways__two');
// let three = animejs.path('.emotion__ways .emotion__ways__three');
let four = animejs.path('.emotion__ways .emotion__ways__four');
//let five = animejs.path('.emotion__ways .emotion__ways__five');

animejs({
    targets: '.emotion__follower__one',
    translateX: one('x'),
    translateY: one('y'),
    rotate: one('angle'),
    easing: 'linear',
    duration: 15000,
    loop: true
});


animejs({
    targets: '.emotion__follower__two',
    translateX: two('x'),
    translateY: two('y'),
    easing: 'linear',
    duration: 25000,
    delay: 10000,
    loop: true
});

/*animejs({
    targets: '.emotion__follower__three',
    translateX: three('x'),
    translateY: three('y'),
    easing: 'linear',
    duration: 25000,
    delay: 5000,
    loop: true
});*/

animejs({
    targets: '.emotion__follower__four',
    translateX: four('x'),
    translateY: four('y'),
    easing: 'linear',
    duration: 20000,
    delay: 9000,
    loop: true
});


/*animejs({
    targets: '.emotion__follower__five',
    translateX: five('x'),
    translateY: five('y'),
    easing: 'linear',
    duration: 35000,
    loop: true
});*/

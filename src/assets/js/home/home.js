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

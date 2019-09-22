import inView from "in-view";

require('../menu');

inView.threshold(0.5);
inView('.service')
    .on('enter', (el) => {
        document.body.setAttribute(`class`, el.getAttribute(`data-section`));
    })
    .on('exit', (el) => {
        // document.body.setAttribute(`class`, ``);
    });
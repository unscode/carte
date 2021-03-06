
/**
 * Adiciona ou remove o attributo menu na tag body.
 *
 * @return void
 */
const menuAttributeToggle = () => {
    const body = document.body;
    let timeout;
    if (body.hasAttribute('menu')) {
        body.setAttribute('menu-hiding', '');
        timeout = window.setTimeout(() => {
            body.removeAttribute('menu');
            body.removeAttribute('menu-hiding');
            window.clearTimeout(timeout)
        }, 500);
    }
    body.setAttribute('menu', '');
};

let hamburger_open = document.getElementById('hamburger');
if (hamburger_open) {
    if (hamburger_open.addEventListener) {
        hamburger_open.addEventListener('click', menuAttributeToggle, false);
    } else if (hamburger_open.attachEvent) {
        hamburger_open.attachEvent('onclick', menuAttributeToggle);
    }
}

import { RetractableElement } from '@app/sticky/retractableElement';
import './styles.scss';

// old school sticky
/*
if (CSS.supports('position', 'sticky')) {
    // onScroll-event
    window.addEventListener('scroll', () => {
        let offsetNav = nav.offsetTop || -1;
        let scrollPosition = window.scrollY || window.pageYOffset;

        header.classList.toggle('stuck', scrollPosition > offsetNav);
    });
}
*/

const header = document.querySelector('body > .header');
const footer = document.querySelector('body > .footer');

const stickyHeader = new RetractableElement(header, 'retracted');
const stickyFooter = new RetractableElement(footer, 'retracted', false);

stickyHeader.init();
stickyFooter.init();

console.log('test');

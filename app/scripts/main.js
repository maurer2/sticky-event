{
    const header = document.querySelector('body > .header');
    const footer = document.querySelector('body > .footer');

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

    class RetractableElement {
        constructor(element, className, retractOnDown = true, threshold = 0) {
            this.element = element;
            this.className = className;
            this.retractOnDown = retractOnDown;
            this.threshold = threshold;

            // init faux scroll-loop
            this.fauxScrollLoop(0);
        }

        fauxScrollLoop(lastScrollPosition) {
            window.requestAnimationFrame(() => {
                const scrollPosition = window.scrollY || window.pageYOffset;
                const lowerThreshold = lastScrollPosition - this.threshold;
                const upperThreshold = lastScrollPosition + this.threshold;

                // scroll down
                if (scrollPosition > upperThreshold) {
                    this.scrollDown();
                }

                // scroll upp
                if (scrollPosition < lowerThreshold) {
                    this.scrollUp();
                }

                this.fauxScrollLoop(scrollPosition);
            });
        }

        scrollDown() {
            if (!this.retractOnDown) {
                this.element.classList.remove(this.className);

                return;
            }

            this.element.classList.add(this.className);
        }

        scrollUp() {
            if (!this.retractOnDown) {
                this.element.classList.add(this.className);

                return;
            }

            this.element.classList.remove(this.className);
        }
    }

    const stickyHeader = new RetractableElement(header, 'retracted');
    const stickyFooter = new RetractableElement(footer, 'retracted', false);
}

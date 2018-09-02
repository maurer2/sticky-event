export class RetractableElement {
  constructor(element, className, retractOnDown = true, threshold = 0) {
    this.element = element;
    this.className = className;
    this.retractOnDown = retractOnDown;
    this.threshold = threshold;
  }

  init() {
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

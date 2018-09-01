const intersection = new IntersectionObserver((observedElements) => {
  observedElements.forEach((element) => {
    const name = element.target.className;

    if (element.isIntersecting) {
      console.log(`${name}: visible`);
    } else {
      console.log(`${name}: hidden`);
    }
  });
});

intersection.observe(document.querySelector('.header-2'));
intersection.observe(document.querySelector('.footer-2'));

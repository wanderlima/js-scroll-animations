import "./styles.scss";

export default function jsScrollAnimations() {
  let throttleTimer = false;
  let scrollElements = document.querySelectorAll("[data-jsscroll]");

  function elementInView(el, threshold = 1) {
    const top = el.getBoundingClientRect().top;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const inView = top >= 0 && top <= windowHeight / threshold;

    return inView;
  }

  function handleScrollAnimation() {
    throttle(() => {
      scrollElements.forEach((el) => {
        const delay = el.getAttribute("data-jsscroll-delay") || 0;
        const reset = el.hasAttribute("data-jsscroll-reset");
        const threshold = el.getAttribute("data-jsscroll-threshold") || 1.25;

        const isInView = elementInView(el, parseFloat(threshold));

        if (isInView) {
          setTimeout(() => {
            el.classList.add("jsScroll__scrolled");
          }, delay);
        } else if (reset && !elementInView(el, 0)) {
          el.classList.remove("jsScroll__scrolled");
        }
      });
    }, 250);
  }

  function throttle(callback, time) {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  }

  function init() {
    if (scrollElements.length === 0) return;

    window.addEventListener("scroll", handleScrollAnimation);

    handleScrollAnimation();
  }

  function reset() {
    scrollElements.forEach((el) => {
      el.classList.remove("jsScroll__scrolled");
      el.classList.remove("jsScroll__disabled");
    });
  }

  function pause() {
    window.removeEventListener("scroll", handleScrollAnimation);
  }

  function disable() {
    pause();
    reset();
    scrollElements.forEach((el) => {
      el.classList.add("jsScroll__disabled");
    });
  }

  return {
    init,
    pause,
    reset,
    disable,
  };
}

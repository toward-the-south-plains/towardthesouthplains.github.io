const nav = {
  el: document.getElementById("navbar"),
  height: 0,

  scrollPrompt() {
    setTimeout(() => {
      this.el.classList.add('scroll-prompt');
    }, 3000);
  },

  init() {
    this.height = this.el.offsetHeight;
    this.scrollPrompt();
  },
};

const scrollEvents = {
  didScroll: false,

  hasScrolled() {
    if (window.scrollY > nav.height) {
      nav.el.classList.remove("scroll-prompt");
    } else if (window.scrollY < nav.height) {
      nav.el.classList.add("scroll-prompt");
    }
  },

  init() {
    setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
      }
    }, 250);
  },
};

window.load = nav.init(); scrollEvents.init();
window.addEventListener('scroll', () => scrollEvents.didScroll = true);

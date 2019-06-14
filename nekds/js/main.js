function splitScroll(){
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: '300%',
    triggerElement: '.services',
    triggerHook: 0
  }).setPin('.section__id__container')
  .addTo(controller);
}

//splitScroll();

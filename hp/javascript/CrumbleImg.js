export function animetion (){


  console.log('animetion -start-');
  const animetion_Crum = anime.timeline({
    targets: '#canvas canvas',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: false,
    autoplay: false
  })
  .add({
    translateY: 1000,
    delay: anime.stagger(200, {grid: [19, 10], from: 'center'})
  },'+=1000');
  /*.add({
    translateY: 0,
    rotate: anime.stagger([-45, 45]),
    easing: 'easeInOutCirc',
      delay: anime.stagger(100, {grid: [19, 10], from: 'center', direction: 'reverse'})
  }, '+=500');*/
  animetion_Crum.play();
};

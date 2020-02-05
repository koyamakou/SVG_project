

export const SvgAnime = function(childPath){
  console.log('SvgAnime-始まり');
  /*timelineの宣言*/
  var logoAnimationTL = anime.timeline({
    autoplay: false,
    easing: 'easeInOutQuint',
    loop: false
  })
  /*SVGを視覚化(文字が手書き風に出力される)*/
  logoAnimationTL
  .add({
    targets: childPath[0],
    strokeDashoffset: [anime.setDashoffset, childPath[0].getTotalLength()*2],
    duration: 1000,
  })
  .add({
    targets: childPath[1],
    strokeDashoffset: [anime.setDashoffset, childPath[1].getTotalLength()*2],
    duration: 1000,
  },'-=600')
  .add({
    targets: childPath[2],
    strokeDashoffset: [anime.setDashoffset, childPath[2].getTotalLength()*2],
    duration: 1000,
  },'-=600')
  .add({
    targets: childPath[3],
    strokeDashoffset: [anime.setDashoffset, childPath[3].getTotalLength()*2],
    duration: 1000,
  },'-=600');
  console.log('SvgAnime-終わり');
  logoAnimationTL.play();

  /*各要素のdurationや秒数の指定＆配列化*/
  let animeId = [
    //{Id: childPath[0], duration: 1100},
    {Id: childPath[0], duration: 1100, second: '-=200'},
    {Id: childPath[1], duration: 900, second: '-=900'},
    {Id: childPath[2], duration: 700, second: '-=600'},
    {Id: childPath[3], duration: 500, second: '-=350'}
  ]

  /*配列を回して、fill-opacityを1に変更。これにより、あらかじめ
  指定していた色が浮き上がる*/
  animeId.forEach(function(Path, index) {
    logoAnimationTL
    .add({
      targets: Path.Id,
      /*	fill: {
      //value: ['#ffffff', '#ff0000'],
      value: ['#000000','url(#g1)'],
      duration: Path.duration,
      easing:'easeInSine',
    },*/
    duration: Path.duration,
    easing:'easeInSine',
    fillOpacity: 1,
  },Path.second)
});
/*opacityを使って不可視化*/
logoAnimationTL
.add({
  targets: childPath,
  duration: 850,
  delay: 350,
  opacity: 0,
  easing: 'easeInCubic',
  complete: function(){
    var obj = document.getElementById('SVG_Data');
    obj.id = 'bacuk_picture';
  }
});
logoAnimationTL.play();
/*	if(){
var obj = document.getElementById('SVG_Data');
obj.id = 'bacuk_picture';
}*/
}

$(function(){
	$("#SVG_Data").load('picture/鬼.svg svg', function(){
		let svgId;
		svgId = document.querySelectorAll('.svg');
		SvgAnime(svgId);

		console.log('aaaaaaaaaaa');
	});
});

var SvgAnime = function(childPath){
	console.log('SvgAnime-始まり');
	const logoAnimationTL = anime.timeline({
    autoplay: false,
    easing: 'easeInOutQuint',
  })
	.add({
		targets: childPath[0],
		strokeDashoffset: [anime.setDashoffset, childPath[0].getTotalLength()*2],
		duration: 1000,
		//direction: 'alternate',
		loop: false,
	})
	.add({
		targets: childPath[1],
		strokeDashoffset: [anime.setDashoffset, childPath[1].getTotalLength()*2],
		duration: 1000,
		loop: false,
	},'-=600')
	.add({
		targets: childPath[2],
		strokeDashoffset: [anime.setDashoffset, childPath[2].getTotalLength()*2],
		duration: 1000,
		loop: false,
	},'-=600')
	.add({
		targets: childPath[3],
		strokeDashoffset: [anime.setDashoffset, childPath[3].getTotalLength()*2],
		duration: 1000,
		loop: false,
	},'-=600');

	console.log('SvgAnime-終わり');
	logoAnimationTL.play();
}

$(function(){
	$("#SVG_Data").load('picture/鬼.svg svg', function(){
		let svgId;
		svgId = document.querySelectorAll('.svg');
		SvgAnime(svgId);

		console.log('aaaaaaaaaaa');
	});
});
var logoAnimationTL = anime.timeline({
	autoplay: false,
	easing: 'easeInOutQuint',
	loop: true
})

var SvgAnime = function(childPath){
	console.log('SvgAnime-始まり');
	logoAnimationTL
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

	let animeId = [
		{Id: childPath[0], duration: 1100, second: '-=200'},
		{Id: childPath[1], duration: 900, second: '-=600'},
		{Id: childPath[2], duration: 700, second: '-=400'},
		{Id: childPath[3], duration: 500, second: '-=400'}
	]

	animeId.forEach(function(Path, index) {
		logoAnimationTL
		.add({
			targets: Path.Id,
			fill: {
				value: ['#fffff', '#FF0000'],
				duration: Path.duration,
				easing:'easeInSine'
			}
		},Path.second)
	});


	logoAnimationTL
	.add({
		targets: childPath,
		duration: 850,
		delay: 350,
		opacity: 0,
		easing: 'easeInCubic'
	});
	logoAnimationTL.play();
}

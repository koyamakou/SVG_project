$(function(){
	$("#鬼").load('picture/鬼.svg svg', function(){
		let svgId;
		/*for(let i=1; i<5; i++){
			svgId = document.querySelectorAll('#svg'+i);
			SvgAnime(svgId);
		};*/
		svgId = document.querySelectorAll('#svg1');
		SvgAnime(svgId);

		console.log('aaaaaaaaaaa');
	});
});



var SvgAnime = function(childPath){
	console.log('SvgAnime-始まり');
	let dashoffset = childPath[0].getTotalLength()*2;
	anime({
		targets: childPath,
		strokeDashoffset: [anime.setDashoffset, dashoffset],
		easing: 'easeInOutSine',
		duration: 2000,
		delay: function(el, i) { return i*250 },
		direction: 'normal',
		loop: false,
	});
	// CSSPropertyの取得
	let style = window.getComputedStyle(childPath[0], null).getPropertyValue('stroke-dashoffset');

	// 文字列を数値化(今回は少数まで出す必要があるため、float)
	let number = parseFloat(style, 10);
	console.log(number);
	console.log(dashoffset);
/*
	while(number < dashoffset ){
		style = window.getComputedStyle(childPath[0], null).getPropertyValue('stroke-dashoffset');
		number = parseFloat(style, 10);

		console.log(number);
		if(number > dashoffset){
			console.log("11111111111111aa"+number);
			break;
		}
	}
*/

//	console.log(style);


	console.log('SvgAnime-終わり');
}

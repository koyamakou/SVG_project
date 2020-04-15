import {SvgAnime} from './module.js';
var i = 0;
$(function(){
	/*SVGデータを非同期で読み込み*/
	$("#SVG_Data").load('picture/op_picture.svg svg', function(){
		let svgId;
		svgId = document.querySelectorAll('.svg');
		/*SVGアニメーション*/
		SvgAnime(svgId);
		console.log('aaaaaaaaaaa');
		i =1;
	});
});

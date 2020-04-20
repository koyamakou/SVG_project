import {SvgAnime} from './module.js';

var i = 0;
$(function(){
	/*SVGデータを非同期で読み込み*/
	$("#SVG_Data").load('picture/op_picture.svg svg', function(){
		let svgId;
		svgId = document.querySelectorAll('.svg');
		/*SVGアニメーション*/
		(async function(){
			await SvgAnime(svgId);
			console.log('aaaaaaaaaaa');
		})();
	});
});

/**********CSSアニメーション終了後**************/
/*
var collapse = document.querySelector('#root');

console.log(collapse);
collapse.addEventListener('animationednd', function(){
	//即時関数
	(async function() {
	  cleateDom();
	  await downLoad();
	  animetion ();
	})();
});
*/

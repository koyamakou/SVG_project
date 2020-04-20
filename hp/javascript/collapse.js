
const grid = [20, 10];//[60, 34];
const col = grid[0];
const row = grid[1];
const numberOfElements = col*row;

/**
* [cleateDom description]
* @return {[type]} [description]
*/
export async function cleateDom() {
  const rootCanvas = document.querySelector('#canvas');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfElements; i++ ) {
    fragment.appendChild(document.createElement('canvas'));
  };
  rootCanvas.appendChild(fragment);
}

/**
* [downLoad description]
* @return {[type]} [description]
*/
export function downLoad(){
  const rootCanvas = document.querySelector('#canvas');
  const fragment = document.createDocumentFragment();
  const root = document.querySelector('#root');
  const setWidth = root.offsetWidth;
  const setHeight = root.offsetHeight;
  let count = 0;
  let positionY = 0;
  let promise;
  let promise_1 = [];

  // imgが全てloadする前に、canvasが動くため
  // 先に必要な数だけloadを行う。(load途中で次のforに行くが)
  for(let i = 0; i < rootCanvas.childElementCount; i++){
    // 画像オブジェクトを生成
    var img = new Image();
    img.src = './picture/wa.jpg';
  }
  // 呼び出し元で本メソッド完了後に何か同期的に処理を行うために
  // Promiseで返す
  return new Promise((resolve, reject) => {

    for (let i = 0; i < rootCanvas.childElementCount; i++) {
      //画像が読み込まれたタイミングで処理を実行
      //2Dコンテキストのオブジェクトを生成する
      const canvas = rootCanvas.childNodes[i];
      const ctx = canvas.getContext('2d');
      // imgがload完了したタイミングでcanvasを行う
      // img.srcは非同期であるため、Promiseを使う
      promise = new Promise(function(resolve, reject){
        // ingのload完了時に処理される
        img.addEventListener('load', function(event) {
          resolve(img);
        });
      });
      // Promise処理が終了したら入る処理
      promise.then(function(result){
        // 次の同期処理に渡すためにPromiseで返す
        return new Promise((resolve, reject) => {
          const img = result;
          if (count === 19) {
            count = 0;
            positionY = positionY + 100;
          }
          resolve([img, count, positionY]);
        });
      }).then(function(result){
        drawing(canvas, ctx, result).then(function(result){
          count++;
        });
      });
      promise_1.push(promise);
    }
    // 配列に入れたpromiseのオブジェクトが全て処理完了となったら入る
    Promise.all(promise_1).then(function() {
      resolve();
    });
  });
}

function drawing(canvas, ctx, position) {
  //画像をcanvasに設定
  return new Promise(function(resolve, reject){
    canvas.width = 100;
    canvas.height = 100;
    ctx.drawImage(position[0], position[1]*100, position[2], 100, 100, 0, 0, 100, 100);
    resolve();
  });
}

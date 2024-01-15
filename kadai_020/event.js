// btnとtextいうidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});


(()=>{
const $btn = document.getElementById("btn");


$btn.onclick = function OnButtonClick(){
  // 選択された物のvalue取得
  let $menu1 = document.form1.goods1.value;
  // 金額を表示
  document.form1.price1.value = $menu1

  // 2つ目
  let $menu2 = document.form1.goods2.value;
  document.form1.price2.value = $menu2;

  // 3つ目
  let $menu3 = document.form1.goods3.value;
  document.form1.price3.value = $menu3;

  // 合計金額
  let sum = parseInt($menu1) + parseInt($menu2) + parseInt($menu3)
  document.form1.sum.value = sum;

  // カロリーに応じてメッセージをだす
  const inkcal = parseInt(sum)

  if (inkcal >= 1000) {
    alert("合計" + inkcal +"kcalです。食べ過ぎです!");
  } else if (inkcal >= 800) {
    alert("合計" + inkcal + "kcalです。これ以上食べるのはやめましょう!");l
  } else if (inkcal >= 600) {
    alert("合計" + inkcal +"kcalです。いい感じです!");
  } else if (inkcal === 0) {
    alert("商品を選択してください。")
  } else {
    alert("合計" + inkcal +"kcalです。ダイエットを意識したカロリーですね!");
  }
}








// const $add = document.getElementById("add")

// ボタンを押すと選択箇所を増やす
// $add.addEventListener("click",function() {
//   console.log("!")
//   let element = document.getElementById("ccc");
//   let clone = element.cloneNode(true);
//   document.getElementById("option").appendChild(clone);
//   console.log(clone)
// });

// 複製にする
// 場所を指定

// function aaa (){
//   let bbb = document.createElement("button")
//   document.body.tr.td.select.appendChild(bbb);
// }

// $add,addEventListener("click",function() {
//   aaa();
// });


})();


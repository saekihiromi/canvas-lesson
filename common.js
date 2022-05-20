console.log("hello world");


var test = document.getElementById("test");
console.log(test);

// --------------------

var canvas = document.getElementById("sample");
var context = canvas.getContext("2d");

// 色の選択
context.fillStyle = "rgb(110, 92, 252)" ;
// (ポジション左、ポジション上、幅、高さ)
context.fillRect(100,40,50,100);


// 色の選択
context.strokeStyle = "rgb(110, 92, 252)" ;
// (ポジション左、ポジション上、幅、高さ)
context.strokeRect(300,40,100,50);



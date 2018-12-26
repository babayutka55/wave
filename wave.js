//*****************************************
//                定数部分
//*****************************************
const CANV_WID      = 680;                  //キャンバスの横幅
const CANV_HEI      = 500;                  //キャンバスの縦幅

var r = 30; //振幅
var T = 600; // 周期
var T2 = 450; // 周期
var degree = 0; //角度
var degree2 = 260; //角度
var degree3 = 160; //角度
//*****************************************
//                描画部分
//*****************************************
//キャンバス背景を動的にページ内に生成する
var canvas    = document.createElement('canvas');
canvas.id     = "cnvs";
canvas.width  = CANV_WID;
canvas.height = CANV_HEI;

document.body.appendChild(canvas);
var ctx  = canvas.getContext("2d");

//キャンバスの範囲を指定
ctx.fillRect(0,0,CANV_WID,CANV_HEI);

//描画開始！！
    kickParticle();

//*****************************************
//                関数部分
//*****************************************
function init(){
    //何らかの初期化処理
    ctx.fillStyle = 'white';
}

function updTimestamp(){

    //描画された矩形をクリア
    ctx.clearRect(0,0,CANV_WID,CANV_HEI);

    //波を描画
    drawWave();

    ctx.stroke();

    degree += 3; //3度づつ増やしていく

    //繰り返し
    requestAnimationFrame(updTimestamp);
}

function kickParticle(){
    init();
    updTimestamp();
}

function drawWave(){

    ctx.beginPath();

    //線の色と太さを指定。これをやらないと境界線が黒くなる。お好みの線の色と太さを指定しよう
    ctx.strokeStyle = '#A7F1FF';
    ctx.lineWidth = 1;

    //開始点を指定
    ctx.moveTo(0, -r * Math.sin((2 * Math.PI / T) * degree) + (canvas.height / 3));

    //sin波を微小区間ごとに描画
    for (let x = 1; x <= canvas.width; x += 1) {
        let y = -r * Math.sin((2 * Math.PI / T) * (degree + x));
        ctx.lineTo(x, y + (canvas.height * 0.8));
    }

    ctx.lineTo(canvas.width, canvas.height); //パスをcanvasの右下まで
    ctx.lineTo(0, canvas.height); //パスをcanvasの左下まで
    ctx.closePath() //パスを閉じる

    //色を指定しパスを塗りつぶす
    ctx.fillStyle = '#C2EEFF';
    ctx.globalAlpha = 0.5;
    ctx.fill();

}

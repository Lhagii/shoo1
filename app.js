//Тоглоомын бүх газарт ашиглагдах галобал хувьсагчийг эгд зарлая

var activePlayer;
var roundScore;
var scores;
var diceDom = document.querySelector(".dice");
// Тоглоом эхэллээ гэдэг төлөвт оруулна.
var isNewGame;

 // Тоглоомыг эхлүүлнэ.
 initGame();
//Шоо шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    if(isNewGame){
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  //Буусан санамсаргүй тоонд харгарзах тооны зургйиг вэб дээр гаргаж ирнэ
  diceDom.src = "img/shoo-" + diceNumber + ".png";
 
  // Бусад тоо нь 1ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлэнэ.
  if (diceNumber !== 1) {
    //1ээс ялгаатай тоо буцлаа. Буусан тоог тоглогчид нэмэж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //Энэ тоглогчийн ээлжиндээ цунлццлсан огноог 0 болгоно
    switchTonextPlayer();

  }
} else {
   alert("Тоглоом дууссан байна. Шинээр тоглох товчийг дарж шинээр эхлэнэ үү");
}
});
scores = [0, 0];
//Оноо цуглуулах эвент
document.querySelector(".btn-hold").addEventListener("click", function () {
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
if(isNewGame){
   
//Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
scores[activePlayer] = scores[activePlayer] + roundScore;
//Дэлгэц дээр оноог нь өөрчилнө
document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

// Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
if (scores[activePlayer] >= 10) {

//Тоглоомыг дууссан төлөвт оруулна
isNewGame = false;
//Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
document.getElementById("name-" + activePlayer).textContent = "Ялагч!!!";
document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
document.querySelector(".player-" + activePlayer + "panel").classList.remove("active");



} else {
    //Тоглогчийн ээлжийг солино
switchTonextPlayer();
}
} else {
    alert("Тоглоом дууссан байна. Шинээр тоглох товчийг дарж шинээр эхлэнэ үү");
}
});

//Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchTonextPlayer() {
//Энэ тоглогчийн ээлжиндээ цунлццлсан огноог 0 болгоно
roundScore = 0;
document.getElementById("current-" + activePlayer).textContent = 0;
//Тоглогчийн ээлжийг нөгөө тоглуулагч руу шилжинэ.
activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//цэгийг шилжүүлэх
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");
//Шоог түр алга болгоно.
diceDom.style.display = "none";
}


document.querySelector(".btn-new").addEventListener("click", initGame);


// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
//Тоглоом эхэллээ гэдэг төлөвт оруулна.
isNewGame = true;
//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийн 0, хоёрдугаар тоглогчийн 1 гэж тэмдэглэе.
activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;
 
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//Тоглогчдын нэрийг буцааж гаргах
document.getElementById("name-0").textContent = "Тоглогч 1";
document.getElementById("name-1").textContent = "Тоглогч 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");
diceDom.style.display = "none";
}
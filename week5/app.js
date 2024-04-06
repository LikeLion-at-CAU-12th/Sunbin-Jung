//1. js파일에서 접근해야하는 html dom 요소들 선언

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const gameResult = document.getElementById("display-result");

const myScore = document.getElementById("my-score");
const comScore = document.getElementById("com-score");

//2. 선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click",displayMyChoice);
scissorsBtn.addEventListener("click",displayMyChoice);
paperBtn.addEventListener("click",displayMyChoice);

//3. 이벤트 발생한 dom 객체에 접근하기
function displayMyChoice(e){
    let clickedBtn=e.currentTarget.id;
    let clickedIcon=e.target.className;

    myHandText.innerText=clickedBtn;
    myHandIcon.className=clickedIcon;

    start(clickedBtn);
}

//4. 컴퓨터 선택 가져오기
function getComChoice(){
    const randomValue={
        0:["rock","fa-regular fa-hand-back-fist change"],
        1:["scissors","fa-regular fa-hand-scissors fa-rotate-90 change"],
        2:["paper","fa-regular fa-hand change"],
    };

    const randomIndex = Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

//5. 컴퓨터 선택 출력
function displayComChoice(result) {
    computerText.innerText=result[0];
    computerIcon.className=result[1];
}

//6. 게임 시작하기
function start(myChoice){
    let resultArray=getComChoice();
    // let computerText=resultArray[0];

    displayComChoice(resultArray);
    judgeGame(myChoice, resultArray); // 두 번째 인자로 resultArray를 전달
}

//7. 게임 판단하기
function judgeGame(myChoice, resultArray){
    if (myChoice == resultArray[0]) {
        gameResult.innerText = "draw";
    } else if ((myChoice == "rock" && resultArray[0] == "scissors") ||
               (myChoice == "paper" && resultArray[0] == "rock") ||
               (myChoice == "scissors" && resultArray[0] == "paper")) {
         gameResult.innerText = "win";
    } else {
        gameResult.innerText = "lose";
    }   
}
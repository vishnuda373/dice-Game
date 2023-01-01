var button = document.querySelector(".button");
function rollDice(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    // console.log("Random Number 1 => " + randomNumber1);
    document.querySelector(".img1").setAttribute("src","images/dice" +randomNumber1+".png");
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    // console.log("Random Number 2 => " + randomNumber2);
    document.querySelector(".img2").setAttribute("src","images/dice" +randomNumber2+".png");
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "🚩 Robot Wins !";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "You Win ! 🚩";
    }
    else{
        document.querySelector("h1").innerText = "Draw ! 🤝";
    }
}
button.addEventListener("click",rollDice);


  
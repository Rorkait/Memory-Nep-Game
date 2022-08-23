const tryButton = document.getElementById("trybtn");

tryButton.addEventListener("click", () =>{
    window.location="../pages/game.html";
})

function playerStats(){
    const playerstats = document.querySelector("#score");
    const time = localStorage.getItem("time");
    playerstats.innerHTML = `Congratulations<br> your time is : ${time} `

}
playerStats();
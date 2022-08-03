function random(){
  var player1 = Math.floor((Math.random() * 6)) + 1;
  var player2 = Math.floor((Math.random() * 6)) + 1;



  var arr = document.querySelectorAll("img");
  arr[0].setAttribute("src", "./images/dice" + player1 + ".png");
  arr[1].setAttribute("src", "./images/dice" + player2 + ".png");

  if(player1 > player2){
    document.querySelector("div h1").textContent = "Player 1 won"
  }else if(player2 > player1){
    document.querySelector("div h1").textContent = "Player 2 won"
  }else{
    document.querySelector("div h1").textContent = "Refresh Me"
  }

}

document.querySelector("button").addEventListener('click', random)

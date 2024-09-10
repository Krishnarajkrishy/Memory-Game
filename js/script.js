

const emojis = [
  "😀",
  "😊",
  "😚",
  "😎",
  "🤩",
  "😡",
  "😈",
  "🤡",
  "😀",
  "😊",
  "😚",
  "😎",
  "🤩",
  "😡",
  "😈",
  "🤡",
];

  const shufEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
  for (let i = 0; i < emojis.length; i++){
    const box = document.createElement("div")
    box.className = "item";
    box.innerHTML = shufEmojis[i];

    box.addEventListener("click", () => {
      box.classList.add("boxopen")
      setTimeout(() => {
        if (document.querySelectorAll(".boxopen").length > 1) {
          if (document.querySelectorAll(".boxopen")[0].innerHTML == document.querySelectorAll(".boxopen")[1].innerHTML) {
            document.querySelectorAll(".boxopen")[0].classList.add("boxMatch")
            document.querySelectorAll(".boxopen")[1].classList.add("boxMatch")

            document.querySelectorAll(".boxopen")[1].classList.remove("boxopen")
            document.querySelectorAll(".boxopen")[0].classList.remove("boxopen")

            if (document.querySelectorAll(".boxMatch").length == emojis.length) {
              alert("YOU WON THE GAME")
            }
          } else {
            document
              .querySelectorAll(".boxopen")[1]
              .classList.remove("boxopen");
            document
              .querySelectorAll(".boxopen")[0]
              .classList.remove("boxopen");
          }
        }
        
      }, 500);
    })

    const game = document.querySelector(".game")
    const gameArea = game.appendChild(box)

} 


  


  
  
    
    

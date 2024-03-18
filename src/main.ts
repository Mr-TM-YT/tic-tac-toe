import { IBoard, getBoard, isGameOver } from "./Board";


function placeMark(cell: Element, symbol: string) {
  if (cell.innerHTML === "") {
    cell.innerHTML = symbol;
  }
}

function main() {
  let xRole = true;
  let header = document.querySelector(".header");
  let gameOver = false;
  let board: IBoard = getBoard();
  for (let element of document.querySelectorAll(".game-element")) {
    element.addEventListener("click", (e) => {
      gameOver = isGameOver(board);
      if (gameOver) {
        e.target!.removeEventListener("click", null);
        header!.innerHTML = !xRole ? "X Won" : "O Won"
        header!.innerHTML += ", restarting the game in 2 seconds";
        setTimeout(() => location.reload(), 2000)
      }
      if (element.innerHTML == "") {
        placeMark(element, xRole ? "X" : "O")
        xRole = !xRole;
      }
      if ((board.tl.innerHTML !== "" && board.tc.innerHTML !== "" && board.tr.innerHTML !== "" && board.ml.innerHTML !== "" && board.mc.innerHTML !== "" && board.mr.innerHTML !== "" && board.bl.innerHTML !== "" && board.bc.innerHTML !== "" && board.br.innerHTML !== "") && !gameOver) {
        header!.innerHTML = "It's a Draw, restarting the game in 2 seconds"
        setTimeout(() => location.reload(), 2000)
      }
    })
  }
}
main();


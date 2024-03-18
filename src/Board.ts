export interface IBoard {
  tl: Element,
  tc: Element,
  tr: Element,
  ml: Element,
  mc: Element,
  mr: Element,
  bl: Element,
  bc: Element,
  br: Element
}

export function getBoard(): IBoard {
  return {
    tl: document.querySelector(".tl")!,
    tc: document.querySelector(".tc")!,
    tr: document.querySelector(".tr")!,
    ml: document.querySelector(".ml")!,
    mc: document.querySelector(".mc")!,
    mr: document.querySelector(".mr")!,
    bl: document.querySelector(".bl")!,
    bc: document.querySelector(".bc")!,
    br: document.querySelector(".br")!,
  }
}

export function isGameOver(board: IBoard) {
  if ((board.tl.innerHTML === board.tc.innerHTML && board.tl.innerHTML !== "" && board.tc.innerHTML !== "") && (board.tc.innerHTML === board.tr.innerHTML && board.tc.innerHTML !== "" && board.tr.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.ml.innerHTML === board.mc.innerHTML && board.ml.innerHTML !== "" && board.mc.innerHTML !== "") && (board.mc.innerHTML === board.mr.innerHTML && board.mc.innerHTML !== "" && board.mr.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.bl.innerHTML === board.bc.innerHTML && board.bl.innerHTML !== "" && board.bc.innerHTML !== "") && (board.bc.innerHTML === board.br.innerHTML && board.bc.innerHTML !== "" && board.br.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  // Columns
  if ((board.tl.innerHTML === board.ml.innerHTML && board.tl.innerHTML !== "" && board.ml.innerHTML !== "") && (board.ml.innerHTML === board.bl.innerHTML && board.ml.innerHTML !== "" && board.bl.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.tc.innerHTML === board.mc.innerHTML && board.tc.innerHTML !== "" && board.mc.innerHTML !== "") && (board.mc.innerHTML === board.bc.innerHTML && board.mc.innerHTML !== "" && board.bc.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.tr.innerHTML === board.mr.innerHTML && board.tr.innerHTML !== "" && board.mr.innerHTML !== "") && (board.mr.innerHTML === board.mr.innerHTML && board.mr.innerHTML !== "" && board.br.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  // Diagonals
  if ((board.tl.innerHTML === board.mc.innerHTML && board.tl.innerHTML !== "" && board.mc.innerHTML !== "") && (board.mc.innerHTML === board.br.innerHTML && board.mc.innerHTML !== "" && board.br.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.tr.innerHTML === board.mc.innerHTML && board.tr.innerHTML !== "" && board.mc.innerHTML !== "") && (board.mc.innerHTML === board.bl.innerHTML && board.mc.innerHTML !== "" && board.bl.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  if ((board.ml.innerHTML === board.mc.innerHTML && board.ml.innerHTML !== "" && board.mc.innerHTML !== "") && (board.mc.innerHTML === board.mr.innerHTML && board.mc.innerHTML !== "" && board.mr.innerHTML !== "")) {
    console.log("game finished")
    return true;
  }
  return false;
}
// }


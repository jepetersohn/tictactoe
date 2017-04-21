$(document).ready(function() {
  handleClick();
  updateCell();
  checkWinner();
});

var handleClick = function() {
  var clickedCell;
  var i = 0;
  $("td").on("click", function(event) {
    clickedCell = $(this);
    if ($(this).closest('td').hasClass("clicked")) {
        alert("Pick a different space.")
      }
    else if (i === 0){
      updateCell(clickedCell, "playerX");
      clickedCell.addClass("clicked X");
      i++;
    } else {
      updateCell(clickedCell, "playerO");
      clickedCell.addClass("clicked O");
    i = 0;
  }
    let playerSymbol = (i==1) ? "X" : "O";
    if (checkWinner(playerSymbol)) {
      alert("PLAYER " + playerSymbol + " WINS!");
    } else if (isGameOverNoWinner())
      alert("It's a draw");
  });
};

var updateCell = function(cell, player) {
  if (player === "playerX") {
    cell.closest('td').text("X");
  } else if (player === "playerO") {
    cell.closest('td').text("O");
  }
};

var checkWinner = function(playerSymbol) {
  return checkRow(playerSymbol) ||
    checkColumn(playerSymbol) ||
    checkDiags(playerSymbol);
}

var checkDiags = function(playerSymbol) {
  return ($("td.diag1." + playerSymbol).size() == 3) ||
    ($("td.diag2." + playerSymbol).size() == 3);
}

var checkColumn = function(playerSymbol) {
  return ($("td.col1." + playerSymbol).size() == 3) ||
    ($("td.col2." + playerSymbol).size() == 3) ||
      ($("td.col3." + playerSymbol).size() == 3);
}
var checkRow = function(playerSymbol) {
    return ($("td.row1." + playerSymbol).size() == 3) ||
    ($("td.row2." + playerSymbol).size() == 3) ||
      ($("td.row3." + playerSymbol).size() == 3);
}

var isGameOverNoWinner = function() {
  return $("td.clicked").size() == 9 && !(checkWinner == false);
}

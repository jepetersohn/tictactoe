$(document).ready(function() {
  handleClick();
  updateCell();
  checkWinner();
  notifyWinner();
  getBoardState();
});

var getBoardState = function() {
  var boardState = $('*[id]').map(function() {
    return this.id;
  }).get();
  return boardState
}

var handleClick = function() {
  var clickedCell;
  var i = 0;
  var boardState = getBoardState();
  $("td").on("click", function(event) {
    clickedCell = $(this);
    if ($(this).closest('td').hasClass("clicked")) {
        alert("Pick a different space.")
      }
    else if (i === 0){
      cellId = clickedCell.attr('id');
      updateCell(clickedCell, "playerX");
      clickedCell.addClass("clicked X");
      i++;
      for (n = 0; n < boardState.length; n++) {
        if (boardState[n] == cellId) {
            boardState[n] = "X";
            clickedCell.attr('id', 'X');
          }
        }
      notifyWinner(i);
      askFlask(boardState);
      notifyWinner(i = 0);
    }
  });
};

var askFlask = function(boardState) {
      // updateCell(clickedCell, "playerO");
      // clickedCell.addClass("clicked O");
      data = boardState.join('');
      var request = $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/game?board=' + data,
        success: function(response){
          handleResponse(response);
          },
        error: function() {
            alert('Error occured');
          },
      });
      request.done(function(response){
        return(response);
      })
  }

var updateCell = function(cell, player) {
  if (player === "playerX") {
    cell.closest('td').text("X");
  } else if (player === "playerO") {
    cell.closest('td').text("O");
  }
}

var handleResponse = function(newBoardState) {
  console.log(newBoardState)
  // take each element of the newBoardState and set it as the data-id in the html
}

var resetBoard = function(){

}

var notifyWinner = function(player) {
  let playerSymbol = (player==1) ? "X" : "O";
  if (checkWinner(playerSymbol)) {
    alert("PLAYER " + playerSymbol + " WINS!");
  } else if (isGameOverNoWinner())
    alert("It's a draw");
}

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

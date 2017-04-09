$(document).ready(function() {
  handleClick();
  updateCell();
  winner();
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
        if ((clickedCell).closest("tr").find(".X").size() === 3) {
          alert("winner!")};
      i++;
    } else {
      updateCell(clickedCell, "playerO");
      clickedCell.addClass("clicked O");
    i = 0;
  }

    if (winner()) {
      alert("game over");
    }
  });
};

var updateCell = function(cell, player) {
  if (player === "playerX") {
    cell.closest('td').text("X");
  } else if (player === "playerO") {
    cell.closest('td').text("O");
  }
};

var winner = function() {
  return checkRow();
}

var checkRow = function() {
  return false;
}
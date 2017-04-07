$(document).ready(function() {
  handleClick();
});

var handleClick = function() {
  var clickedCell;
  var i = 0;
  $("td").on("click", function(event) {
    if (i === 0){
    clickedCell = $(this);
    updateCell(clickedCell, "playerX");
    i++;
  } else {
    clickedCell = $(this);
    updateCell(clickedCell, "playerO");
    i = 0;
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
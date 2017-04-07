import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Tic Tac Toe</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>,
  document.getElementById('board')
);


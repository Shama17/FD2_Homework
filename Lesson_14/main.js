var btn = document.getElementsByTagName('button');
btn[0].disabled = true;
btn[0].onclick = createBoard;

document.getElementById('x').addEventListener("keyup", checkAnotherInput);
document.getElementById('y').addEventListener("keyup", checkAnotherInput);

function checkAnotherInput() {

    if (document.getElementById('y').value && document.getElementById('x').value) {
        btn[0].disabled = false;
    }
    else btn[0].disabled = true;
}

function createBoard() {
    var x = +document.getElementById('x').value;
    var y = +document.getElementById('y').value;
    if ((isNaN(x) || isNaN(y)) || (x < 1 || x > 10) && (y < 1 || y > 10)) {
        alert('Введите число от 1 до 10');
        clearValue()
    } else {
        var board = document.getElementsByClassName('board');
        board[0].innerHTML = '';
        var tableBoard = document.createElement('table');
        var tableBoardBody = document.createElement('tbody');

        for (i = 0; i < y; i++) {
            var tr = document.createElement('tr')
            tableBoardBody.appendChild(tr)
            for (j = 0; j < x; j++) {
                var td = document.createElement('td')
                if (i % 2 !== j % 2) {
                    td.className = 'black';
                }
                tr.appendChild(td);
            }
        }
        tableBoard.appendChild(tableBoardBody);
        board[0].appendChild(tableBoard)
        tableBoard.addEventListener("click", reverseColor)
        clearValue()
    }
}

function clearValue() {
    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
    btn[0].disabled = true;
}

function reverseColor() {
    var td = document.getElementsByTagName('td')
    for (var i = 0; i < td.length; i++) {
        td[i].classList.toggle('black');
    }
}


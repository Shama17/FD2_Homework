var tableBody = document.getElementsByTagName('tbody')[0];
var addRowButton = tableBody.lastElementChild;
var inputText = document.createElement('input');
addRowButton.onclick = addRow;

function addRow() {

    var cloneRow = tableBody.firstElementChild.cloneNode(true);
    var cloneTd = cloneRow.children;
    for (var i = 0; i < cloneTd.length; i++) {
        cloneTd[i].innerText = '';
    }
    tableBody.insertAdjacentElement('afterbegin', cloneRow)
}


tableBody.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'TD' && target.id !== 'addRow') {
        if (target.getElementsByTagName('input').length === 0) {
            inputText.value = target.innerText;
            target.innerText = '';
            target.append(inputText);
            target.getElementsByTagName('input')[0].focus()
        } else {
            target.getElementsByTagName('input')[0].focus()
        }


        inputText.onblur = function () {
            target.innerText = inputText.value;
            inputText.value = '';
            inputText.remove()

        };
        inputText.onkeypress = function (event) {
            if (event.key === 'Enter') {
                target.innerText = inputText.value;
                inputText.value = '';
                inputText.remove()
            }
        }
    }
};





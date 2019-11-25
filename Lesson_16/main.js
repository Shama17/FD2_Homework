var button = document.getElementsByTagName('button')[0];
var tabs = document.getElementsByClassName('tabs')[0];
var info = document.getElementsByClassName('info')[0];
info.setAttribute('style', 'visibility: hidden');
var responseUsersList = [];

button.onclick = function () {
    if (localStorage.getItem('userData')) {
        responseUsersList = JSON.parse(localStorage.getItem('userData'));
        showUsersList(responseUsersList);
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.onload = function () {
            var statusType = +String(this.status)[0];
            if (statusType === 2) {
                responseUsersList = JSON.parse(this.response).data;
                localStorage.setItem('userData', JSON.stringify(responseUsersList));
                showUsersList(responseUsersList);
            } else {
                showError(this.status);
            }
        };
        xhr.onerror = function () {
            showError(this.status);
        };
        xhr.send();
    }
};

function showUsersList(users) {
    tabs.innerHTML = "";
    for (var i = 0; i < users.length; i++) {
        tabs.insertAdjacentHTML('beforeEnd', '<div class="tab" data-userId =' + i + ' >User' + (i + 1) + '</div>');
    }
    document.getElementsByClassName('tab')[0].classList.add('active');
    showUserInfo(0);
}

function showUserInfo(userId) {
    info.innerHTML = '';
    info.setAttribute('style', 'visibility: show');
    info.insertAdjacentHTML("beforeend", '<div class="photo"><img src="' + responseUsersList[userId]['avatar'] + '"></div>');
    info.insertAdjacentHTML('beforeend', '<div class="userInfo">' +
        '<p>First name: ' + responseUsersList[userId]['first_name'] + '</p>' +
        '<p>Last name: ' + responseUsersList[userId]['last_name'] + '</p>' +
        '<p>email: ' + responseUsersList[userId]['email'] + '</p></div>')
}

function showError(status) {
    info.setAttribute('style', 'visibility: show');
    info.insertAdjacentHTML('beforeend', '<div class="userInfo"> Ошибка загрузки данных (Error:' + status + ')</div>')
}

tabs.onclick = function (event) {
    document.querySelectorAll('.active').forEach(function (tab) {
        tab.classList.remove('active')
    });
    var target = event.target;
    target.classList.add('active');
    showUserInfo(target.getAttribute('data-userId'));
};

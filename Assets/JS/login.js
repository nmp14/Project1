$('small').click(function (event) {
    event.preventDefault()
    $('#register-form').removeClass('hidden');
    $('#login-form').addClass('hidden');
});

$('#register').click(function (event) {
    event.preventDefault()
    var userInput = $('#name').val();
    setLocalStorage('userName', userInput);
    var userPassword = $('#createPass').val();
    setLocalStorage('password', userPassword);
    $('#register-form').addClass('hidden');
    $('#login-form').removeClass('hidden');

});

$('#login').click(function (event) {
    event.preventDefault()
    var userName = $('#username').val();
    var passWord = $('#password').val();
    var storedUserName = getLocalStorage('userName');
    var storedPassWord = getLocalStorage('password');
    if (storedUserName === userName && storedPassWord === passWord) {
        window.location.href = 'profiles.html';

    } else {
        alert('wrong password');
    }

})

function setLocalStorage(k, v) {
    localStorage.setItem(k, v);
}

function getLocalStorage(k) {
    return localStorage.getItem(k);
};
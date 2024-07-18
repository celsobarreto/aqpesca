document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === 'admin') {    
        window.location.href = 'PGTO/AreaDeUser.html';
    } else {
        errorMessage.textContent = 'Senha ou Login Inválido';
    }
});

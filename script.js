
function logout(){
    window.location.href = 'login.html';
};

function teleportBook(){
    window.location.href = 'books.html';
};


document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username && !password){
        alert('Please enter both a username and password');
    } else{
        window.location.href = 'index.html';
    }
});
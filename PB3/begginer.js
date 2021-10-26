if (localStorage.getItem('moduleUnlocked') != 'unlocked') {
    let answer = prompt('Resposta:');
    if (!answer == 'death' || answer == null) {
        if(history.length != 0) {
        history.back()
        }
        else {
        location.assign('http://127.0.0.1:5500/index.html');
        }
    }
    else {
        localStorage.setItem('moduleUnlocked', 'unlocked');
    }
}
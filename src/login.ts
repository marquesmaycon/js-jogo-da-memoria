const input = document.querySelector('.login_input') as HTMLInputElement;
const button = document.querySelector('.login_button') as HTMLButtonElement;
const form = document.querySelector('.login_form') as HTMLFormElement;

function validateInput(event) {
    if (event.target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
};

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location.href = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
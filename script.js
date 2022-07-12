const pass1 = document.getElementById('pass');
const pass2 = document.getElementById('pass2')
const passmsg = document.getElementById('passmsg');
const incorrect = document.querySelectorAll('.pass + .incorrect')
const correct = document.querySelectorAll('.pass ~ .correct')

correct.forEach(el => el.classList.add('hide'));

pass1.addEventListener('input', handler);
pass2.addEventListener('input', handler);

function handler (e) {
    pass1validity = pass1.validity.valid
    pass2Validity = pass2.validity.valid

    if (pass1.value !== "" && pass1.value === pass2.value &&
        pass1validity && pass2Validity
    ) {
        passmsg.classList.add('hide');
        incorrect.forEach(el => el.classList.add('hide'));
        correct.forEach(el => el.classList.remove('hide'));

    } else {
        passmsg.classList.remove('hide')
        incorrect.forEach(el => el.classList.remove('hide'));
        correct.forEach(el => el.classList.add('hide'));
    }
}
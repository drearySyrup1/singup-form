const pass1 = document.getElementById('pass');
const pass2 = document.getElementById('pass2')
const passmsg = document.getElementById('passmsg');
const incorrect = document.querySelectorAll('.pass + .incorrect')
const correct = document.querySelectorAll('.pass ~ .correct')


const match = document.getElementById('match');
const lengthmsg = document.getElementById('length');
const upperlower = document.getElementById('upperlower');
const numsym = document.getElementById('numsym');


correct.forEach(el => el.classList.add('hide'));

pass1.addEventListener('input', handler);
pass2.addEventListener('input', handler);


function validator(msg,...args) {
    let isTrue = true;
    args.forEach(arg => {
        if (!arg) isTrue = false;
    })

    const icon = document.querySelector(`#${msg.id} > i`);


    if (isTrue) {
        icon.classList.remove('hide')
        msg.classList.add('green');
    } else {
        icon.classList.add('hide')
        msg.classList.remove('green');
    }
}

function handler (e) {

    const num = /(?=.*[0-9])/g.test(pass1.value);
    const symb = /(?=.*[@!#$%&()*+.])/g.test(pass1.value);
    const lower = /(?=.*[a-z])/g.test(pass1.value);
    const upper = /(?=.*[A-Z])/g.test(pass1.value);
    const lenght = /.{8,}/g.test(pass1.value);

    pass1validity = pass1.validity.valid
    pass2Validity = pass2.validity.valid

    // if (pass1.value !== "" && pass1.value === pass2.value) {
    //     // passmsg.classList.add('hide');

    // } else {
    //     passmsg.classList.remove('hide')
    // }

    validator(numsym, num, symb)
    validator(lengthmsg, lenght)
    validator(upperlower, upper, lower)

    if (pass1validity && pass2Validity && 
        pass1.value !== "" && pass1.value === pass2.value    
    ) {
        match.classList.add('hide');
        incorrect.forEach(el => el.classList.add('hide'));
        correct.forEach(el => el.classList.remove('hide'));
    } else {
        match.classList.remove('hide');
        incorrect.forEach(el => el.classList.remove('hide'));
        correct.forEach(el => el.classList.add('hide'));
    }
}
// import OPTION_TYPES from '../constants';

const form = document.getElementById('options__form');
const submitButton = document.getElementById('submit__button');
const passwordLength = document.getElementById('length__input');
const password = document.getElementById('pass__container');

window.onload = () => {    
    const OPTION_TYPES = {
        lower_case: 'abcdefghijklmnopqrstuvwxyz',
        upper_case: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        special_symbols: '!$%^&*()-=+[]{};#:@~,./<>?'
    };
    
    Object.keys(OPTION_TYPES).map(option => form.appendChild(view.passwordOptions(option)));
};

submitButton.addEventListener('click', () => {
    const hasPassword = password.contains(document.getElementById('p__password'));    
    if (hasPassword) document.getElementById('p__password').remove();

    const { value } = passwordLength;
    const newPassword = logic.generatePassword(value);
    if (newPassword) password.appendChild(view.password(newPassword));
});

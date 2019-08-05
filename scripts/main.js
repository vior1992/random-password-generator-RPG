// import OPTION_TYPES from '../constants';

const form = document.getElementById('options__form');
const passwordLength = document.getElementById('length__input');
const password = document.getElementById('pass__container');
document.addEventListener('click', checkClick);

window.onload = () => {    
    const OPTION_TYPES = {
        lower_case: 'abcdefghijklmnopqrstuvwxyz',
        upper_case: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        special_symbols: '!$%^&*()-=+[]{};#:@~,./<>?'
    };
    
    Object.keys(OPTION_TYPES).map(option => form.appendChild(view.passwordOptions(option)));
};

function checkClick({ target: { id } }) { 
    switch (id) {
        case 'submit__button':
            const hasPassword = password.contains(document.getElementById('p__password'));    
            if (hasPassword) document.getElementById('p__password').remove();

            const { value } = passwordLength;
            const newPassword = logic.generatePassword(value);
            if (newPassword) password.appendChild(view.password(newPassword));
            break;
        case 'button__copy':
            view.copyPasswordOnClipboard();
            break;
        default: null;
            break;
    };
};

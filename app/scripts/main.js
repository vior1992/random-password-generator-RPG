import { OPTION_TYPES } from '../constants';
import Password from './logic';
import view from './view';
import '../styles/index.css';

const password = new Password();
const form = document.getElementById('options__form');
const passwordLength = document.getElementById('length__input');

document.addEventListener('click', checkClick);
document.addEventListener('DOMContentLoaded', function (event) {
  Object.keys(OPTION_TYPES).map(option => form.appendChild(view.passwordOptions(option)))
});

function checkClick({ target: { id } }) {
  switch (id) {
    case 'submit__button':
      const mainSection = document.getElementById('main__section');
      const hasPassword = document.getElementById('p__password');
      const hasError = document.getElementById('error');

      if (hasPassword) document.getElementById('pass__container').remove();
      if (hasError) document.getElementById('error').remove();

      const { value } = passwordLength;
      const newPassword = password.generatePassword(value);
      if (newPassword) mainSection.appendChild(view.password(newPassword));
      break;
    case 'button__copy':
      view.copyPasswordOnClipboard();
      break;
    default: null;
      break;
  };
};

import view from './view';
import {
  LENGTH_ERROR,
  LENGTH_ERROR_NAN,
  MAX_LENGTH,
  MIN_LENGTH,
  OPTION_ERROR,
  OPTION_TYPES
} from '../constants';

export default class Password {
  generatePassword(passLength) {
    const isInvalidLength = this.passwordLengthValidator(passLength);

    if (isInvalidLength) {
        view.error(isInvalidLength);
        return null;
    }

    const checkedOptions = [];
    let newPassword = '';

    Object.keys(OPTION_TYPES).map(option => {
      const isChecked = document.getElementById(`checkbox__${option}`).checked;
      if (isChecked) checkedOptions.push(option);
    });

    if (!checkedOptions.length) return view.error(OPTION_ERROR);

    for (let i = 1; i <= passLength; i++) {
      const randomOptionIndex = Math.floor(Math.random() * checkedOptions.length);
      const characters = OPTION_TYPES[checkedOptions[randomOptionIndex]];
      const number = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(number);
    };

    const isValid = this.passwordValidator(newPassword, checkedOptions);

    if (!isValid) return this.generatePassword(passLength);

    return newPassword;
  };

  passwordLengthValidator(passLength) {
    if (isNaN(passLength)) return LENGTH_ERROR_NAN;
    if (passLength < MIN_LENGTH || passLength > MAX_LENGTH || !passLength.trim().length) return LENGTH_ERROR(passLength);
    return false;
  };

  passwordValidator(newPassword, checkedOptions) {
    let regex = '';

    checkedOptions.forEach(option => {
      switch (option) {
        case 'lower_case':
          regex += '(?=.*[a-z])';
          break;
        case 'upper_case':
          regex += '(?=.*[A-Z])';
          break;
        case 'numbers':
          regex += '(?=.*[0-9])';
          break;
        default:
          regex += '(?=.*[!@#\$%\^&\*])';
          break;
      }
    });

    regex += '.{8,32}$';
    const strongRegex = new RegExp(regex);
    return strongRegex.test(newPassword);
  };
};

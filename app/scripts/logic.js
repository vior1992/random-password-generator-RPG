// const OPTION_TYPES = require('../constants');
class Password {
  generatePassword(passLength) {
    const isInvalidLength = this.passwordLengthValidator(passLength);

    if (isInvalidLength) {
        view.error(isInvalidLength);
        return null;
    }

    const OPTION_TYPES = {
      lower_case: 'abcdefghijklmnopqrstuvwxyz',
      upper_case: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      special_symbols: '!$%^&*()-=+[]{};#:@~,./>?'
    };

    const checkedOptions = [];
    let newPassword = '';

    Object.keys(OPTION_TYPES).map(option => {
      const isChecked = document.getElementById(`checkbox__${option}`).checked;
      if (isChecked) checkedOptions.push(option);
    });

    if (!checkedOptions.length) return view.error('Must be at least one option chosen');

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
    if (isNaN(passLength)) return 'Lenght is not a number';
    if (passLength < 8 || passLength > 32 || !passLength.trim().length) {
      return `${!passLength.trim().length ? 'Empty' : 'Incorrect'} length, please enter a length between 8 and 32 characters`;
    }
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
        case 'special_symbols':
          regex += '(?=.*[!@#\$%\^&\*])';
          break;
        default: null;
          break;
      }
    });

    regex += '.{8,12}$';
    const strongRegex = new RegExp(regex);
    return strongRegex.test(newPassword);
  };
};

// module.exports = Password;

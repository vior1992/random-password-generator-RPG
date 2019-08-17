import { COPIED_PASS_MESSAGE } from '../constants';

const view = {
  passwordOptions(optionType) {
    const option = document.createElement('div');
    option.id = `option__${optionType}`;
    option.className = 'options';

    const checkbox = document.createElement('input');
    checkbox.id = `checkbox__${optionType}`;
    checkbox.className = 'options__checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = true;

    const optionName = this.capitalize(optionType).replace(/_/g, ' ');
    const optionLabel = document.createElement('label');
    optionLabel.htmlFor = `checkbox__${optionType}`;
    optionLabel.innerHTML = optionName;

    option.appendChild(optionLabel);
    option.appendChild(checkbox);
    return option;
  },

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  password(password) {
    const passwordContainer = document.createElement('div');
    passwordContainer.id = 'pass__container';
    const generatedPassword = document.createElement('p');
    generatedPassword.id ='p__password';
    generatedPassword.innerHTML = password;

    const copyPasswordButton = document.createElement('i');
    copyPasswordButton.id ='button__copy';
    copyPasswordButton.className = 'fa fa-copy'
    copyPasswordButton.type = 'button';

    passwordContainer.appendChild(generatedPassword);
    passwordContainer.appendChild(copyPasswordButton);

    return passwordContainer;
  },

  copyPasswordOnClipboard() {
    const copiedPass = document.getElementById('p__password');
    const textArea = document.createElement('textarea');
    textArea.value = copiedPass.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
    this.prompt('success', COPIED_PASS_MESSAGE, false);
  },

  prompt(type, title, showConfirmButton) {
    Swal.fire({
      position: 'center',
      type,
      title,
      showConfirmButton,
      timer: showConfirmButton ? false : 1500
    })
  },

  error(errorMessage) {
    this.prompt('error', errorMessage, true);
  }
};

export default view;

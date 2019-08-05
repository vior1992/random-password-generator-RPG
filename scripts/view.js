const view = {
    passwordOptions(optionType) {
        const option = document.createElement('div');
        option.id = `option__${optionType}`;

        const checkbox = document.createElement('input');
        checkbox.id = `checkbox__${optionType}`;
        checkbox.type = "checkbox";
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
        const generatedPassword = document.createElement('p');
        generatedPassword.id ='p__password';
        generatedPassword.innerHTML = password;

        const copyPasswordButton = document.createElement('button');
        copyPasswordButton.id ='button__copy';
        copyPasswordButton.type = 'button';

        generatedPassword.appendChild(copyPasswordButton);
        
        return generatedPassword;
    },

    copyPasswordOnClipboard() {        
        const copiedPass = document.getElementById("p__password");
        const textArea = document.createElement("textarea");
        textArea.value = copiedPass.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        this.prompt('success', 'Password copied to the clipboard', false);
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


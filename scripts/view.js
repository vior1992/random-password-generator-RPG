const view = {
    passwordOptions(optionType) {
        const option = document.createElement('div');
        option.id = `option__${optionType}`;

        const checkbox = document.createElement('input');
        checkbox.id = `checkbox__${optionType}`;
        checkbox.type = "checkbox";
        checkbox.checked = true;

        const optionName = this.capitalize(optionType).replace(/_/g, ' ');
        const typeName = document.createTextNode(optionName);
     
        option.appendChild(typeName);
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
    }
};


const logic = {
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
            special_symbols: '!$%^&*()-=+[]{};#:@~,./<>?'
        };

        const checkedOptions = [];
        let newPassword = '';

        Object.keys(OPTION_TYPES).map(option => {
            const isChecked = document.getElementById(`checkbox__${option}`).checked;                
            if (isChecked) checkedOptions.push(option);                         
        });

        if (!checkedOptions.length) return view.error('Must be minimum 1 option checked');

        for (let i = 1; i <= passLength; i++) {            
            const randoOptionIndex = Math.floor(Math.random() * checkedOptions.length);
            const characters = OPTION_TYPES[checkedOptions[randoOptionIndex]];
            const number = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(number);   
        }        
        return newPassword;
    },

    passwordLengthValidator(passLength) {
        if (passLength < 8 || passLength > 32) return 'Incorrect length, enter a length betheen 8 and 32 characters';
        if (!passLength.trim().length) return "Length is empty or blank";
        if (isNaN(passLength)) return 'Lenght is not a number';
        return false;
    }
};
const logic = {
    generatePassword(passLength) {
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

        for (let i = 1; i <= passLength; i++) {            
            const randoOptionIndex = Math.floor(Math.random() * checkedOptions.length);
            const characters = OPTION_TYPES[checkedOptions[randoOptionIndex]];
            const number = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(number);   
        }        
        return newPassword;
    }
};
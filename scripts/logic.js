const logic = {
    generatePassword() {
        const OPTION_TYPES = {
            lower_case: 'abcdefghijklmnopqrstuvwxyz',
            upper_case: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            special_symbols: '!$%^&*()-=+[]{};#:@~,./<>?'
        };

        const checkedOptions = [];
        let test = ''

        Object.keys(OPTION_TYPES).map(option => {
            const isChecked = document.getElementById(`checkbox__${option}`).checked;                
            if (isChecked) checkedOptions.push(option);                         
        });

        for (let i = 0; i <= 12; i++) {
            const characters = OPTION_TYPES[checkedOptions[Math.floor(Math.random() * checkedOptions.length)]]
            const number = Math.floor(Math.random() * characters.length);
            test += characters.charAt(number);   
        }        
        return test;
    }
};
export function passwordLengthValidator(passLength) {
    if (passLength < 8 || passLength > 32) return 'Incorrect length, enter a length betheen 8 and 32 characters';
    if (isNaN(passLength)) return 'Lenght is not a number';
    return false;
};
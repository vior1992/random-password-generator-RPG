export const passwordLengthValidator = (passLength) => {
  if (isNaN(passLength)) return 'Lenght is not a number';
  if (!passLength.trim().length) return 'Length is empty or blank';
  if (passLength < 8 || passLength > 32) return 'Incorrect length, enter a length betheen 8 and 32 characters';
  return false;
}

const OPTION_TYPES = {
  lower_case: 'abcdefghijklmnopqrstuvwxyz',
  upper_case: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special_symbols: '!$%^&*()-=+[]{};#:@~,./>?'
};

const OPTION_ERROR = 'Must be at least one option chosen';

const LENGTH_ERROR_NAN = 'Lenght is not a number';

const LENGTH_ERROR = (incorrect = true) => {
  return `${incorrect ? 'Incorrect' : 'Empty'} length, please enter a length between 8 and 32 characters`;
}

const MIN_LENGTH = 8;

const MAX_LENGTH = 32;

const COPIED_PASS_MESSAGE = 'Password copied to the clipboard';

export {
  COPIED_PASS_MESSAGE,
  LENGTH_ERROR,
  LENGTH_ERROR_NAN,
  MAX_LENGTH,
  MIN_LENGTH,
  OPTION_ERROR,
  OPTION_TYPES
};

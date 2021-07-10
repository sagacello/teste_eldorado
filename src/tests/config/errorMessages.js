const message = {
  nameRequired: { message: '"name" is required' },
  colorRequired: { message: '"color" is required' },
  invalidName: {
    message: '"name" length must be less than or equal to 128 characters long',
  },
  nameIsString: { message: '"name" must be a string' },
  colorIsString: { message: '"color" must be a string' },

  invalidColor: {
    message: '"color" length must be less than or equal to 16 characters long',
  },
  emptyCategoryName: { message: '"name" is not allowed to be empty' },
  invalidPartNumber: {
    message: '"name" length must be less than or equal to 16 characters long',
  },
  emptyDevicePartNumber: { message: '"partNumber" must be a number' },
  emptyDeviceColor: { message: '"color" is not allowed to be empty' },
  CannotCreateUncategorizedDevice: { message: 'Category does not exist' },
  partNumberMostBeIntegerPositive: {
    message: '"partNumber" must be greater than or equal to 1',
  },
  invalidNamePartNumber: { message: '"partNumber" is required' },
};

module.exports = message;

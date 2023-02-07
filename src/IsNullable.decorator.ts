import { ValidateIf, ValidationOptions } from 'class-validator';

const IsNullable = (validationOptions?: ValidationOptions) => {
  return ValidateIf((_object, value) => {
    console.log(value);
    return value !== null;
  }, validationOptions);
};

export default IsNullable;

import { ValidateIf, ValidationOptions } from 'class-validator';

const IsNullable = (validationOptions?: ValidationOptions) => {
	return ValidateIf((_object, value) => value !== null, validationOptions);
};

export default IsNullable;

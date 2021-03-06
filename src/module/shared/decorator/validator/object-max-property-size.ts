import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function ObjectMaxPropertySize(
  max: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      propertyName,
      name: 'objectMaxPropertySize',
      target: object.constructor,
      constraints: [max],
      options: validationOptions,
      validator: {
        defaultMessage() {
          const eachPrefix = validationOptions.each ? 'each value in ' : '';
          const pluralSuffix = max >= 1 ? 'y' : 'ies';

          return (
            eachPrefix +
            '$property must contain not more than $constraint1 propert' +
            pluralSuffix
          );
        },
        validate(value: Record<string, any>, args: ValidationArguments) {
          const [maxPropertySize] = args.constraints;

          return Object.keys(value).length <= maxPropertySize;
        },
      },
    });
  };
}

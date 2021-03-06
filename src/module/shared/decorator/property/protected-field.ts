import { applyDecorators } from '@nestjs/common';
import { UserRole } from 'src/module/user/model/enum/user-role';
import { Extensions, Field, FieldOptions } from '@nestjs/graphql';
import { roleCheck } from 'src/module/shared/middleware/role-check';
import { ReturnTypeFunc } from '@nestjs/graphql/dist/interfaces/return-type-func.interface';

export const ProtectedField = (
  role: UserRole,
  returnTypeFunction?: ReturnTypeFunc,
  options?: FieldOptions,
): PropertyDecorator => {
  if ('function' === typeof returnTypeFunction) {
    return applyDecorators(
      Field(returnTypeFunction, { middleware: [roleCheck], ...options }),
      Extensions({ role }),
    );
  }
  return applyDecorators(
    Field({ middleware: [roleCheck], ...options }),
    Extensions({ role }),
  );
};

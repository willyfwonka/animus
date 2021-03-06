import { UpdateModel } from 'src/module/shared/input/update-model';
import { InputType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { Trim } from 'src/module/shared/decorator/transform/trim';
import { UserRole } from 'src/module/user/model/enum/user-role';
import { IsUsername } from 'src/module/shared/decorator/validator/is-username';
import { OptionalField } from '../../shared/decorator/property/optional-field';

@InputType()
export class UpdateUser extends UpdateModel {
  @OptionalField({ explicitNullCheck: true })
  @IsUsername()
  @Trim()
  username: string;

  @OptionalField(() => UserRole, { explicitNullCheck: true })
  @IsEnum(UserRole)
  role: UserRole;
}

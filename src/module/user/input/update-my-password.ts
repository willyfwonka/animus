import { Field, InputType } from '@nestjs/graphql';
import { IsPassword } from 'src/module/shared/decorator/validator/is-password';
import { Match } from 'src/module/shared/decorator/validator/match';

@InputType()
export class UpdateMyPassword {
  @Field()
  @IsPassword()
  password: string;

  @Field()
  @IsPassword()
  newPassword: string;

  @Field()
  @IsPassword()
  @Match('newPassword')
  confirmNewPassword: string;
}

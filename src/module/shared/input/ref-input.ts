import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class RefInput {
  @Field(() => ID)
  id: number;
}

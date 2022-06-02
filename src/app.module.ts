import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/module/misc/app-config/app-config.module';
import { AppTypeormModule } from 'src/module/misc/app-typeorm/app-typeorm.module';
import { AppGraphqlModule } from 'src/module/misc/app-graphql/app-graphql.module';
import { AuthModule } from 'src/module/auth/auth.module';
import { AppThrottleModule } from 'src/module/misc/app-throttle/app-throttle.module';
import { UserModule } from './module/user/user.module';
import { TrueBlueModule } from './module/true-blue/true-blue.module';
import { PersonModule } from './module/person/person.module';
import { PhysicalAppearanceModule } from './module/physical-appearance/physical-appearance.module';
import { IdentityModule } from './module/identity/identity.module';
import { AddressModule } from './module/address/address.module';
import { NoteModule } from './module/note/note.module';
import { ContactModule } from './module/contact/contact.module';
import { LastKnownPlaceModule } from './module/last-known-place/last-known-place.module';
import { SocialProfileModule } from './module/social-profile/social-profile.module';

// TODO: Add proper missing authorization & authentication to entity's resolver methods.

// TODO: Add additional @IsBoolean(), @IsEnum(), @IsInt() and other validations to create/update fields.
// TODO: There may be string | number fields that is required when creating but it is optional on updating, but we want to prevent client to send "null" explicitly. Check for those fields in codebase
// TODO: Check if there is any non-nullable field but nullable on update operations. Look into update-last-known-place.ts for more details.
//  --> Test each mutation and query
// TODO: Add
//  @ValidateIf((target: ListContact) => {
//     return null === target.verified;
//   })
//   @IsBoolean()
//   to boolean upsert fields.
// TODO: Add
//    @Field(() => AddressType, { nullable: true })
//   @IsEnum(AddressType)
//
//    to enum upsert fields.

// TODO: Introduce setting optional object property with spread operator to list-*.ts classes ---> ...(condition && { key: "value" }),.
//  --> Replace field "query" with entity's searchable text fields on List*.ts listing classes
// TODO: Set @Length() limit to query fields (like content property in contact class, not the word or property "query") in list-*.ts classes.

// TODO: Test the whole application bottom up after completing the todos.

@Module({
  imports: [
    AuthModule,
    AppConfigModule,
    AppTypeormModule,
    AppGraphqlModule,
    AppThrottleModule,
    TrueBlueModule,
    UserModule,
    PersonModule,
    PhysicalAppearanceModule,
    IdentityModule,
    AddressModule,
    NoteModule,
    ContactModule,
    LastKnownPlaceModule,
    SocialProfileModule,
  ],
})
export class AppModule {}

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

// TODO: Specify the lengths of text based fields.
// TODO: Refactor @*Length & co-related decorators after specifying text length.
// TODO: Refactor @ResolveField decorated methods to return filter-*.find();.
// TODO: Add proper missing authorization & authentication to entity's resolver methods.
// TODO: Introduce setting optional object property with spread operator to list-*.ts classes ---> ...(condition && { key: "value" }),.
// TODO: Remove "person" "@Field()" from models as is it unnecessary.
// TODO: Add "with" relation to LastKnownPlace.
// TODO: Check for fields in create models. Look into create-last-known-place.ts file for more details.
// TODO: Check if there is unnecessary @ResolveField() decorators on both Person and its child entities. Look into last-known-place.resolver.ts for more details.
// TODO: Check if there is any non-nullable field but nullable on update operations. Look into update-last-known-place.ts for more details.
// TODO: Try to turn `addAcquaintance` and `removeAcquaintance` into Person's "actions: {}" or "actions: []" rather than standalone mutations. Do the same for LastKnownPlace

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
  ],
})
export class AppModule {}

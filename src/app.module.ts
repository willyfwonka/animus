import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/module/misc/app-config/app-config.module';
import { AppTypeormModule } from 'src/module/misc/app-typeorm/app-typeorm.module';
import { AppGraphqlModule } from 'src/module/misc/app-graphql/app-graphql.module';
import { AuthModule } from 'src/module/auth/auth.module';
import { AppThrottleModule } from 'src/module/misc/app-throttle/app-throttle.module';
import { UserModule } from './module/user/user.module';
import { TrueBlueModule } from './module/true-blue/true-blue.module';
import { PersonModule } from './module/person/person.module';

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
  ],
})
export class AppModule {}

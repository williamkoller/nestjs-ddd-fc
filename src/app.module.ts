import { Module } from '@nestjs/common';
import { IocModule } from './infrastructure/ioc/ioc.module';
import { MongodbModule } from './infrastructure/database/mongodb/mongodb.module';
import { ConfigureModule } from './infrastructure/configure/configure.module';
@Module({
  imports: [IocModule, MongodbModule, ConfigureModule],
})
export class AppModule {}

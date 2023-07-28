import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://alexandrercosta01:7Rqgp1x5fQcxp8D9@cluster1.6ybkv9x.mongodb.net/`),   
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TransactionpModule } from './modules/transaction/transaction.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TransactionpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

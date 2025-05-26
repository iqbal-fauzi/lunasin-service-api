import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionScheme } from '../../schemes/transaction';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionScheme },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionpModule {}

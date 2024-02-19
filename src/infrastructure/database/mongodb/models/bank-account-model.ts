import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({
  collection: 'bank-accounts',
  timestamps: true,
})
export class BankAccountModel {
  @Prop({
    type: String,
    default: () => randomUUID(),
  })
  _id!: string;

  @Prop({
    type: Number,
    default: 0,
  })
  balance: number;

  @Prop({
    type: String,
    default: '123',
  })
  accountNumber: string;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccountModel);

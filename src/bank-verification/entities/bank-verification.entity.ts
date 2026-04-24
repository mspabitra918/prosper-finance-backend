import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'bank-verification', timestamps: true })
export class BankVerification extends Model<BankVerification> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare routingNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare accountNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare accountType: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare bankName: string;
}

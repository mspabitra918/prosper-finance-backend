import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'messages', timestamps: true })
export class Message extends Model<Message> {
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
  declare full_name: string;

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
  declare subject: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare message: string;
}

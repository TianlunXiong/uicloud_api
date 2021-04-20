import { DataTypes, Model, Sequelize } from 'sequelize';
import WidgetModel from '../../../interface/service/db/model/IWidget';
import { v4 as uuid } from 'uuid';
export default class Widget
  extends Model<WidgetModel, Pick<WidgetModel, 'name'>>
  implements WidgetModel
{
  static HasInited = false;
  
  public id!: string;
  public widget_id!: string;
  public name!: string;
  public type!: string;
  public current_commit_id!: string;
  public status!: string;
  public creator!: string;
  public create_time!: number;
  public update_time!: number;
}
export function init(sequelize: Sequelize) {
  if (!Widget.HasInited) {
    Widget.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
        },
        widget_id: {
          type: DataTypes.STRING(36),
          unique: true,
          allowNull: false,
          defaultValue: () => uuid(),
        },
        type: {
          type: DataTypes.STRING(32),
          allowNull: false,
          defaultValue: '0'
        },
        current_commit_id: {
          type: DataTypes.STRING(36),
          allowNull: true,
        },
        status: {
          type: DataTypes.STRING(32),
          allowNull: false,
          defaultValue: 0,
        },
        creator: {
          type: DataTypes.STRING(32),
          allowNull: false,
          defaultValue: 'test'
        },
      },
      {
        sequelize,
        tableName: 'widget',
      },
    );
    Widget.HasInited = true;
  }
}
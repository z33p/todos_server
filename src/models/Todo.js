  
const { Model, DataTypes } = require("sequelize");

class Todo extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        is_done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
      },
      { sequelize }
    );
  }
}

module.exports = Todo;
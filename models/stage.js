'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({ Event, Stage_Event, Set_Times }) {
        // events
        Stage.belongsToMany(Event, {
          foreignKey: "stage_id",
          as: "events",
          through: Stage_Event
        })
        // set times
        Stage.hasMany(Set_Times, {
          foreignKey: "stage_id",
          as: "set_times"
        })
      }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'Stages',
    timestamps: false,
  });
  return Stage;
};
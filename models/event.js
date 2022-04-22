'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({ Stage, Stage_Event, Meet_Greets, Set_Times }) {
          // stages
          Event.belongsToMany(Stage, {
              foreignKey: "event_id",
              as: "stages", 
              through: Stage_Event
          })
          Event.hasMany(Set_Times,{
            foreignKey: "event_id",
            as: "set_times"
          })
          Event.hasMany(Meet_Greets,{
            foreignKey:"event_id",
            as: ""
          })
      }
  }
  Event.init({
    event_id: {
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
    modelName: 'Event',
    tableName: 'Events',
    timestamps: false,
  });
  return Event;
};
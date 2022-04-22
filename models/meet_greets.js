'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({ Band, Event }) {
        // band
        Meet_Greets.belongsTo(Band, {
          foreignKey: "band_id",
          as: "band"
        })
        // event
        Meet_Greets.belongsTo(Event, {
          foreignKey: "event_id",
          as: "event"
        })
      }
  }
  Meet_Greets.init({
    meet_greet_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
  },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Meet_Greets',
    tableName: 'Meet_Greets',
    timestamps: false
  });
  return Meet_Greets;
};
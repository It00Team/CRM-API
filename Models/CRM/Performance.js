const Sequelize = require("sequelize");
const db = require("../../Utils/database.js");
const User = require("../Users/user.js");

const Performance = db.define(
  "Performance",
  {
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    hours_worked: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Performance.belongsTo(User, { foreignKey: "user_id" });
// Performance.sync({force:true})
module.exports = Performance;

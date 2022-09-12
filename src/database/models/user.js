module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users'
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: "user_id", as: "orders" });
    User.hasMany(models.Sale, { foreignKey: "seller_id", as: "sales" });
  };
  return User;
};

module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define(
    'Devices',
    {
      color: DataTypes.STRING(16),
      partNumber: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  Devices.associate = (models) => {
    Devices.belongsTo(models.Categories, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Devices;
};

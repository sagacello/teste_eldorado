module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false }
  );

  Categories.associate = (models) => {
    Categories.hasMany(models.Devices, {
      foreignKey: 'categoryId',
      as: 'devices',
    });
  };

  return Categories;
};

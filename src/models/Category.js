/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const CategorySchema = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
  );

  return CategoryModel;
};

module.exports = CategorySchema;

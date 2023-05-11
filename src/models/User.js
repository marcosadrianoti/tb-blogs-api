/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  // UserModel.associate = (models) => {
  //   UserModel.hasMany(models.blog_posts, {
  //     as: 'blog_posts',
  //     foreignKey: 'userId',
  //   });
  // };

  return UserModel;
};

module.exports = UserSchema;

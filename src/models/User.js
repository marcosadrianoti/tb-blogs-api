/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
      id: DataTypes.INTEGER,
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

  UserModel.associate = (models) => {
    UserModel.hasMany(models.Blog_posts, {
      as: 'blog_posts',
      foreignKey: 'userId',
    });
  };

  return UserModel;
};

module.exports = UserSchema;

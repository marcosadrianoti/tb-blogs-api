/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    },
  );

  PostCategoryModel.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategoryModel;
};

module.exports = PostCategorySchema;

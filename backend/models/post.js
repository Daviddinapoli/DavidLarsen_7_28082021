module.exports = (sequelize, DataTypes) => {
  
    const Post = sequelize.define(
      "Post", 
      {
        
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        title: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        file: { type: DataTypes.TEXT, allowNull: true },
      },
      {}
    );
  
    
    Post.associate = function (models) {
      
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        as: "comments",
        onDelete: "cascade",
      });
  
      
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        as: "author",
        onDelete: "cascade",
      });
    };
    return Post;
  };
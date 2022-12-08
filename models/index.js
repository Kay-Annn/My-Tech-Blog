// import models
const Post = require('./Post');
const User = require('./User');
const Comments = require('./Comments');

// Posts belongsTo User
Post.belongsTo(User, {
  foreignKey:'user_id'
})

// User have many Posts
User.hasMany(Post,{
  foreignKey:'user_id',
// onDelete: 'CASCADE',
});

// Comment belongsTo User
Comments.belongsTo(User,{
  foreignKey:'user_id',
})

// User have many Comments
User.hasMany(Comments,{
  foreignKey:'user_id',
// onDelete: 'CASCADE',
});

// Comment belongTo Post
Comments.belongsTo(Post,{
  foreignKey: 'post_id'
});

// Post hasMany Products (through ProductTag)
Post.hasMany(Comments,{ 
  foreignKey:'post_id',
// onDelete: 'CASCADE',
});

module.exports = {
  Post,
  User,
  Comments,
};

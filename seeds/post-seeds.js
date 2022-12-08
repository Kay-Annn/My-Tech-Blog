
const { Post } = require('../models');

const postData = [
  {
    post_name: 'HTML',
    post_description: 'A programming language that is used to display information to users. HTML stands for Hyper Text Markup Language.',
    user_id:2
  },
  {
    post_name: 'JavaScript',
    post_description: 'A programming language that is used to write logics.',
    user_id:1
  },
  {
    post_name: 'CSS',
    post_description: 'A programming language that stands for cascading style sheet.',
    user_id:2
  },
  {
    post_name: 'Node.js',
    post_description: 'This is filler text, will update soon.',
    user_id:1
  },
  {
    post_name: 'MySql',
    post_description: 'This is filler text, will update soon.',
    user_id:1
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;


const { Post } = require('../models');

const postData = [
  {
    title: 'HTML',
    content: 'A programming language that is used to display information to users. HTML stands for Hyper Text Markup Language.',
    user_id:2
  },
  {
    title: 'JavaScript',
    content: 'A programming language that is used to write logics.',
    user_id:1
  },
  {
    title: 'CSS',
    content: 'A programming language that stands for cascading style sheet.',
    user_id:2
  },
  {
    title: 'Node.js',
    content: 'This is filler text, will update soon.',
    user_id:1
  },
  {
    title: 'MySql',
    content: 'This is filler text, will update soon.',
    user_id:1
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

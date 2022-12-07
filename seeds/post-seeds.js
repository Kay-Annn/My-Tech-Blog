
const { Post } = require('../models');

const postData = [
  {
    post_name: 'HTML',
    description: 'A programming language that is used to display information to users. HTML stands for Hyper Text Markup Language.',
    author_name:'Kay'
  },
  {
    post_name: 'JavaScript',
    description: 'A programming language that is used to write logics.',
    author_name:'Kay'
  },
  {
    post_name: 'CSS',
    description: 'A programming language that stands for cascading style sheet.',
    author_name:'Quen'
  },
  {
    post_name: 'Node.js',
    description: 'This is filler text, will update soon.',
    author_name:'Quen'
  },
  {
    post_name: 'MySql',
    description: 'This is filler text, will update soon.',
    author_name:'Quen'
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

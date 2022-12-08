const { Comments } = require('../models');


const commentsData = [
    {
        comment_content: 'What an awesome comments',
        user_id: 1,
        post_id: 2
    },
    {
        comment_content: 'Comments are amazing',
        user_id: 2,
        post_id: 1
    },
    {
        comment_content: 'Here is another great comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment_content: 'Okay getting tired of comments',
        user_id: 2,
        post_id: 1
    },
    {
        comment_content: 'Last comment for now',
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
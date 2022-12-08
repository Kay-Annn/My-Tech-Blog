const { User } = require('../models');


const userData = [
    {
        username: 'Kay',
        email: 'kay@kay.com',
        password: 'awesomepasswrd'
    },
    {
        username: 'Quen',
        email: 'quen@quen.com',
        password: 'easypassword'
    },
    {
        username: 'Graig',
        email: 'graig@graig.com',
        password: 'coolpassword'
    },
    {
        username: 'Doreen',
        email: 'doreen@doreen.com',
        password: 'mypassword'
    },
    {
        username: 'Queshawn',
        email: 'This is filler text, will update soon.',
        password: 'myawesomepassword'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

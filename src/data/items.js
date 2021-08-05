import {nanoid} from "nanoid";

const items = [
    {
        id:nanoid(),
        title:'beef',
        category:'MaLaTang',
        price:14.99,
        img: './img/beef.png',
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'Lamb',
        category:'MaLaTang',
        price:14.99,
        img: './img/lamb.png',
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'Shrimp Ball',
        category:'MaLaTang',
        price:14.99,
        img: "./img/shrimp ball.png",
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'Shrimp Ball',
        category:'MaLa Xiangguo',
        price:14.99,
        img: "./img/shrimp ball.png",
        description: 'I am beef',
    },

    ]

export default items

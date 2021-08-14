import {nanoid} from "nanoid";

const items = [
    {
        id:nanoid(),
        title:'beef hot spicy stew',
        category:'MaLaTang',
        price:14.99,
        images: './images/items/beef.png',
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'lamb hot spicy stew',
        category:'MaLaTang',
        price:14.99,
        images: './images/items/lamb.png',
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'Shrimp Ball',
        category:'MaLaTang',
        price:14.99,
        images: "./images/items/shrimp ball.png",
        description: 'I am beef',
    },
    {
        id:nanoid(),
        title:'Shrimp Ball',
        category:'MaLa Xiangguo',
        price:14.99,
        images: "./images/items/shrimp ball.png",
        description: 'I am beef',
    },

    ]

    export default items;

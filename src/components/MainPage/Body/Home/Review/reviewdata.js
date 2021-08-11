import { nanoid } from "nanoid"

const reviewdata =[
    {
        id: nanoid(),   
        userphoto: "./images/reviews/Krypton Jav.png",
        username: "Krypton Jav",
        star: 4,
        comment_time:"3 weeks ago",
        description: "Great prices and if you like spice this is the place. They do not rip you off here. Everything tasted great.",
        reviewphoto:'./images/reviews/2021-07-20.jpg',
        
    },
    {
        id: nanoid(),   
        userphoto: "./images/reviews/nora sarah.png",
        username: "nora sarah",
        star: 5,
        comment_time:"6 months ago",
        description: "my favorite spot for dry hot pot! been coming here for years and it’s amazing each time. the outdoor set up is cozy and warm!",
        reviewphoto:'./images/reviews/IMG_4258.jpg',
    },
    {
        id: nanoid(),   
        userphoto: "",
        username: "小张",
        star: 5,
        comment_time:"",
        description: "",
        reviewphoto:'',
    },
    {
        id: nanoid(),   
        userphoto: "",
        username: "小余",
        star: 5,
        comment_time:"",
        description: "",
        reviewphoto:'',
    },
    {
        id: nanoid(),   
        userphoto: "",
        username: "吴亦凡",
        star: 5,
        comment_time:"",
        description: "",
        reviewphoto:'',
    },
]

export default reviewdata;
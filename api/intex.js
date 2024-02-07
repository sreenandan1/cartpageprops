import express from "express"
import cors from "cors"


const App=express();
App.use(
    cors({
        origin:"http://localhost:3000 ",
        credentials:true
    })
)
const data =[
    {
        id:1,
        Image:"https://assets.woodlandworldwide.app/compressed/images/FGC0BB035861A/RUSSIA_DBROWN/FGC0BB035861A_B66_4.jpg ",
        name:"Khaki hiking boot",
        price:4000,
    },
    {
        id:5,
        Image:'https://www.woodlandworldwide.com/_next/image?url=https%3A%2F%2Fassets.woodlandworldwide.app%2Fcompressed%2Fimages%2FFGF0510R3432A%2FGREY%2FFGF0510R3432A_021_0.jpg&w=1920&q=75',
        name:"Dtan Boot for Men",
        price:3000,
    },
    {
        id:2,
        Image:'https://www.woodlandworldwide.com/_next/image?url=https%3A%2F%2Fassets.woodlandworldwide.app%2Fcompressed%2Fimages%2FFGC015037811S%2FPARIS_GREY%2FFGC015037811S_E79_0.jpg&w=1920&q=75',
        name:"Camel Boot for Men",
        price:25000,
    },
    {
        id:3,
        Image:'https://www.woodlandworldwide.com/_next/image?url=https%3A%2F%2Fassets.woodlandworldwide.app%2Fcompressed%2Fimages%2FFGC015043531S%2FGREY%2FFGC015043531S_021_0.jpg&w=1920&q=75',

        name:"Olive green shoe for men",
        price:2500,
    },
    {
        id:4,
        Image:'https://www.woodlandworldwide.com/_next/image?url=https%3A%2F%2Fassets.woodlandworldwide.app%2Fcompressed%2Fimages%2FFGC051046392A%2FBROWN%2FFGC051046392A_008_0.jpg&w=1920&q=75',

        name:"Navy Boot for Men",
        price:4500,
    },
]
App.get("/data",(req,res)=>res.send(data));


const port=3008;
App.listen(port,()=>console.log(`you are running on ${port}`));

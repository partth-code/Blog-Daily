import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://cyberpunk:PYTHONjavaHTML5c#@cluster0.br1zymr.mongodb.net/blog-daily')
    console.log("DB Connected");
}


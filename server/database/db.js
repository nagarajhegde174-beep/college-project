import mongoose from "mongoose";

export const connectDB =  ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN STACK LIBRARY MANAGEMENT SYSTEM ",
    }).then(()=>{
        console.log(`Database connected successfully`);
        
    }).catch(err=>{
        console.log("error connceting to database",err);
        
    });
};
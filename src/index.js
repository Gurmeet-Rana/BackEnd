/* require('dotenv').config({path:'./env'}) */

import dotenv from "dotenv"

/* import mongoose from "mongoose"

import { DB_NAME } from "./constants"; */

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();

/* 
import express from "express"
const app=express()

;( async ()=>{

    try{
       const db=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",()=>{
            console.log("Err;",error);
            throw error;
        })  

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    }catch(err)
    {
        console.error("Error :",err);
        throw err;
    }

} )()

function connectDB(){}

connectDB() */
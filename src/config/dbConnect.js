import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:123@cluster0.hzazd3a.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
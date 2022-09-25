import mongoose from "mongoose";

 mongoose.connect("mongodb+srv://root:123@cluster0.hzazd3a.mongodb.net/alura-node");
//mongoose.connect("mongodb+srv://root:123@cluster0.hzazd3a.mongodb.net/?retryWrites=true&w=majority");
//mongodb+srv://root:<password>@cluster0.hzazd3a.mongodb.net/?retryWrites=true&w=majority
let db = mongoose.connection;

export default db;
import mongoose from "mongoose";


export async function startConnection() {
  //Accedim a la BBDD que tenim ( en dev estarà en local )
  //Canviar el .connect (mongo o 127.0.0.1)!
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/MINIM2", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  console.log("Connection with DATABASE (MINIM2) established");
}
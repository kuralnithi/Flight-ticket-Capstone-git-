import mongoose from "mongoose";

export const ConnectDb = async () => {

  const mongoDbURL = process.env.MONGODBCONNECTIONSTRING;

  try {
    const connection = await mongoose.connect(mongoDbURL);

    console.log("___---Mongodb connected______---" );

    return connection;
  } catch (error) {
    console.log("error in mongodb connection", error);
  }
};
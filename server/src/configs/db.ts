import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Missing mongo uri");
    }
    const mongoConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`💿 [database]: MongoDB Connected: ${mongoConnection.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
};

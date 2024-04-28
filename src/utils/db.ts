import mongoose from "mongoose";
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
connectDB();

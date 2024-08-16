import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sanmitsuthar:9409531985@cluster0.los9g.mongodb.net/Food-Delivery"
    )
    .then(() => console.log("DB Connected!"));
};

export default connectDB;
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  price: {
    type: Number,
    requried: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// If model already exists it will use it otherwise it will create new one
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
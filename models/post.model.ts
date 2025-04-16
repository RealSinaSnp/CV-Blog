import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: String,
  content: String,
  slug: { type: String, unique: true },
  createdAt: { 
    type: Date, default: Date.now 
  },
});

export default models.Post || model("Post", PostSchema);
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;

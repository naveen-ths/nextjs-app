import mongoose, { Document, Model } from "mongoose";

export interface IPost {
  title: string;
  description: string;
}

export interface IPostDocument extends IPost, Document {
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPostDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Post: Model<IPostDocument> =
  mongoose.models?.Post || mongoose.model("Post", postSchema);

export default Post;
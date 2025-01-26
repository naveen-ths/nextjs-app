"use server";
import Post from "@/models/postModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "../lib/db";

export const createPosts = async (formData: FormData) => {
  await connectToMongoDB();
  // Extracting todo content and time from formData
  const title = formData.get("title");
  const description = formData.get("description");

  try {
    // Creating a new todo using Todo model
    const newPost = await Post.create({
      title,
      description,
    });
    // Saving the new todo
    newPost.save();
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning the string representation of the new todo
    return newPost.toString();
  } catch (error) {
    console.log("Erorr: ", error);
    return { message: "error creating post" };
  }
};

export const deletePost = async (id: FormData) => {
  // Extracting todo ID from formData
  const postId = id.get("id");
  try {
    // Deleting the todo with the specified ID
    await Post.deleteOne({ _id: postId });
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning a success message after deleting the todo
    return "post deleted";
  } catch (error) {
    // Returning an error message if todo deletion fails
    return { message: "error deleting post" };
  }
};

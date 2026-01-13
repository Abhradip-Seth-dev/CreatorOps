'use server';
import { redirect } from "next/navigation";
import { pool } from "./db";

export async function createPost(formdata:FormData){
    const title = formdata.get("title") as string;
    const description = formdata.get("description") as string;
    const category = formdata.get("category") as string;

    if(!title || !description || !category){
        throw new Error("Missing required fields");
    }
    const res = await pool.query("INSERT INTO posts (title,description,category) VALUES ($1,$2,$3)", [title,description,category]);

    redirect("/")
}
export async function updatePostById(id:number,formdata:FormData){
    const title = formdata.get("title") as string;
    const description = formdata.get("description") as string;
    const category = formdata.get("category") as string;

    if(!title || !description || !category){
        throw new Error("Missing required fields");
    }
    const res = await pool.query("UPDATE posts SET title = $1,description=$2,category=$3 WHERE id = $4",[title,description,category,id]);

    redirect(`/posts/${id}`)
}
export async function deletePostById(id:number){
    const res = await pool.query("DELETE FROM posts WHERE id = $1",[id]);

    redirect("/")
}
import { redirect } from 'next/navigation';
import {pool} from './db'

export async function getPosts() {
    const res = await pool.query("SELECT id, title, description, category, created_at FROM posts ORDER BY created_at ASC LIMIT 6");
    // console.log(res.rows)
    return res.rows
}

export async function getPostById(id:number){
    const res = await pool.query("SELECT id, title, description, category, created_at FROM posts WHERE id = $1", [id]);
    return res.rows[0];   
    
}


import {getPostById} from '../../../lib/posts';
import { Pencil } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
export default async function singlePostPage({params}: {params: Promise<{id: string}>}){
    const {id} =await params;
    const postId = Number(id);
    const post = await getPostById(postId);
    if(!post){
        notFound();
    }
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">
            {post.title}
          <Link href={`/posts/${postId}/edit`}><Pencil className='inline ml-10 bg-blue-500 text-white cursor-pointer '/></Link>
          </h1>
    
          <div className="text-sm text-zinc-500 mb-8">
            <span>{post.category}</span> ·{" "}
            <span>{new Date(post.created_at).toDateString()}</span>
          </div>
    
          <p className="text-lg leading-relaxed text-zinc-700">
            {post.description}
          </p>
        </main>
      );

}
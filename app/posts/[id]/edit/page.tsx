import { getPostById } from "@/lib/posts";
import { notFound } from "next/navigation";
import { updatePostById , deletePostById } from "@/lib/actions";
export default async function editPostPage({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const postId = Number(id);
    const post = await getPostById(postId);
    if(!post){
        notFound();
    }
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-semibold mb-8">Edit Post</h1>
    
          <form className="space-y-6" action={updatePostById.bind(null,postId)}>
         
            <input
              name="title"
              defaultValue={post.title}
              className="w-full text-2xl outline-none"
            />
    
            <textarea
              name="description"
              defaultValue={post.description}
              className="w-full min-h-[300px] outline-none"
            />
    
            <select
              name="category"
              defaultValue={post.category}
              className="border px-3 py-2"
            >
              <option value="CRAFT">Craft</option>
              <option value="STRATEGY">Strategy</option>
              <option value="MINDSET">Mindset</option>
            </select>
    
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded ml-3"
            >
              Save Changes
            </button>
            
            
          </form>
          <form action={deletePostById.bind(null,postId)} className="inline">
            <button
    type="submit"
    className="text-red-600 border border-red-600 px-6 py-2 rounded ml-4"
  >
    Delete Post
  </button>
            </form>
        </main>
      );
}
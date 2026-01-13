import Image from "next/image";
import Card from './own-components/Card';
// import {posts} from '../lib/posts';
import { getPosts } from "../lib/posts";
export default async function Home() {
  
  const data = await getPosts();
  console.log(data);
  
  
  return (
  <div>
    <section className="pb-16 pt-8 text-center">
    <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[40px] md:text-[56px] font-extrabold leading-[1.1] pb-4 font-display">
                                Where Creators <br className="hidden md:block"/> Think in Public
                            </h1>
    <p className="text-[#4c739a] dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto px-4">
                                The minimal publishing platform for serious writers to manage their craft and grow an audience without the noise.
                            </p>
    </section>
    <div className="flex flex-col gap-2">
    <div className="px-4 py-1 border-b border-slate-200 dark:border-slate-800 mb-4">
    <h3 className="text-sm font-bold uppercase tracking-widest text-[#4c739a] dark:text-slate-500">Latest Thoughts</h3>
    </div>
    </div>
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-16">
      {data.map((post: any) => (
        <Card 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          description={post.description} 
          category={post.category} 
          created_at={post.created_at} 
        />
      ))}

    </div>
    </div>
  </div>);
}

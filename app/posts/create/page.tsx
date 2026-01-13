import { createPost } from "@/lib/actions";

export default function CreatePostPage() {
  return (
    <form action={createPost} className="max-w-3xl mx-auto px-6 py-16">
      
      {/* Title */}
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        className="w-full text-4xl font-semibold outline-none mb-8"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Start writing your story..."
        className="w-full min-h-[300px] text-lg outline-none resize-none"
      />

      {/* Category */}
      <select
        name="category"
        className="mt-6 border px-3 py-2 rounded"
      >
        <option value="">Select category</option>
        <option value="CRAFT">Craft</option>
        <option value="STRATEGY">Strategy</option>
        <option value="MINDSET">Mindset</option>
        <option value="PHILOSOPHY">Philosophy</option>
      </select>

      {/* Publish */}
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded" >
          Publish
        </button>
      </div>

    </form>
  );
}
import { fetchPosts } from "@/app/api/posts";
import { PostForm } from "@/app/ui/home/PostForm";
import { PostList } from "@/app/ui/home/PostList/PostList";

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <div className="w-full h-screen border-r-sm border-borderColor">
      <PostForm />
      <PostList posts={posts} />
    </div>
  );
}

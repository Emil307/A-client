import { Post } from "@/app/ui/home/Post";
import { PostForm } from "@/app/ui/home/PostForm";

export default function Page() {
  return (
    <div className="w-full border-r-sm border-borderColor">
      <PostForm />
      <Post />
    </div>
  );
}

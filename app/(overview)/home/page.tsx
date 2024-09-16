import { PostForm } from "@/app/ui/home/PostForm";
import { Postist } from "@/app/ui/home/PostList/PostList";

export default function Page() {
  return (
    <div className="w-full h-screen border-r-sm border-borderColor">
      <PostForm />
      <Postist />
    </div>
  );
}

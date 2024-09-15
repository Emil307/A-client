import { Navbar } from "@/app/ui/home/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      {children}
    </div>
  );
}

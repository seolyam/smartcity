import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/30">
      <div className="text-2xl font-semibold text-white">MegaWorld</div>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10 transition-colors duration-300"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
}

import { SidebarTrigger } from "@/components/ui/sidebar";

export const AppHeader = () => {
  return (
    <header className="flex items-center gap-2 px-4 border-b h-14 shrink-0 bg-background">
      <SidebarTrigger />
    </header>
  );
};

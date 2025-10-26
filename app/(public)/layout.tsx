import LayoutMain from "@/components/layouts/main";

export default function PublicMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutMain>
        <div className="flex">
          <div className="flex-1">{children}</div>
        </div>
      </LayoutMain>
    </>
  );
}

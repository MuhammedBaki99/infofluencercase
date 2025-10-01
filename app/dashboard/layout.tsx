import DBHeader from "@/components/dbheader";
import DBSidebar from "@/components/dbsidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DBHeader />
      <div className="flex">
        <DBSidebar />
        {children}
      </div>
    </div>
  );
}
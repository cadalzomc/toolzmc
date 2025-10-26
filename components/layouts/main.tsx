import { Navbar } from "./navbar";
import Footer from "./footer";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-svh overflow-hidden">
      <Navbar />

      <main className="mt-16 lg:mt-20">{children}</main>

      <Footer />
    </div>
  );
};

export default LayoutMain;

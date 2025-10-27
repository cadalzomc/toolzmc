import LayoutAuthMain from "@/components/layouts/auth/main";

const AuthMainLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutAuthMain>{children}</LayoutAuthMain>;
};

export default AuthMainLayout;

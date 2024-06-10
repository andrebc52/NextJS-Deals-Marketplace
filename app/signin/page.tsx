import Signin from "../components/Signin";
import RootLayout from "../layout";

export default function SigninPage() {
  return (
    <RootLayout showSidebar={false}>
      <Signin />
    </RootLayout>
  );
}
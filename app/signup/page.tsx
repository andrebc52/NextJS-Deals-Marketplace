import Signup from "../components/Signup";
import RootLayout from "../layout";

export default function SigninPage() {
  return (
    <RootLayout showSidebar={false}>
      <Signup />
    </RootLayout>
  );
}
